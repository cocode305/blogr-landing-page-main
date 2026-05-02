## 24/04/2026
**Coding Decision:** I updated the dropdown button to separate the styling for the button from it's contents.
I had to restructure the dropdown button so that I could easily separate the styling, and to also make it easy to read.

## 25/04/2026
Finished the desktop version for the nav section.

## 26/04/2026
### Task: Completing the CTA Banner Section
I finished adding and styling the contents of the CTA hero section, making it responsive across multiple device's viewport. To wrap up the session, I implemented an event listener on the mobile navbar button to capture user clicks and handle opening and closing of the nav menu.

## 27/04/2026
### Task: Building the Feature Section
Finally learnt how to use the `<picture></picture>` element to add multiple images for different screen sizes.

## 28/04/2026
### Task: Building the Feature Section - sess two
I couldn't finish styling the feature section desktop version. I need to learn how to correctly reorder the position of an element using flex or grid. That said, the section is mostly complete, and I was able to touch on the dropdown menu feature. Though I've now encountered a problem; ensuring only one drop down menu is open at a time in the desktop version.

## 30/04/2026
### Task: Handling dropdown menu event for different viewports.
I wanted the event listener for the dropdown button to work for two different states. One for when the viewport is above 1140px and the other for when it is below 1140px, so that multiple dropdowns don't display at once on the desktop version
I solved that by first checking the viewport width using `clientWidth`

## 01/05/2026
### Task: Refactored dropdown menu event handler and fixed "ReferenceError" bug
#### What Caused the bug?
I was incorrectly using the event bubbling concept. I wanted the dropdown menu to only display one menu at a time when clicked, so I:
- listened for the event on the parent container 
```HTML 
<ul class="dropdown-list"></ul>
```
- Didn't understand how to combine checking the browser's viewport width and ensuring the event only works when the dropdown menu button was clicked. So I did this:
```JS
if(e.target.closest('.dropdown-btn') && body.clientWidth >= 1140) {} else {
    dropDownMenu.classList.toggle("active");
}
```
Which always returned a reference error whenever an element other than the dropdown menu button was clicked.

#### Solution
``` JS
dropDownList.addEventListener('click', (e) => {
    if (e.target.closest(".dropdown-btn")) {
      let dropDownItem = e.target.closest(".dropdown-item");
      let dropDownMenu = dropDownItem.querySelector(".dropdown-menu");

      // Desktop: Remove active from already active dropdown menu
      if (body.clientWidth >= 1140) {
        if (dropDownMenu.classList.contains("active")) {
          dropDownMenu.classList.remove("active");
        } else {
          for (i = 0; i < dropdownMenus.length; i++) {
            if (dropdownMenus[i].classList.contains("active")) {
              dropdownMenus[i].classList.remove("active");
            }
          }
          dropDownMenu.classList.add("active");
        }
      } else {
        dropDownMenu.classList.toggle("active");
      }
    }
});
```
