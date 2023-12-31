(function () {
    "use strict";

    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel__slider')[0],
        items = carousel.getElementsByClassName('carousel__slider__item'),
        prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
        nextBtn = carousel.getElementsByClassName('carousel__next')[0];

    var width,
        height,
        totalWidth,
        margin = 20,
        currIndex = 0,
        interval,
        intervalTime = 4500;

    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();

        timer();
    }

    function resize() {
        width = Math.max(window.innerWidth * .25, 275), height = window.innerHeight * .5, totalWidth = width * items.length;

        slider.style.width = totalWidth + "px";

        for (var i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.width = width - margin * 2 + "px";
            item.style.height = height + "px";
        }
    }

    function move(index) {

        if (index < 1) index = items.length;
        if (index > items.length) index = 1;
        currIndex = index;

        for (var i = 0; i < items.length; i++) {
            let item = items[i],
                box = item.getElementsByClassName('item__3d-frame')[0];
            if (i == index - 1) {
                item.classList.add('carousel__slider__item--active');
                box.style.transform = "perspective(1200px)";
            } else {
                item.classList.remove('carousel__slider__item--active');
                box.style.transform = "perspective(1200px) rotateY(" + (i < index - 1 ? 40 : -40) + "deg)";
            }
        }

        slider.style.transform = "translate3d(" + (index * -width + width / 2 + window.innerWidth / 2) + "px, 0, 0)";
    }

    function timer() {
        clearInterval(interval);
        interval = setInterval(() => {
            move(++currIndex);
        }, intervalTime);
    }

    function prev() {
        move(--currIndex);
        timer();
    }

    function next() {
        move(++currIndex);
        timer();
    }

    function bindEvents() {
        window.onresize = resize;
        prevBtn.addEventListener('click', () => {
            prev();
        });
        nextBtn.addEventListener('click', () => {
            next();
        });
    }

// lien vers le contenu PROJETS => event pour ouvrir une nouvelle fenêtre:


    document.addEventListener("DOMContentLoaded", (event)=>{
        //PROJET 1:
        let projet_1 = document.getElementById("projet_1");
        projet_1.addEventListener("click",()=>{
            window.open("https://hackmd.io/7ktEoDKWRKe8sk--XblYnw?view","blank")});
        //PROJET 2:
        let projet_2 = document.getElementById("projet_2");
            projet_2.addEventListener("click",()=>{
                window.open("https://hackmd.io/f46MK54fTO2tO9Otf8E7QA?view","blank")});
        //PROJET 3:
        let projet_3 = document.getElementById("projet_3");
        projet_3.addEventListener("click",()=>{
            window.open("https://hackmd.io/xIcM9AVmSTeCpfc3CLBqew?view","blank")});
     
         //PROJET 4:
         let projet_4 = document.getElementById("projet_4");
         projet_4.addEventListener("click",()=>{
             window.open("https://hackmd.io/kW0dlpXmR9ucY7u-Tq1KKQ?view","blank")});
         })
    
   
    init();
})();

