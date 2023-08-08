# Landing Page Project:

A landing page that shows the use of JS to dynamically add and modify elements in the DOM.

# Author:


Donovan Spyers in collaboration with the Udacity team.


# Dependencies:


None 


# INSTRUCTIONS:


To load the webpage please open HTML file with web browser or drag the HTML file into your web browser.

# Usage:


The landing page has four sections each inside of a <div> container.

  <section id="section1" data-nav="Section 1">
     <div class="Landing__container>
     
## Heading Level 2 

Section 1 

lorem ipsum for paragraph text

      </div>
    <section>



Each section is hightlighted when the section is in the viewport using an `eventListener('scroll')`. 
The corresponding navItems are highlighted as well when the section is in the viewport.

CSS used to add background color to each section and navItem that is in the viewport. 

`scrollIntoView` used on navItems to scroll the corresponding section into view.


# Technologies: 


The `navbar__list` li elements are created dynamically using JS. 

# Responsive Design:


Added a media query to `navbar__menu ul` for screens smaller than 415px to reduce the font-size to 13px. 


# Liscenses:


None