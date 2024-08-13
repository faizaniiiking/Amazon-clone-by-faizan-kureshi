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

nextBtn.addEventListener("click", (e)=>{
    if(n<imgs.length - 1){
        n++;
    }
    else{
        n = 0;

    }
    changeslide();



}) 

document.addEventListener("DOMContentLoaded", () => {
    const scrollContainers = document.querySelectorAll(".products");

    for (const item of scrollContainers) {
        item.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            item.scrollLeft += evt.deltaX ;
        });
    }
});
