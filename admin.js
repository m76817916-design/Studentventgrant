function load(){
let apps=JSON.parse(localStorage.getItem("apps"))||[];
let table=document.getElementById("table");
table.innerHTML="";

apps.forEach((a,i)=>{
let row=`<tr>
<td>${a.serial}</td>
<td>${a.name}</td>
<td>${a.status}</td>
<td>
<button onclick="approve(${i})">Approve</button>
<button onclick="reject(${i})">Reject</button>
</td>
</tr>`;
table.innerHTML+=row;
});
}

function approve(i){
let apps=JSON.parse(localStorage.getItem("apps"));
apps[i].status="Approved";
localStorage.setItem("apps",JSON.stringify(apps));
load();
}

function reject(i){
let apps=JSON.parse(localStorage.getItem("apps"));
apps[i].status="Rejected";
localStorage.setItem("apps",JSON.stringify(apps));
load();
}

load();