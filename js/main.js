window.addEventListener("DOMContentLoaded", () => {
    //sidebar
    const sidebarButton = document.querySelector('.sidebar__menu');
    const headerMenuButton = document.querySelector('.header-mobile__menu')
    const sidebarClose = document.querySelector('.menu__close');
    const sidebarContent = document.querySelector('.menu');

    sidebarButton.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');
    })

    sidebarClose.addEventListener('click', () => {
        sidebarContent.classList.toggle('menu-active');
    })

    if (window.screenX < 993) {
        headerMenuButton.addEventListener('click', () => {
            sidebarContent.classList.toggle('menu-active');
        })
    }



    //maskphone 
    var inputElements = document.querySelectorAll(".maskphone");

    for (let inputElement of inputElements) {
        console.log(inputElement);

        inputElement.addEventListener("input", mask);
        inputElement.addEventListener("focus", mask);
        inputElement.addEventListener("blur", mask);

        function mask(event) {
            var blank = "+_ (___) ___-__-__";

            var i = 0;
            var val = this.value.replace(/\D/g, "").replace(/^8/, "7");
            // <---

            this.value = blank.replace(/./g, function (char) {
                if (/[_\d]/.test(char) && i < val.length)
                    return val.charAt(i++);

                return i >= val.length ? "" : char;
            });

            if (event.type == "blur") {
                if (this.value.length == 2)
                    this.value = "";
            } else {
                setCursorPosition(this, this.value.length);
            }
        };

        function setCursorPosition(elem, pos) {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
                return;
            }

            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
                return;
            }
        }

    }

    //sliders 
    function heroSlider() {
        const heroSlider = new Swiper('.hero__slider', {
            navigation: {
                nextEl: '.hero__slider-next',
                prevEl: '.hero__slider-prev',
            },

            pagination: {
                el: '.hero__slider-pagination',
                clickable: true
            },
        });
    }


    function photogallerySlider() {
        const photogallerSlider = new Swiper('.photogallery__slider', {
            navigation: {
                nextEl: '.swiper-next-button',
                prevEl: '.swiper-prev-button',
            },
            loop: true,
            loopedSlides: 4,
            slidesPerView: 2.8,
            spaceBetween: 20,
            slidesPerGroupAuto: true,
            initialSlide: 2,
            pagination: {
                el: '.about__slider-pagination',
                clickable: true
            },
            breakpoints: {
                992: {
                    slidesPerView: 2.8,
                },
                767: {
                    slidesPerView: 1.4,
                },
                577: {
                    slidesPerView: 1.4,
                    initialSlide: 1,
                },
                320: {
                    slidesPerView: 1,
                    initialSlide: 1,
                },
            },
        });
    }

    function aboutSlider() {
        const aboutSlider = new Swiper('.about__slider', {
            navigation: {
                nextEl: '.about__slider-next',
                prevEl: '.about__slider-prev',
            },

            pagination: {
                el: '.about__slider-pagination',
                clickable: true
            },
        });
    }


    function rewardsSlider() {
        const rewardsSlider = new Swiper('.rewards__swiper', {

            navigation: {
                nextEl: '.rewards__slider-next',
                prevEl: '.rewards__slider-prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,


                },
                993: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },


            pagination: {
                el: '.rewards__slider-pagination',
                clickable: true
            },
        });
    }


    heroSlider();
    aboutSlider();
    rewardsSlider();
    photogallerySlider()

    //tabs
    $(function () {
        $("#tabs").tabs({
            hide: { effect: "fade", duration: 300 },
            show: { effect: "fade", duration: 300 },
            active: '#tabs-1'
        });
    });


    //up-button Подъем вверх
    const upButton = document.querySelector('.up-button');

    window.addEventListener('DOMContentLoaded', () => {
        if (window.scrollY < 300) {
            upButton.style.opacity = '0';
        } else {
            upButton.style.opacity = '1';
        }
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY < 300) {
            upButton.style.opacity = '0';
        } else {
            upButton.style.opacity = '1';
        }
    })

    upButton.onclick = () => {
        window.scrollTo(0, 0);
    }


})