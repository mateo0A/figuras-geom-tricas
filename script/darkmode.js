let dark=localStorage.getItem("dark")
let stch=document.querySelector(".darkmode")
const eneableMode=()=>{
    console.log(dark);
    document.querySelector("body").classList.add("darkm")
    localStorage.setItem("dark","activate")
}

const disableMode=()=>{
    console.log(dark);
    document.querySelector("body").classList.remove("darkm")
    localStorage.setItem("dark",null)
}

if(dark === "activate") eneableMode()

stch.addEventListener("click",()=>{
    dark=localStorage.getItem("dark")
    console.log(dark);
    
    dark!=="activate" ? eneableMode() : disableMode()
})

