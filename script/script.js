// READ MORE BUTTON
var readMoreButtons = document.querySelectorAll('.read-more-btn');
var paragraphs = document.querySelectorAll('.middle__paragraph');


readMoreButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        if(paragraphs[parseInt(btn.id)].style.height !== '12rem') {
            paragraphs[parseInt(btn.id)].style.height = '12rem'
            btn.innerHTML = '<i class="fas fa-angle-up"></i> Read less';
        } else {
            paragraphs[parseInt(btn.id)].style.height = '6.5rem';
            btn.innerHTML = '<i class="fas fa-angle-right"></i> Read more';
        }
    });
});

// SLIDER
var sliderArrowLeft = document.getElementById('arrow-left');
var sliderArrowRight = document.getElementById('arrow-right');

var width = document.querySelector('.latest-works__row-2').offsetWidth;
window.addEventListener("resize", function () {
    width = document.querySelector('.latest-works__row-2').offsetWidth;
});

var imagesContainer = document.querySelector('.latest-works__images');

var numberOfImages = document.querySelectorAll('.latest-works__image').length;

var maxPages = Math.floor(numberOfImages / 4);

var index = 0;

sliderArrowLeft.addEventListener('click', function() {
    if(!(sliderArrowLeft.classList.value.split(' ').includes('disabled'))){
        index = index - 1;

        if(index === 0) {
            sliderArrowLeft.classList.add('disabled');
        }
        
        imagesContainer.style.transform = 'translateX(' + index * -width +'px)';
        sliderArrowRight.classList.remove('disabled');
    } else {
        return;
    }
});

sliderArrowRight.addEventListener('click', function() {
    if(!(sliderArrowRight.classList.value.split(' ').includes('disabled'))) {
        index = index + 1;
        sliderArrowLeft.classList.remove('disabled');
        imagesContainer.style.transform = 'translateX(' + index * -width + 'px)';

        if(index === maxPages) {
            sliderArrowRight.classList.add('disabled');
        }
    }else {
        return;
    }
});
