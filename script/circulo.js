let titulo=document.querySelector("h2"),
are=document.querySelector(".btn1"),
circunfe=document.querySelector(".btn2"),
diam=document.querySelector(".btn3"),
cont=0,
cal=document.querySelector(".calcular");

are.addEventListener("click",()=>{
    titulo.innerText="Calcular el area"    
    cont=1
}) 
circunfe.addEventListener("click",()=>{
    titulo.innerText="Calcular la circunferencia"    
    cont=2
})
diam.addEventListener("click",()=>{
    titulo.innerText="Calcular el diametro"   
    cont=3 
})





function arC(){
    let val=document.querySelector(".val").value

    let op=(parseFloat(val)**2 )* Math.PI
    let res=document.querySelector(".respuesta").value="El area es: " + op.toFixed(2)
  
    
}

function circu(){
    let val=document.querySelector(".val").value

    let op=(2*Math.PI)*val
    let res=document.querySelector(".respuesta").value="La circunferencia es: " + op.toFixed(2)
 
    
}

function diame(){
    let val=document.querySelector(".val").value

    let op=2*val
    let res=document.querySelector(".respuesta").value="El diametro es: " + op.toFixed(2)
}
    


cal.addEventListener("click",()=>{
    if(cont===1){
        arC()
    }else if(cont===0){
        let res=document.querySelector(".respuesta").value="Escoja una opcion"

    }else if(cont==2){
        circu()
    }else if(cont==3){
        diame()
    }
})


let brr=document.querySelector(".borrar")

brr.addEventListener("click",()=>{
    let lado=document.querySelector(".val").value=""
    let res=document.querySelector(".respuesta").value=""

})
