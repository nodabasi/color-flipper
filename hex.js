const hex_codes = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=>{
    let hex = generateHexCode();
    
    color.textContent = hex;
    document.body.style.backgroundColor= hex;
    console.log(hex);
});

function getRandomElement(min,max){
    let a = max -min +1;
    let result = Math.floor(Math.random()*a)+min ;
    return result;
}

generateHexCode =() =>{
    let hex_code = []
    for(i=0;i<6;i++){
        let index = getRandomElement(0,hex_codes.length-1);
        hex_code.push(hex_codes[index]);
    }
    let final_hex_code = '#'+hex_code[0]+hex_code[1]+hex_code[2]+hex_code[3]+hex_code[4]+hex_code[5]+"";
    //console.log(final_hex_code);
    return (final_hex_code);
    
}