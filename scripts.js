
/* Make this function print a random title from the list */
function updateTitle() {
    let x = Math.floor(Math.random() * 3);
    const titles = ['title1', 'title2', 'title3']
    const title = document.getElementById('title')
    title.innerHTML = titles[x];
}