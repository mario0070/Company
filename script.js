
//typing animation
let typed = new Typed(".demo", {
    strings: ["Muhammadjamiu", "Web And Mobile Developer","Search Engine Optimization", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })



window.addEventListener("scroll",reveal)

function reveal(){
    var reveals=document.querySelectorAll(".reveal")

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


let counts=setInterval(updated);
let upto=0;
function updated(){

    
    var count1= document.getElementById("counter3");
    count1.innerHTML=++upto;
    if(upto===100,000)
    {
        clearInterval(counts);
    }

}

