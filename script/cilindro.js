let titulo=document.querySelector("h2"),
subt1=document.querySelector(".subt1"),
subt2=document.querySelector(".subt2")

let areaB=document.querySelector(".btn1"),
areaL=document.querySelector(".btn2"),
areaT=document.querySelector(".btn3")

let val1=document.querySelector(".val1"),
val2=document.querySelector(".val2"),
cont=0
subt2.style.display="none"
val2.style.display="none"
areaB.addEventListener("click",()=>{
    total.style.display="none"
    subt1.style.display="block"
    val1.style.display="block"
    titulo.innerText="Calcular area base"
    subt1.innerText="Radio"
    subt2.style.display="none"
    val2.style.display="none"
    cont=1
})

areaL.addEventListener("click",()=>{
    total.style.display="none"
     subt1.style.display="block"
    val1.style.display="block"
    titulo.innerText="Calcular area lateral"
    subt1.innerText="Radio"
    subt2.style.display="block"
    subt2.innerText="Altura"
    val2.style.display="block"
    cont=2
})

let total=document.querySelector(".areaT")
total.style.display="none"

areaT.addEventListener("click",()=>{
    total.style.display="flex"
    subt1.style.display="none"
    val1.style.display="none"
    subt2.style.display="none"
    val2.style.display="none"
    cont=3
})











function bas(){
    let rad=document.querySelector(".val1").value
    let op=Math.PI * (parseFloat(rad)**2)
    let res=document.querySelector(".respuesta").value="La base es: " + op.toFixed(2)
}
function late(){
    let rad=document.querySelector(".val1").value
    let alt=document.querySelector(".val2").value
    let op=(2*Math.PI)*rad*alt
    let res=document.querySelector(".respuesta").value="El area lateral es: " + op.toFixed(2)
}


function tot(){
    let rad1=document.querySelector(".val3").value
    let rad2=document.querySelector(".val4").value
    let altura=document.querySelector(".val5").value
    let op=((Math.PI*(parseFloat(rad1)**2)) + ((2*Math.PI)*rad2*altura) )
    let res=document.querySelector(".respuesta").value="El area total es: " + op.toFixed(2)
}


/*Funciones call */
let calcula=document.querySelector(".calcular")

calcula.addEventListener("click",()=>{
    if(cont===1){
        bas()
    }else if(cont===2){
        late()
    }else if(cont===3){
        tot()
    }
})

/*borrar */

let brra=document.querySelector(".borrar")

brra.addEventListener("click",()=>{
    val1.value=""
    val2.value=""
    let rad1=document.querySelector(".val3").value=""
    let rad2=document.querySelector(".val4").value=""
    let altura=document.querySelector(".val5").value=""
    let res=document.querySelector(".respuesta").value=""
})