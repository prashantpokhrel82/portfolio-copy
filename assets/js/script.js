// ==========Nav Toggle=============
const navItems = document.querySelector(".nav__items");
const navToggle = document.querySelector(".nav-toggle");
let clickCount = 0;
navToggle.addEventListener("click", () => {
  navItems.classList.toggle("show__nav__items");
  if (clickCount % 2 === 0) {
    navToggle.classList.remove("fa-bars");
    navToggle.classList.add("fa-xmark");
  } else {
    navToggle.classList.add("fa-bars");
    navToggle.classList.remove("fa-xmark");
  }
  clickCount++;
});

//   ============Color Toggle=============
const colorButton = document.querySelector(".color-gear");
const teal = document.querySelector(".teal");
colorButton.addEventListener("click", () => {
  teal.classList.toggle("show-teal");
});

//   ============Change Accent Color=============
const allColors = Array.from(document.getElementsByClassName("color"));
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
allColors.forEach((color) => {
  color.addEventListener("click", function () {
    allColors.forEach((color) => {
      color.classList.remove("color-active");
    });
    const activeColorName = this.classList[1];
    const activeColorValue = rootStyle.getPropertyValue(`--${activeColorName}`);
    root.style.setProperty("--color-accent", activeColorValue);
    this.classList.add("color-active");
  });
});
//   ============Reset Default Color=============
function changeToDefaultColor() {
  allColors.forEach((color) => {
    color.classList.remove("color-active");
  });
  const defaultColor = rootStyle.getPropertyValue("--color-default");
  root.style.setProperty("--color-accent", defaultColor);
}
