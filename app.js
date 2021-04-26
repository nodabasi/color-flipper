const hex_codes = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');
const section = document.getElementsByClassName(".container");

btn.addEventListener('click',function(){
    let randomR = getRandomNumber();
    let randomG = getRandomNumber();
    let randomB = getRandomNumber();
    let hex = generateHexCode();
    document.body.style.backgroundColor= 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';
    color.textContent = '(' + randomR + ',' + randomG + ',' + randomB + ')';;
    //document.section.style.backgroundColor=final_hex_code; idk how to change section color with js i will add it later
})

function getRandomNumber(){
    return Math.floor(Math.random()*255);
}

function getRandomElement(min,max){
    let a = max -min +1;
    let result = Math.floor(Math.random()*a)+min ;
    return result;
}
function generateHexCode(){
    let hex_code = []
    for(i=0;i<7;i++){
        let index = getRandomElement(0,hex_codes.length-1);
        hex_code.push(hex_codes[index]);
    }
    let final_hex_code = '#'+hex_code[0]+hex_code[1]+hex_code[2]+hex_code[3]+hex_code[4]+hex_code[5]+hex_code[6]+"";
    //console.log(final_hex_code); to check it hex code from console 
    return (final_hex_code);
    
}
