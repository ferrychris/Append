
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let menuBox = document.getElementById('menu');
let menuIcon = document.getElementById('menu-btn');

function menuBtn() {
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src="img/open (1).png"
    }

    else{
        menuIcon.src="img/close.png"
    }
    console.log("clicked")
};



// const menuIcon = document.getElementById("menu-btn");


// function  menuBtn() {
// const menuBox = document.getElementById("menu");
// menuBox.style.visibility="visible";
// if(menuBox.style.visibility = "visible"){
//   menuIcon.src="img/open (1).png"
// }

else{
  menuIcon.src="img/close.png"
}
}
