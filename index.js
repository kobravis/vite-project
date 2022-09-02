const link  =   document.querySelectorAll(".nav-link") 
const nav   =   document.getElementById("nav")

const checkClass = (e)=>{
    link.forEach(element => {
        element.classList.remove("active")
   });
   e.target.classList.add("active")
}
nav.addEventListener('click',checkClass)