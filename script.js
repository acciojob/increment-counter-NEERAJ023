//your JS code here. If required.
let p=document.querySelector("#counter");
let btn=document.querySelector("#incrementBtn");
btn.addEventListener("click",onclick);
 let i=0;
function onclick(){
	alert(p.innerText);
	i++;
	p.innerText=i;
	
	
	
}