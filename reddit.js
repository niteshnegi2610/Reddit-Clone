//To show overlay pop up on LogIn Button click
const popUp = document.querySelector(".popUp");
const overlay = document.querySelector(".overlay");
const btnClosePop = document.querySelector(".close-pop");
const btnsOpenPop = document.querySelectorAll(".logIn");

//when we click LogIN button
const openPopUp = () => {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//when we click X on overlay
const closePopUp = () => {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

//when we click overside of overlay
for (let i = 0; i < btnsOpenPop.length; i++)
  btnsOpenPop[i].addEventListener("click", openPopUp);

btnClosePop.addEventListener("click", closePopUp);
overlay.addEventListener("click", closePopUp);

//to change color of navbar on scolling
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
};
