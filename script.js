'use strict';
// 1 : we need to capture all of our grabbing to a variable and we chose sensible names that resonate with class name so we will put them in order and use them instead of typing long document.query....
// 2: use for loop for show modal button to go over node to make it show modal
// 3: add event listener for click to show modal when clicked again linking it with button open variable we defined above...
// 4: remove hidden class to show modal becuase it is display none; it is done with modal variable again refer above!
/*modal.classList.remove('hidden'); // dont use .  dot is for selector only!! we will remove hidden class  to show modal
overlay.classList.remove('hidden');*/
// 5: make below functions captured to variable to use less code DRY!
// 5-a: we can apply the logic of closeModal function to openModal as new function and use of
// 6: now we need to manupulate keyboard interactions !!! we need to listen keyboard events.
// keyboard events are global and keydown, keyup - when you lift finger from any key - keypressed
// when key pressed and event happens and JS creates an object and then we handle that event object that s why we define a function that will called upon an event.
// e stands for anything it could be anything.
//NOTE: step by step coding with notes under or above the code lines is stored in myjsworking folder or github.
//below functions are not needed anymore if above closeModal function is used and we are not calling closeModal with () paranthesis  when clicked JS engine will call it and use!!!!!
/*btnCloseModal.addEventListener('click', function () {
  // we are not calling this function becuase JS engine will call it as soon as button clicked!!!
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden'); // dont use .  dot is for selector only!! we will remove hidden class  to show modal
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal); // we dont call but jus declare openModal function because click event will call this function.

// this for goes over the node list of show modal and does the job for us.
/*function () {  // this function was first used to make the modal window work but we then developed a functin to do same job and we will declare it above at 5a
  console.log('button clicked');
}
  // no need for curly braces as this is 1 line function and it will work for us. for and if staments you can use withut curly braces if it is 1 line function.
  
  btnOpenModal[i].addEventListener('click');
*/

// 5: make below functions captured to variable to use less code DRY!
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // DO not USE () this will call the function and we want click call the function.
overlay.addEventListener('click', closeModal); // now this is more readable. it is DRY and nice!!

document.addEventListener('keydown', function (e) {
  console.log('e.key'); // this function will create an event with e .key

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if (!modal.classList.contains('hidden')) >>> this goes up to 1 line above!!
    // ! makes modal.classList.contains('hidden') = false so it means modal class is not hidden .it measns if it is actually visible.!!
    closeModal();
  }
});
