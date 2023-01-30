let slider= document.querySelectorAll(".slider"),
nextSlider=document.querySelector(".next");
prevSlider=document.querySelector(".prev");

let sliderIndex=0;

// default image show 
function defaultImage(n){
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display="none";
    }
    slider[n].style.display="block";
}
defaultImage(sliderIndex);



// next Slider Change 
nextSlider.addEventListener("click",nextBtn);

function nextBtn(){
    sliderIndex++;
    if (sliderIndex >= slider.length-1) {
        sliderIndex=0;
    }
    defaultImage(sliderIndex); 
}

// prev button 
prevSlider.addEventListener("click",prevBtn);

function prevBtn(){
    if(sliderIndex== 0){
        sliderIndex= slider.length-1;
    }
    sliderIndex--;
    defaultImage(sliderIndex); 
}