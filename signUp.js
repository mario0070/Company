var forms= document.getElementById("none")
var over=document.getElementById("overlay")
var body=document.getElementById("body")
window.addEventListener("load",()=>{
    over.classList.add("valid")
    body.classList.add("valid")
   setTimeout(()=>{
    over.classList.remove("valid")
    forms.classList.add("valid")
    body.classList.remove("valid")
   },4000)
})