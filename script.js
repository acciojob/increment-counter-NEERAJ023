//your JS code here. If required.
let p=document.querySelector("#counter");
let btn=document.querySelector("#incrementBtn");
btn.addEventListener("click",onclick);
 let i=1;
function onclick(){
	p.innerText=i;
	alert(p.innerText);
	i++;
}