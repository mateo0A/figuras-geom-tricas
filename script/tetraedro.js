let titulo=document.querySelector("h2"),
areaCara=document.querySelector(".btn1"),
areaTotal=document.querySelector(".btn2"),
altura=document.querySelector(".btn3"),
cont=0

areaCara.addEventListener("click",()=>{
    titulo.innerText="Calcular area de una cara"
    cont=1
})

areaTotal.addEventListener("click",()=>{
    titulo.innerText="Calcular area total"
    cont=2
})

altura.addEventListener("click",()=>{
    titulo.innerText="Calcular altura"
    cont=3

    
})

/*__________________________________- */
function areaC(){
    let val1=document.querySelector(".val1").value
    let op=(Math.sqrt(3)/2)*val1
    let res=document.querySelector(".respuesta").value="El area de la cara es: " + op.toFixed(2)
}

function areaT(){
    let val1=document.querySelector(".val1").value
    let op=Math.sqrt((3*(val1**2)))
    let res=document.querySelector(".respuesta").value="El area de la cara es: " + op.toFixed(2)

}

function altra(){
    let val1=document.querySelector(".val1").value
    let op=(Math.sqrt(2)/Math.sqrt(3))*val1
    let res=document.querySelector(".respuesta").value="El area de la cara es: " + op.toFixed(2)

}
/*cccccc */
let ca=document.querySelector(".calcular")
ca.addEventListener("click",()=>{
    if(cont===1){
        areaC()
    }else if(cont===2){
        areaT()
    }else if(cont===3){
        altra()
    }
})