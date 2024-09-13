

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", function(){
    let elemContainer = document.querySelector("#elem-container");
    let fixedImage = document.querySelector("#fixed-image");
    
    elemContainer.addEventListener("mouseenter", function(){
        fixedImage.style.display = "block";
    })

    elemContainer.addEventListener("mouseleave", function(){
        fixedImage.style.display = "none";
    })

    let allElements = document.querySelectorAll(".elem");
   
    allElements.forEach(element =>{
        element.addEventListener("mouseenter", function(e){
            var image = e.target.getAttribute("data-image");
           
            fixedImage.style.backgroundImage = `url(${image})`;
        })
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
});

var menu = document.querySelector("nav h3");
var fullScr = document.querySelector("#full-scr");
var navImg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function(){
    if(flag == 0){
        fullScr.style.top = "0%";
        navImg.style.opacity = 0;
        flag = 1;
    }
    else{
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
    }
})

var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%";
}, 4200);