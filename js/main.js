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
                    city: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    }
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
    // (function() {

    //     new Splide('.promo .splide', {
    //         type: 'loop',
    //         arrows: false,
    //         pagination: true,
    //         gap: '50px',
    //         mediaQuery: 'min',
    //         breakpoints: {
    //             768: {
    //                 destroy: true
    //             }
    //         }
    //     }).mount();

    // }());


    // Показываем модальное окно при уходе со страницы
    // (function() {
    //     function t() {
    //         Fancybox.show(
    //             [
    //                 {
    //                     src: '#modal3',
    //                 },
    //             ],
    //             {
    //                 autoFocus: false,
    //                 dragToClose: false
    //             }
    //         );
    //     }

    //     $(document).one("mouseleave", function (e) {
    //         $("#pageMain").length && e.clientY < 10 && t();
    //     });
    // }());

});