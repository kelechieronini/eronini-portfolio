// darkMode and lightMode toggle START
const lightSwitch = document.querySelector("li.nav-icon .day");
const darkSwitch = document.querySelector("li.nav-icon .night");

lightSwitch.addEventListener("click", () => {
  console.log("clicked biitch");
  darkModeOff();
});

darkSwitch.addEventListener("click", () => {
  console.log("clicked biitch");
  darkModeOn();
});

function darkModeOff() {
  document.body.classList.add("light-mode");
}
function darkModeOn() {
  document.body.classList.remove("light-mode");
}
// darkMode and lightMode toggle END

// education and work roadmap toggle
const workButton = document.querySelector(".work-btn");
const workRoadMap = document.querySelector(".work-roadmap");
const workButtonText = document.querySelector(".work-btn h2");
const educationButton = document.querySelector(".education-btn");
const educationRoadMap = document.querySelector(".education-roadmap");
const educationButtonText = document.querySelector(".education-btn h2");

workButton.addEventListener("click", () => {
  console.log("work boyyy");
  workExp();
});

educationButton.addEventListener("click", () => {
  educationExp();
});

function workExp() {
  workRoadMap.classList.remove("remove");
  workRoadMap.classList.add("show");
  workButtonText.setAttribute("style", "color:#6e57e0 !important");
  educationRoadMap.classList.add("remove");
  educationButtonText.setAttribute("style", "color:#fff !important");
}

function educationExp() {
  educationRoadMap.classList.remove("remove");
  educationRoadMap.classList.add("show");
  educationButtonText.setAttribute("style", "color:#6e57e0 !important");
  workRoadMap.classList.add("remove");
  workButtonText.setAttribute("style", "color:#fff !important");
}
// education and work roadmap toggle END
