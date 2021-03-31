
// This function changes the color of all the text and removes the specified classes and shows an image with a paragraph.
// It is being used alongside the click event.
function clickedText(eventDetails) {
    title.style.color = '#556b2f';
    document.getElementsByClassName("appear1")[0].classList.remove("hidden");
    document.getElementsByClassName("appear1")[1].classList.remove("hidden");
}

// This click event will trigger when a user clicks on the element.
// The function then gets called upon and executes as needed.
const title = document.getElementById('clickMe');
title.addEventListener('click', clickedText);


// This function changes the color of the h2 tag text, removes the specified classes and shows an image with a paragraph.
// It is being used alongside the mouseover event.
function hoverChange(eventDetails) {
    paraHover.style.color = '#FF9A00'
    document.getElementsByClassName("appear2")[0].classList.remove("hidden");
    document.getElementsByClassName("appear2")[1].classList.remove("hidden");
}

// This mouseover event will trigger when a user hovers over an element with their mouse.
// The function then gets called upon and executes as needed.
const paraHover = document.getElementById('hover');
paraHover.addEventListener('mouseover', hoverChange);


// This function changes the color of the h2 tag text, removes the specfied classes and shows an image with a paragraph.
// This conditional statement only allows the changes if the spacebar key is pressed.
// It is being used alongside the keydown event.
function spacebarKeyOnly(eventDetails) {
    if (eventDetails.keyCode === 32) {
        document.getElementById('space').style.color ='#FF6863';
        document.getElementsByClassName("appear3")[0].classList.remove("hidden");
        document.getElementsByClassName("appear3")[1].classList.remove("hidden");
    }
}

// This keydown event will trigger when a user user presses a key on their keyboard.
// The function then gets called upon and executes as needed.
document.addEventListener('keydown', spacebarKeyOnly);

// This function changes the body color of the page.
// It is used alongside the drag event.
function dragDropped(eventDetails) {
    document.body.style.background = "#FFFFF1";
}

// The drag event triggers when a user drags a specified element.
// This uses the dragDropped function. When the user drags an image, the color of the page changes.
document.addEventListener('drag', dragDropped);
