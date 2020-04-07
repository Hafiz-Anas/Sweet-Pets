//RESPONSIVE NAVIGATION
const bar = document.querySelector(".bar");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector("nav-links li");
bar.addEventListener ("click", () => {
  navlinks.classList.toggle("open");
}); 

//FOUNDERS
const container = document.querySelector('#founders .container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
 
left.addEventListener('mouseenter', () => {
   container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
   container.classList.remove("hover-left");
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
 });
 
 right.addEventListener('mouseleave', () => {
    container.classList.remove("hover-right");
 });