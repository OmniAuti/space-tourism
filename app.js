const space = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    space.style.backgroundPositionY = `${offset*0.5}px`; 
})

