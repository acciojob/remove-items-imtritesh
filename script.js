//your JS code here. If required.
let select = document.querySelector("#colorSelect");
let button = document.querySelector(".btn");
button.addEventListener("click", function(){
	select.remove(select.selectedIndex);
})
