const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-links");

let isNavBarOpen = false;

// OPEN MOBILE NAVIGATION MENU
navBtn.addEventListener('click', () => {
    const navBtnIcon = navBtn.querySelector('img');
    if (!isNavBarOpen) {
        isNavBarOpen = true;
        navBtnIcon.setAttribute('src', "/images/icon-close.svg");
        navMenu.classList.add('open');
        
    } else {
        isNavBarOpen = false;
        navBtnIcon.setAttribute('src', "/images/icon-hamburger.svg");
        navMenu.classList.remove('open');
    }
});

// HANDLE DROPDOWN MENUS
const dropDownList = document.querySelector(".dropdown-list");

dropDownList.addEventListener('click', (e) => {
    
});