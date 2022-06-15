let openNav = document.querySelector('.nav-lines-container');
let closeNav = document.querySelector('.close-nav-section');
let navSlider = document.querySelector('.nav-section')
let linksClick = document.querySelectorAll('.nav-links');
let closeNss = document.querySelector('.nav-section')



openNav.onclick = function() {
    navSlider.classList.add('openNav');
    navSlider.classList.remove('closeNav');
}


closeNss.onclick = closeNavSlider;
closeNav.onclick = closeNavSlider;

linksClick.forEach((link)=> {
    link.onclick = closeNavSlider;
})

function closeNavSlider() {
    navSlider.classList.remove('openNav');
    navSlider.classList.add('closeNav');
}
