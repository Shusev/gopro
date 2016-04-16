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
        slidesPerView: "auto",
        //freeMode: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true
        //breakpoints: {
        //    1024: {
        //        slidesPerView: 4,
        //        spaceBetween: 40
        //    },
        //    768: {
        //        slidesPerView: 3,
        //        spaceBetween: 30
        //    },
        //    640: {
        //        slidesPerView: 2,
        //        spaceBetween: 20
        //    },
        //    320: {
        //        slidesPerView: 1,
        //        spaceBetween: 10
        //    }
        //}
    });


    //animation

    $(window).scroll(function(){
        var a = $(window).scrollTop();
        if ((a >= 2795) && (a <= 2805)) {
            var currentNumber, t;

            currentNumber = $(".range").val();

            $({numberValue: currentNumber}).animate({numberValue: 25}, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $(".range").val(Math.ceil(this.numberValue));
                    t = $(".range").val();
                }
            });
            setTimeout(function() {
                $({numberValue: t}).animate({numberValue: 3}, {
                    duration: 500,
                    easing: 'linear',
                    step: function() {
                        $(".range").val(Math.ceil(this.numberValue));
                    }
                });
            }, 2000);
        }
    });


    //sum calculate

    setInterval(function() {
        var summa = $("#summa"),
            skidka = $("#skidka"),
            days = $("#days"),
            sum_per_day = $("#sum_per_day"),
            range = $("#range").val(),


            kit = $("#kit").val(),
            head = $("#head").val(),
            grud = $("#grud").val(),
            monopod = $("#monopod").val(),
            poplavok = $("#poplavok").val(),
            truba = $("#truba").val(),
            noga = $("#noga").val(),
            shlem = $("#shlem").val(),
            kayt = $("#kayt").val(),
            foto = $("#foto").val(),
            kepka = $("#kepka").val(),
            car = $("#car").val(),
            pult = $("#pult").val(),
            akk = $("#akk").val(),
            sd = $("#sd").val(),

            sum_0,
            sum_15,
            sum_30,
            sum_50;

        sum_0 = range*(kit*350+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+sd*50);
        sum_15 = range*(kit*300+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+sd*50);
        sum_30 = range*(kit*250+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+sd*50);
        sum_50 = range*(kit*180+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+sd*50);

        days.html(range);

        if (range <= 3) {
            summa.html(sum_0);
            skidka.html((sum_0 - summa.html()));
            if (range == 0) {
                sum_per_day.html(0);
            }
            else {
                sum_per_day.html(summa.html()/range);
            }
        }
        else if ((range >= 4) && (range <= 9)) {
            summa.html(sum_15);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html()/range);
        }
        else if ((range >= 10) && (range <= 19)) {
            summa.html(sum_30);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html()/range);
        }
        else if (range >= 20) {
            summa.html(sum_50);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html()/range);
        }
    }, 200);


    //increment inputs

    $(".minus").on("click", function() {
        var input, val;
        input = $(this).next();

        if (input.val() != 0) {
            val = parseInt(input.val());
            val--;
            input.val(val);
        }
    });
    $(".plus").on("click", function() {
        var input, val;
        input = $(this).prev();
        val = parseInt(input.val());
        val++;
        input.val(val);
    });

    //onselect disable

    $("td:first-child").attr({
        onselectstart: "return false",
        onmousedown: "return false"
    });


});