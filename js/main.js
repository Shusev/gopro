$(document).ready(function(){

    //send mail

    send_mail($("#name"), $("#phone"), $("#send_form"), $(".name_tooltip"), $(".phone_tooltip"), "center left", "center right");


    function send_mail(name, phone, form_name, name_target, phone_target, my, at) {
        var name_pattern = /^[\u0410-\u044Fa-zA-Z]{2,20}$/,
            phone_pattern = /^[0-9-]{6,}$/i;
        phone.blur(function () {
            if (phone.val() != "") {
                if (phone.val().search(phone_pattern) == 0) {
                    phone.removeClass("error").addClass("okay");

                }
                else {

                    tooltip(phone_target, "введите номер", my, at);
                    phone.addClass("error");
                    phone.removeClass("okay").addClass("error");
                }
            }
            else {
                tooltip(phone_target, "введите номер", my, at);
                phone.removeClass("okay").addClass("error");
            }
        });
        name.blur(function () {
            if (name.val() != "") {
                if (name.val().search(name_pattern) == 0) {
                    name.removeClass("error").addClass("okay");
                }
                else {
                    tooltip(name_target, "введите имя", my, at);
                    name.addClass("error");
                }
            }
            else {
                tooltip(name_target, "введите имя", my, at);
                name.removeClass("okay").addClass("error");
            }
        });
        form_name.on("submit", function (event) {
            var main_form = $('.form_block_title'),
                message_form = $('.ok_message');
            event.preventDefault();
            if (name.hasClass("okay") && phone.hasClass("okay")) {
                $.ajax({
                    url: "../mail.php",
                    type: "POST",
                    data: form_name.serialize(),
                    success: function () {
                        form_name.trigger("reset");
                        main_form.fadeOut(fadeOutTime);
                        setTimeout(function () {
                            message_form.fadeIn(fadeInTime);
                        }, fadeOutTime);
                        setTimeout(function () {
                            message_form.fadeOut(fadeOutTime);
                            setTimeout(function () {
                                main_form.fadeIn(fadeInTime);
                            }, fadeOutTime);
                        }, 5000);
                        name.removeClass("okay").removeClass("error");
                        phone.removeClass("okay").removeClass("error");
                    },
                    error: function () {
                        form_name.trigger("reset");
                        name.removeClass("okay").removeClass("error");
                        phone.removeClass("okay").removeClass("error");
                    }
                });
            }
            else {
                switch (true) {
                    case (phone.val() === "" && name.val() === ""):
                        name.addClass("error");
                        phone.addClass("error");
                        tooltip(name_target, "введите имя", my, at);
                        tooltip(phone_target, "введите номер", my, at);
                        break;
                    case ((name.val() === "" || name.hasClass("error")) && (phone.val() != "" || !phone.hasClass("error"))) :
                        tooltip(name_target, "введите имя", my, at);
                        name.addClass("error");
                        break;
                    case ((phone.val() === "" || phone.hasClass("error")) && (name.val() != "" || !name.hasClass("error"))) :
                        tooltip(phone_target, "введите номер", my, at);
                        phone.addClass("error");
                        break;
                }
            }
        });
    }

    function tooltip(target, text, my, at) {
        target.qtip({
            content: {
                text: text
            },
            position: {
                my: my,
                at: at,
                target: target
            },
            show: {
                ready: true
            }
        });
    }

    //carousel
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        freeMode: true,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    setInterval(function() {
        $(".qual").val($(".range").val());
    }, 200);
    var currentNumber = $(".range").val();
    var t;


    $({numberValue: currentNumber}).animate({numberValue: 25}, {
        duration: 3000,
        easing: 'linear',
        step: function() {
            $(".range").val(Math.ceil(this.numberValue));
            t=$(".range").val();
        }
    });
    setTimeout(function() {
        $({numberValue: t}).animate({numberValue: 14}, {
            duration: 500,
            easing: 'linear',
            step: function() {
                $(".range").val(Math.ceil(this.numberValue));
            }
        });
    }, 3000);

});