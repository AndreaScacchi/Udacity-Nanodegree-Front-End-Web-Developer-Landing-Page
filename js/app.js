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
document.addEventListener('scroll', makeActive);


// build the navbar
for (let section of sections) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
    navbar.appendChild(listElement);
}
