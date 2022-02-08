var input = document.querySelector('#txt')
var search = document.querySelector('#search')

search.addEventListener('mouseover',  searchOver)
search.addEventListener('mouseout', searchOut)


function mudar(){
    input.style.outline = 'none'
}

function searchOver(){
    search.style.width = '70vw'


}

function searchOut(){
    search.style.width = '80vw'
}