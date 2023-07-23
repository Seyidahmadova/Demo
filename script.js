const select =  document.querySelector('.select')
const options =  document.querySelector('.options')
const option =  document.querySelectorAll('.option')
const watchlists = document.querySelector('.watchlists')
const watchlist = document.querySelector('.watchlist')
const exit  =  document.querySelector('.exit')
const slider = document.querySelector('.slider')
const movies = document.querySelector('.movies')
const prevbtn = document.querySelector('.prev-button')
const nextbtn = document.querySelector('.next-button')



options.style.display = 'none'

select.addEventListener('click', function() {
    options.style.display =  options.style.display === 'none' ? 'flex' : 'none'
})

option.forEach( el => {
    el.addEventListener('click', function() {
        select.textContent = el.textContent
        options.style.display = 'none'
    })
})


watchlists.style.display = 'none'

watchlist.addEventListener('click', function() {
    watchlists.style.display =  'flex'
})

exit.addEventListener('click', function() {
    watchlists.style.display = 'none'
})


let slideIndex = 0

// prevbtn.addEventListener('click', function(){
//     slideIndex = slideIndex-1
// })

// nextbtn.addEventListener('click', function(){
//     slideIndex = slideIndex+1
// })





