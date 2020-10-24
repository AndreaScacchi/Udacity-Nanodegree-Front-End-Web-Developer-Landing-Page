//define global variables
const navbar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
        const item = section.getBoundingClientRect();
        if (item.top <= 150 && item.bottom >= 150) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
}
document.addEventListener("scroll", function () {
    makeActive();
});

//build navbar dynamically
function createNav() {
    for (let item of sections) {
        let myNav = document.createElement("li");
        myNav.className = "menu__link";
        myNav.dataset.nav = item.id;
        myNav.innerText = item.dataset.nav;
        myNav.addEventListener("click", function () {
            item.scrollIntoView({ behavior: "smooth" });
        });
        navbar.appendChild(myNav);
    }
}
createNav();

//build the button
const myButton = document.querySelector(".btn");

function theButton() {
    myButton.addEventListener("click", function () {
        window.scrollTo({ behavior: "smooth", top: 0 });
    });
}
theButton();
