const button = document.querySelector("button");
const body = document.querySelector("body");



function changeTheBackground() {
    var r = parseInt(Math.random()*255).toString(16);
    var g = parseInt(Math.random()*255).toString(16);
    var b = parseInt(Math.random()*255).toString(16);
    var s = r+g+b
    console.log(s)
    body.style.backgroundColor = '#'+s;
};
body.style.backgroundColor='yellow';
button.addEventListener("click", changeTheBackground);