document.getElementById("form").addEventListener("submit",function(e){
e.preventDefault();

let inputs=this.querySelectorAll("input");
let apps=JSON.parse(localStorage.getItem("apps"))||[];

let serial=78906+apps.length;

let app={
serial:serial,
name:inputs[0].value+" "+inputs[1].value,
status:"Pending"
};

apps.push(app);
localStorage.setItem("apps",JSON.stringify(apps));

document.getElementById("msg").innerText="Submitted! Serial: "+serial;
this.reset();
});