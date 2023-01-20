document.addEventListener("DOMContentLoaded", () => {

    // Fancybox settings
    (function() {
        Fancybox.bind("[data-fancybox]", {
            autoFocus: false,
            dragToClose: false
        });
    }());


    // Form validation
    (function() {
        $('form').each(function() {
            jQuery.validator.addMethod("checkMask", function (e, t) {
                return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
            });

            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        checkMask: true
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    },
                },
            });
        });

        let elements = document.querySelectorAll('input[name="phone"]');
        let maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };
        elements.forEach(element => {
            element.addEventListener('focus', () => {
                let mask = IMask(element, maskOptions);
            }); 
        });
    }());


    // Sliders
    (function() {

        new Splide('.decisions__wrapper', {
            arrows: true,
            pagination: false,
            gap: '100px',
            breakpoints: {
                991: {
                    destroy: true
                }
            }
        }).mount();

        new Splide('.choice .splide', {
            arrows: false,
            pagination: false,
            gap: '10px',
            mediaQuery: 'min',
            autoWidth: true,
            breakpoints: {
                992: {
                    destroy: true
                },
                576: {
                    gap: '40px'
                }
            }
        }).mount();

    }());


    // Expand items
    (function() {
        const expandButton = document.querySelector('.decisions__expand'),
              hiddenItems = document.querySelector('.splide__slide_hidden');

        expandButton.addEventListener('click', () => {
            hiddenItems.classList.remove('splide__slide_hidden');
            expandButton.style.display = 'none';
        });
    }());

});