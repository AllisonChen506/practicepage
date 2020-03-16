
/* Make this function print a random title from the list */
function updateTitle() {
    let x = Math.floor(Math.random() * 3);
    const titles = ['title1', 'title2', 'title3']
    const title = document.getElementById('title')
    title.innerHTML = titles[x];
}

/* Create a function that will calculate the current date */
function getTime() {
    // TO DO
}

/* Create a function that will add two numbers from input boxes */
function addNumbers(){
    // TO DO
}

/* Create a function that will find the difference between two numbers from input boxes */
function subNumbers(){
    // TO DO
}

/* Crate a function that will find the product of two numbers from input boxes */
function mulNumbers(){
    // TO DO
}

/* You can use helper functions if needed. Also, create the function to generate the dropdown menu.
   The dropdown menu needs to be generated when the page is loaded. If you get confused, do some research
   on event js functions. onClick() is one of them.
*/