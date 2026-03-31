function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="12345"){
document.getElementById("dashboard").style.display="block";
load();
}else{
alert("Invalid login");
}
}

function load(){
let apps=JSON.parse(localStorage.getItem("apps")||"[]");
let table=document.getElementById("table");
table.innerHTML="";

apps.forEach((a,i)=>{
table.innerHTML+=`<tr>
<td>${a.name}</td>
<td>${a.school}</td>
<td>${a.status}</td>
<td><button onclick="approve(${i})">Approve</button></td>
</tr>`;
});
}

function approve(i){
let apps=JSON.parse(localStorage.getItem("apps"));
apps[i].status="approved";
localStorage.setItem("apps",JSON.stringify(apps));
load();
}
