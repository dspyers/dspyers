/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

//the ul element
const navElem = document.getElementById("navbar__list");

// All sections
const sections = document.querySelectorAll("section");
console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
navElem.classList.add("navbar__menu");

//loops through each section and builds the li and anchor elements

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];

  const sectionId = section.id;
  const sectionData = section.getAttribute("data-nav");
  const navItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = "#" + sectionId;
  anchor.textContent = sectionData;
  anchor.classList.add("menu__link");
  navItem.setAttribute("data-nav", sectionId);
  // Scroll to anchor ID using scrollIntoView
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
  navItem.appendChild(anchor);
  navElem.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  sections.forEach(function (section) {
    const bounds = section.getBoundingClientRect();
    if (
      bounds.top >= 0 &&
      bounds.left >= 0 &&
      bounds.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounds.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    ) {
      section.classList.add("active-section");
      const navItem = document.querySelector(
        `#navbar__list li[data-nav="${section.id}"]`
      );
      if (navItem) {
        navItem.classList.add("active-nav-item");
      }
    } else {
      section.classList.remove("active-section");
      const navItem = document.querySelector(
        `#navbar__list li[data-nav="${section.id}"]`
      );
      if (navItem) {
        navItem.classList.remove("active-nav-item");
      }
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active
window.addEventListener("scroll", makeActive);
