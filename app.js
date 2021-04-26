const hex_codes = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let randomR = getRandomNumber();
    let randomG = getRandomNumber();
    let randomB = getRandomNumber();
    document.body.style.backgroundColor= 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';
    color.textContent = '(' + randomR + ',' + randomG + ',' + randomB + ')';;
    //document.section.style.backgroundColor=final_hex_code; idk how to change section color with js i will add it later
})

function getRandomNumber(){
    return Math.floor(Math.random()*255);
}

