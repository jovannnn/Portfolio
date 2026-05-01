const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  // zatvoranje na menito pri klik na hamburger
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('toggle');
      navLinks.classList.toggle('active');
  });
  navItems.forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('toggle');
      });
  });

  //Skripta za sekcija education
 const karticki = document.querySelectorAll('.education-card');
const dots = document.querySelectorAll('.dot');

let index = 0;

setInterval(() => {
    karticki[index].classList.remove('aktivna');
    dots[index].classList.remove('aktivna');

    index = (index + 1) % karticki.length;

    karticki[index].classList.add('aktivna');
    dots[index].classList.add('aktivna');
}, 5000);

 //Skripta za sekcija experience
 const kartickii = document.querySelectorAll('.experience-card');
const dotts = document.querySelectorAll('.dott');

let indexx = 0;

setInterval(() => {
    kartickii[indexx].classList.remove('aktivna');
    dotts[indexx].classList.remove('aktivna');

    indexx = (indexx + 1) % kartickii.length;

    kartickii[indexx].classList.add('aktivna');
    dotts[indexx].classList.add('aktivna');
}, 5000);



