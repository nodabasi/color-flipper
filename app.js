const colors = ["green","red","blue"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let randomR = getRandomNumber();
    let randomG = getRandomNumber();
    let randomB = getRandomNumber();
    console.log(randomB);
    document.body.style.backgroundColor= 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';
    color.textContent = '(' + randomR + ',' + randomG + ',' + randomB + ')';
})

function getRandomNumber(){
    return Math.floor(Math.random()*255);
}