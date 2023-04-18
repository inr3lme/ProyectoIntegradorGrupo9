
const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');



let index = 1;
let width;


function slideWidth() {
    width = carouselSlides[0].clientWidth;
}
slideWidth();
window.addEventListener('resize',slideWidth);
carouselRow.style.transform = 'translateX('+(-width*index)+'px)';


nextBtn.addEventListener('click',nextSlide);

function nextSlide() {
    if(index >= carouselSlides.length -1){return};
        carouselRow.style.transition = 'transform 0.4s ease-out';
     index++;
     carouselRow.style.transform = 'translateX(' + (-width*index) + 'px)';
     dotsLabel();
}


prevBtn.addEventListener('click',prevSlide);
function prevSlide() {
    if(index <= 0){return};
    carouselRow.style.transition = 'transform 0.4s ease-out';
    index--;
    carouselRow.style.transform = 'translateX(' + (-width*index) + 'px)';
    dotsLabel();
}



carouselRow.addEventListener('transitionend',function(){
    if(carouselSlides[index].id ==='firstImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - index;
        carouselRow.style.transform = 'translateX(' + ( -width * index) + 'px)';
        dotsLabel();
    }
    if(carouselSlides[index].id ==='lastImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - 2;
        carouselRow.style.transform = 'translateX(' + (- width * index) + 'px)';
        dotsLabel();
    }
});



function autoslide(){
    deleteInterval = setInterval(timer,3000);
    function timer(){
        nextSlide();
    }
}

autoslide();


const mainContainer = document.querySelector('.container1');
mainContainer.addEventListener('mouseover',function(){
    clearInterval(deleteInterval);
})



mainContainer.addEventListener("mouseout",autoslide)

function dotsLabel(){
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(' active','');
    }
    dots[index-1].className +=' active';
}