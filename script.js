// darkMode and lightMode toggle START
const lightSwitch = document.querySelector(".day");
const darkSwitch = document.querySelector(".night");

lightSwitch.addEventListener("click", (e) => {
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

// darkMode and lightMode toggle MOBILE

const ligthSwitchMobile = document.querySelector('.day-mobile');
const darkSwitchMobile = document.querySelector('.night-mobile');


ligthSwitchMobile.addEventListener('click', () =>{
    console.log('yeah baby');
    darkModeOff();
})

darkSwitchMobile.addEventListener('click', () =>{
    console.log('yeah baby');
    darkModeOn();
})
// darkMode and lightMode toggle MOBILE END


// mobile navbar 
const mobileNavbar = document.querySelector('.mobile-navbar-open');
const mobileNavbarContents = document.querySelector('.mobile-navbar-contents')
const closeMobileNavbar = document.querySelector('.mobile-navbar-close')


mobileNavbar.addEventListener('click', () =>{
    console.log('toggle');
    mobileNavbarContents.setAttribute("style", "display:grid !important");
    mobileNavbar.classList.add('remove')
    closeMobileNavbar.classList.remove('remove')
    closeMobileNavbar.classList.add('show')
})

closeMobileNavbar.addEventListener('click', () =>{
    console.log('close');
    mobileNavbarContents.setAttribute("style", "display:none !important");
    mobileNavbar.classList.remove('remove')
    mobileNavbar.classList.add('show')
    closeMobileNavbar.classList.add('remove')


} )



// education and work roadmap toggle
const workButton = document.querySelector(".work-btn");
const workRoadMap = document.querySelector(".work-roadmap");
const workButtonText = document.querySelector(".work-btn h2");
const workButtonTextLight = document.querySelector('.light-mode .work-btn h2')
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
  workButtonTextLight.setAttribute("style", "color:#000 !important");
}
// education and work roadmap toggle END
