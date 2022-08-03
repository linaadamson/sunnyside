const nav = document.querySelector(".nav-items");
const burger = document.querySelector(".burger");
const navItemsLi = document.querySelectorAll(".nav-items li");
const anchorTag = document.querySelectorAll(".nav-links");

burger.addEventListener("click", burgerMenu);
anchorTag.forEach((link) => {
  link.addEventListener("click", burgerMenu);
});

function burgerMenu() {
  nav.classList.toggle("nav-open");
  if (nav.classList.contains("nav-open")) {
    document.body.classList.add("hide");
  } else {
    document.body.classList.remove("hide");
  }

  navItemsLi.forEach((link) => {
    link.classList.toggle("fade");
  });
}
