//define global variables
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


// build the navbar
for (let section of sections) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
    navbar.appendChild(listElement);
}
