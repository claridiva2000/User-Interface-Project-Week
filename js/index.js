// JS goes here

const burger = document.querySelector('.enter');
const menu = document.querySelector('.drop');
const header = document.querySelector('h1');

burger.addEventListener('click', ()=>{
  drop.style.display="block";
  burger.style.opacity = "0";
  header.style.opacity = "0";


})

const expic = document.querySelector('.exit');
const drop = document.querySelector('.drop');
expic.addEventListener('click', () =>{
 drop.style.display = "none";
 burger.style.opacity = "1";
 header.style.opacity = "1";
});

