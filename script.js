let data={};

fetch('institutions.json')
.then(res=>res.json())
.then(d=>data=d);

document.getElementById("type").onchange=function(){
let list=data[this.value]||[];
let school=document.getElementById("school");
school.innerHTML="";
list.forEach((s,i)=>{
let o=document.createElement("option");
o.textContent=(i+1)+". "+s;
school.appendChild(o);
});
};

document.getElementById("form").onsubmit=function(e){
e.preventDefault();

let apps=JSON.parse(localStorage.getItem("apps")||"[]");
apps.push({name:this[0].value+" "+this[1].value,school:this[3].value,status:"pending"});
localStorage.setItem("apps",JSON.stringify(apps));

document.getElementById("msg").innerText="Submitted (Pending)";
this.reset();
};
