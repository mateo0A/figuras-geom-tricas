let area=document.querySelector(".btn1"),
perimetro=document.querySelector(".btn2"),
diagonales=document.querySelector(".btn3");

let titulo=document.querySelector("h2"),
cal=document.querySelector(".calcular"),
cont=0

area.addEventListener("click",()=>{
    titulo.innerText="Calcular area"    
    cont=1
})

perimetro.addEventListener("click",()=>{
    titulo.innerText="Calcular perimetro"    
    cont=2
})
diagonales.addEventListener("click",()=>{
    titulo.innerText="Calcular diagonales"    
    cont=3
})


function are(){
    let lado=document.querySelector(".val1").value;
    let op=parseFloat(lado)**2;
    let res=document.querySelector(".respuesta").value="El area es: " + op.toFixed(2)

}

function per(){
    let lado=document.querySelector(".val1").value;
    let op=parseFloat(lado)*4;
    let res=document.querySelector(".respuesta").value="El perimetro es: " + op.toFixed(2)

}
function diag(){
    let lado=document.querySelector(".val1").value;
    let op=parseFloat(lado)*Math.sqrt(2);
    let res=document.querySelector(".respuesta").value="La diagonal es: " + op.toFixed(2)

}





cal.addEventListener("click",()=>{
    if(cont===1){
        are()
    }else if(cont===0){
        let res=document.querySelector(".respuesta").value="Escoja una opcion"

    }else if(cont==2){
        per()
    }else if(cont==3){
        diag()
    }
})



let brr=document.querySelector(".borrar")

brr.addEventListener("click",()=>{
    let lado=document.querySelector(".val1").value=""
    let res=document.querySelector(".respuesta").value=""

})