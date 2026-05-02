const body = document.body;
const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-links");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

let isNavBarOpen = false;

// OPEN MOBILE NAVIGATION MENU
navBtn.addEventListener('click', () => {
    const navBtnIcon = navBtn.querySelector('img');
    if (!isNavBarOpen) {
        isNavBarOpen = true;
        navBtnIcon.setAttribute('src', "images/icon-close.svg");
        navMenu.classList.add('open');
        
    } else {
        isNavBarOpen = false;
        navBtnIcon.setAttribute('src', "images/icon-hamburger.svg");
        navMenu.classList.remove('open');
    }
});

// DROPDOWN MENUS
const dropDownList = document.querySelector(".dropdown-list");

dropDownList.addEventListener('click', (e) => {
  if (e.target.closest(".dropdown-btn")) {
    let dropDownItem = e.target.closest(".dropdown-item");
    let dropDownMenu = dropDownItem.querySelector(".dropdown-menu");

    // Handle Desktop Dropdown Menus
    if (body.clientWidth >= 1140) {
      // Remove active class if found
      if (dropDownMenu.classList.contains("active")) {
        dropDownMenu.classList.remove("active");
      } else {
        // Loop through dropdown list and remove other active menus in the list
        for (i = 0; i < dropdownMenus.length; i++) {
          if (dropdownMenus[i].classList.contains("active")) {
            dropdownMenus[i].classList.remove("active");
          }
        }
        // Activate clicked menu
        dropDownMenu.classList.add("active");
      }
    } else {
        // Handle Mobile dropdown menus
        dropDownMenu.classList.toggle("active");
    }
  }
}); // How do I extend you to close all open dropdown menu when other parts of the page is clicked?