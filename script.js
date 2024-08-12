const imgs = document.querySelectorAll(".headerSlider ul img");
const prevBtn = document.querySelector(".controlPrev")
const nextBtn = document.querySelector(".controlNext")

let n =0;

function changeslide(){
    for(let i = 0; i<imgs.length; i++){
        imgs[i].style.display = "none"

    }

    imgs[n].style.display = "block";

}

changeslide();

prevBtn.addEventListener("click", (e)=>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length -1;

    }
    changeslide();



})