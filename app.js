const nextBtns = document.querySelectorAll('.nextBtn')
const movieLists = document.querySelectorAll('.movie-list')
let current = 0 // current img index
nextBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const listItems = Array.from(movieLists[i].children)
        current = (current + 1) % listItems.length
        console.log(current)
        listItems[current].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    })
})
//toggle dark mode
const toggleButton = document.querySelector('#toggle-dark-mode-button')
const toggleBall = document.querySelector('.toggle-ball')
toggleBall.addEventListener('click', () => {
    toggleDarkMode(toggleButton)
})
function toggleDarkMode(element) {
    element.checked = !element.checked
}