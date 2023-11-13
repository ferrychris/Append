const menuIcon = document.getElementById("menu-btn");


function  menuBtn() {
const menuBox = document.getElementById("menu");
menuBox.style.visibility="visible";
if(menuBox.style.visibility = "visible"){
  menuIcon.src="img/open (1).png"
}

else{
  menuIcon.src="img/close.png"
}
}