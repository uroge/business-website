(function(){
    var paragraphs = document.querySelectorAll('.js-middle__paragraph'),
        sliderArrowLeft = document.getElementById('js-arrow-left'),
        sliderArrowRight = document.getElementById('js-arrow-right'),
        imagesPerSlide = 4,
        imagesContainer = document.querySelector('.js-latest-works__images'),
        images = document.querySelectorAll('.js-latest-works__image'),
        numberOfImages = images[0] ? images.length - 1 : null,
        maxSlides = Math.floor(numberOfImages / imagesPerSlide),
        imagesRow = document.querySelector('.js-latest-works__row-2'),
        sliderWidth = imagesRow ? imagesRow.offsetWidth : null,
        slideIndex = 0;

    document.body.addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target.parentElement;
        if (target.classList.contains('js-read-more-btn')) {
            if(paragraphs && paragraphs[parseInt(target.getAttribute('data-id'))] && target.querySelector('span') && target.querySelector('i')) {
                if(!paragraphs[parseInt(target.getAttribute('data-id'))].classList.contains('middle__paragraph-active')) {
                    paragraphs[parseInt(target.getAttribute('data-id'))].classList.add('middle__paragraph-active');
                    target.querySelector('span').textContent = 'Read less';
                    target.querySelector('i').style.transform = 'rotate(-90deg)';
                } else {
                    paragraphs[parseInt(target.getAttribute('data-id'))].classList.remove('middle__paragraph-active');
                    target.querySelector('span').textContent = 'Read more';
                    target.querySelector('i').style.transform = 'rotate(0)';
                }
            }
        }
    });

    window.addEventListener('resize', function () {
        if(imagesRow) {
            sliderWidth = imagesRow.offsetWidth;
        }
        
        if(sliderWidth) {
            if(sliderWidth < 480) {
                imagesPerSlide = 1;
                maxSlides = Math.floor(numberOfImages / imagesPerSlide);
            } else if(sliderWidth < 784) {
                imagesPerSlide = 2;
                maxSlides = Math.floor(numberOfImages / imagesPerSlide);
            } else if(sliderWidth < 960) {
                imagesPerSlide = 3;
                maxSlides = Math.floor(numberOfImages / imagesPerSlide);
            } else {
                imagesPerSlide = 4;
                maxSlides = Math.floor(numberOfImages / imagesPerSlide);
            }
        }
    });
    
    if(sliderArrowRight && sliderArrowLeft && imagesContainer) {
        sliderArrowLeft.addEventListener('click', function() {
            if(!(sliderArrowLeft.classList.contains('disabled'))){
                slideIndex = slideIndex - 1;
    
                if(slideIndex === 0) {
                    sliderArrowLeft.classList.add('disabled');
                }
                
                imagesContainer.style.transform = 'translateX(' + slideIndex * -sliderWidth +'px)';
                sliderArrowRight.classList.remove('disabled');
            } else {
                return;
            }
        });

        sliderArrowRight.addEventListener('click', function() {
            if(!(sliderArrowRight.classList.contains('disabled'))) {
                slideIndex = slideIndex + 1;
                sliderArrowLeft.classList.remove('disabled');
                imagesContainer.style.transform = 'translateX(' + slideIndex * -sliderWidth + 'px)';
    
                if(slideIndex === maxSlides) {
                    sliderArrowRight.classList.add('disabled');
                }
            } else {
                return;
            }
        });
    }
})();