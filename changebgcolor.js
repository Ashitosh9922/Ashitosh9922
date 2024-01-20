const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','blue','green','yellow','pink','purple','violet']
body.style.backgroundColor = 'orange'

button.addEventListener('click',changeB)
function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}