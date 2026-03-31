const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "supersecretkey";

const adminUser = { username: "admin", password: "admin123" };

let applications = [];

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "No token" });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.post("/api/apply", (req, res) => {
  const appId = "SVCG-" + uuidv4().slice(0, 8);
  const newApp = { ...req.body, appId, status: "pending" };
  applications.push(newApp);
  res.json({ appId });
});

app.get("/api/admin/apps", auth, (req, res) => res.json(applications));

app.post("/api/admin/approve/:id", auth, (req, res) => {
  const appData = applications.find(a => a.appId === req.params.id);
  if (appData) appData.status = "approved";
  res.json({ success: true });
});

app.post("/api/admin/reject/:id", auth, (req, res) => {
  const appData = applications.find(a => a.appId === req.params.id);
  if (appData) appData.status = "rejected";
  res.json({ success: true });
});

app.get("/api/track/:id", (req, res) => {
  const appData = applications.find(a => a.appId === req.params.id);
  res.json(appData || { error: "Not found" });
});

app.listen(5000, () => console.log("Server running"));
