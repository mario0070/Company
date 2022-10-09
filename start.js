window.addEventListener("load",() => {
    over.classList.add("valid")
    setTimeout(()=>{
        over.classList.remove("valid")
        document.getElementById("body").classList.add("valid")
    },3000)
})

var over=document.getElementById("over1")

window.addEventListener("scroll",reveal)

function reveal(){
    var reveals=document.querySelectorAll(".reveals")

    for (var i = 0 ; i < reveals.length ;i++){
        var windowh=window.innerHeight;
        var revealt=reveals[i].getBoundingClientRect().top;
        var revealp=20;

        if(revealt < windowh - revealp){
            reveals[i].classList.add("active")
        
        }
        else{
            reveals[i].classList.remove("active")
            
        }
    }
}