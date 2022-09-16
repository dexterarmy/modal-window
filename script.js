'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// in this project we will work with classes
// we will not create the html for modal window using JS, we will show it or hide it
// we will define the variables for the elements in the starting only

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
// selecting multiple elements with same class , this creates a nodelist
const showModal = document.querySelectorAll('.show-modal');

//one line to execute so no curly braces to define the code block
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    /* modal.style.display = 'block'; but here we have to remember the property and value, imagine the hidden class had 10 properties, so manipulating class is a better option than style property directly , So manipulate styles on page -> export the styles in a class and manipulate the class*/
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', close); //declare or define the function here not call it
overlay.addEventListener('click', close); // passed the func as an argument
// because keyboard events are global events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    // checking if the element contains a class
    if (!modal.classList.contains('hidden')) {
      close();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
