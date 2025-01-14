const title=document.querySelector(".head"),
contain1=document.querySelector(".description"),
ejercisio=document.getElementById("exer")


const motion=(entry)=>{
    
    
    entry.forEach(element => {
        if(element.isIntersecting){
            title.classList.add("translate")
            contain1.classList.add("despla")
            
        }
    });
}

const observar=new IntersectionObserver(motion,{
    root:null,
    rootMargin:`0px 0px 0px 0px `,
    threshold:1.0
})

observar.observe(title)
observar.observe(contain1)

