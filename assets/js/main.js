
/* Define the slides list */
const slides = [
    {
        pic: './assets/img/01.webp',
    },

    {
        pic: './assets/img/02.webp',
    },

    {
        pic: './assets/img/03.webp',
    },

    {
        pic: './assets/img/04.webp',
    },

    {
        pic: './assets/img/05.webp'
    }

]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


//console.log(sliderImagesEl);

/* Print all images into the dom*/
// loop over the slides 


slides.forEach(function (slide, index) {
    const slidePath = slide.pic;


//console.log(slidePath);

// for each slide we create the markup
const slideMarkup = `<img class="${activeSlide === index ? 'active' : ''}" src="${slidePath}" alt="">`

console.log(slideMarkup);

sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

});



 


/* 
 
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
 
*/

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);



/* 
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
 
*/

/* 
 
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
 
*/


const thumbsElement = document.querySelector('.thumbnails')





slides.forEach(function (slide, index) {
    const slidePath = slide.pic;
    const thumbMarkup = `<img class="thumb ${activeSlide === index ? 'active' : ''}" src="${slidePath}" alt="">`;

    console.log(thumbMarkup);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
});






// intercept click on the next icon 
nextEl.addEventListener('click', function () {
    console.log('cliccato su next');

    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log("la slide corrente è " + currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')


    // activeSlide = 4

    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')


    /* TODO */


    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')


})

// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');


    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    currentThumb.classList.remove('active')

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    console.log(activeSlide);


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')

    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')

})


//carosello che scorre in automatico

setInterval(function() {
    const currentSlide = slidesImages[activeSlide]
    console.log("la slide corrente è " + currentSlide);
    
    currentSlide.classList.remove('active')

   
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    
    currentThumb.classList.remove('active')

    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
    } else {
        activeSlide++
    }

    const nextSlide = slidesImages[activeSlide]
    nextSlide.classList.add('active')
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    nextThumb.classList.add('active')


}, 5000);


