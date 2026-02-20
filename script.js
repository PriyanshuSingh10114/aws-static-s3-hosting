const menu = document.querySelector('.menu_list');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click',function(){
    menu.classList.toggle('active');
});

const Navbar =document.querySelector('.navbar');

window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        Navbar.classList.add('sticky');
    }
    else{
        Navbar.classList.add('sticky');
    }
})

var swiper = new Swiper('.Myswiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});



var swiper = new Swiper('.Categories_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});



var swiper = new Swiper('.Tst_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});


var swiper = new Swiper('.Blog_Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2.5,
        },
        900: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 1,
        }
    }
});

