const space = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    space.style.backgroundPositionY = `${offset*0.5}px`; 
})


const ship = document.querySelector('.button-ship');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    ship.classList.add('take-off');
})