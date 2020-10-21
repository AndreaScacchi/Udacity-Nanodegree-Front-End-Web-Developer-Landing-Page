//define global variables
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


// add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
        const item = section.getBoundingClientRect();
        if (item.top <= 150 && item.bottom >= 150) {
            section.classList.add('your-active-class');
        }else {
            section.classList.remove('your-active-class');
        }
    }
}
document.addEventListener('scroll', function () {
    makeActive();
});



//build navbar dynamically
function createNav() {
    for (let item of sections) {
        let theMenu = document.createElement("li");
        theMenu.className = "menu__link";
        theMenu.dataset.nav = item.id;
        theMenu.innerText = item.dataset.nav;
        theMenu.addEventListener('click', function () {
            item.scrollIntoView({behavior: "smooth"})
        })
        navbar.appendChild(theMenu);
    }
}
createNav();
