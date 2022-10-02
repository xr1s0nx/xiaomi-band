// news-swiper

const swiper = new Swiper('.news-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".prev-arrow",
    },
});




let popUp2 = document.querySelector('.popUp2');
let popUp2Close = document.querySelector('.popUp2 .close-popUp');
let Notopened = true;

function startTimer() {

    var tt = setInterval(function () {
        if (Notopened) {
            popUp2.classList.add('active');
            Notopened = false;
        }
    }, 5000);

}

popUp2Close.addEventListener('click', function () {
    popUp2.classList.remove('active');
})

let buyBtns = document.querySelectorAll('.buy-btn');
let popUp1 = document.querySelector('.popUp1');
let popUp1Close = document.querySelector('.popUp1 .close-popUp');

buyBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        popUp1.classList.add('active');
        popUp2.classList.remove('active');

    })
})

popUp1Close.addEventListener('click', function () {
    popUp1.classList.remove('active');
})