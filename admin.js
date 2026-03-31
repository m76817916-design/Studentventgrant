
function loadData() {
    let applications = JSON.parse(localStorage.getItem("svcg_applications")) || [];
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    applications.forEach(app => {
        let row = `<tr>
            <td>${app.fullName}</td>
            <td>${app.email}</td>
            <td>${app.phone}</td>
            <td>${app.school}</td>
            <td>${app.level}</td>
            <td>${app.palmpay}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function clearData() {
    localStorage.removeItem("svcg_applications");
    loadData();
}

loadData();
