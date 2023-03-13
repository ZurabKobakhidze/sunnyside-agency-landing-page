const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu_mobile");

hamburger.addEventListener("click", () => {
  
  hamburger.classList.toggle("hamburger_active");
  
    menu.classList.toggle("menu_mobile_active");
});