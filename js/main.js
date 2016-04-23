$(document).ready(function(){

    //send mail
    var fadeInTime = 400,
        fadeOutTime = 400;


    send_mail($("#name"), $("#phone"), $("#send_form"), $(".name_tooltip"), $(".phone_tooltip"), "center left", "center right");


    function send_mail(name, phone, form_name, name_target, phone_target, my, at) {
        form_name.on("submit", function (event) {
            var name_pattern = /^[\u0410-\u044Fa-zA-Z]{2,20}$/,
                phone_pattern = /^[0-9-]{6,}$/i,
                message_form_ok = $('.modal_title_success'),
                message_form_err = $('.modal_title_error'),
                modal = $('.modal_block'),
                form_def = $('.modal_title, form');

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

            event.preventDefault();
            if (name.hasClass("okay") && phone.hasClass("okay")) {
                $.ajax({
                    url: "../mail.php",
                    type: "POST",
                    data: form_name.serialize(),
                    success: function () {
                        form_name.trigger("reset");
                        form_def.fadeOut(fadeOutTime);
                        setTimeout(function () {
                            message_form_ok.fadeIn(fadeInTime);
                        }, fadeOutTime);
                        setTimeout(function () {
                            modal.fadeOut(fadeOutTime);
                        }, 5000);
                        name.removeClass("okay").removeClass("error");
                        phone.removeClass("okay").removeClass("error");
                    },
                    error: function () {
                        form_name.trigger("reset");
                        form_def.fadeOut(fadeOutTime);
                        setTimeout(function () {
                            message_form_err.fadeIn(fadeInTime);
                        }, fadeOutTime);
                        setTimeout(function () {
                            modal.fadeOut(fadeOutTime);
                        }, 5000);
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
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true
    });


    //animation

    $(window).scroll(function(){
        var a = $(window).scrollTop(),
            range = $(".range");
        if ((a >= 2795) && (a <= 2805)) {
            var currentNumber, t;

            currentNumber = range.val();

            $({numberValue: currentNumber}).animate({numberValue: 25}, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    range.val(Math.ceil(this.numberValue));
                    t = range.val();
                }
            });
            setTimeout(function() {
                $({numberValue: t}).animate({numberValue: 14}, {
                    duration: 500,
                    easing: 'linear',
                    step: function() {
                        range.val(Math.ceil(this.numberValue));
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
            bank = $("#bank").val(),

            sum_0,
            sum_15,
            sum_30,
            sum_50;

        if (head >= 1 || grud >= 1 || monopod >= 1 || poplavok >= 1 || truba >= 1 || noga >= 1 || shlem >= 1 || kayt >= 1 || foto >= 1 || kepka >= 1 || car >= 1 || pult >= 1 || akk >= 1 || bank >= 1) {
            sum_0 = range*(kit*350+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50 - 50);
            sum_15 = range*(kit*300+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50 - 50);
            sum_30 = range*(kit*250+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50 - 50);
            sum_50 = range*(kit*180+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50 - 50);
        }
        else {
            sum_0 = range*(kit*350);
            sum_15 = range*(kit*300);
            sum_30 = range*(kit*250);
            sum_50 = range*(kit*180);
        }
        //sum_0 = range*(kit*350+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50);
        //sum_15 = range*(kit*300+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50);
        //sum_30 = range*(kit*250+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50);
        //sum_50 = range*(kit*180+head*50+grud*50+monopod*50+poplavok*50+truba*50+noga*50+shlem*50+kayt*50+foto*50+kepka*50+car*50+pult*50+akk*50+bank*50);

        days.html(range);

        if (range <= 3) {
            summa.html(sum_0);
            skidka.html((sum_0 - summa.html()));
            if (range == 0) {
                sum_per_day.html(0);
            }
            else {
                sum_per_day.html(summa.html() / range);
            }
        }
        else if ((range >= 4) && (range <= 9)) {
            summa.html(sum_15);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html() / range);
        }
        else if ((range >= 10) && (range <= 19)) {
            summa.html(sum_30);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html() / range);
        }
        else if (range >= 20) {
            summa.html(sum_50);
            skidka.html((sum_0 - summa.html()));
            sum_per_day.html(summa.html() / range);
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




    //Scroll anchors

    scroll_anchor($(".gopro_link"));
    scroll_anchor($(".kit_link"));
    scroll_anchor($(".price_link"));
    scroll_anchor($(".calc_link"));
    scroll_anchor($(".review_link"));
    scroll_anchor($(".btn_calculate"));



    function scroll_anchor(target) {
        target.click(function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                top = $(id).offset().top;
            $("body,html").animate({scrollTop: top}, 1500);
        });
    }


    //scroll calc


    setInterval(function() {
        var val = $(".range").val();
        var aa = $(".num_days_block").css("bottom");
        aa = parseInt(aa);
        var bb = 183 + 12.65*val;
        var cc = bb + "px";

        $(".num_days_block").css("bottom", cc);

        $(".num_days").html(val);
    }, 50);


    //Instafeed

    var userFeed = new Instafeed({
        get: 'user',
        userId: 3055617922,
        limit: 24,
        accessToken: '3055617922.cf0499d.4399e069ef2e48b9b13f16f8875eeb6a'
    });
    userFeed.run();

    //modal form

    $(".btn_become, .features_btn").on("click", function (event) {
        event.preventDefault();
        $(".modal_block").fadeIn("fast");
        $(".modal").fadeIn("fast");
    });

    $(document).mouseup(function (e){
        var div = $(".modal"),
            block = $(".modal_block");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            div.fadeOut("fast");
            block.fadeOut("fast");
        }
    });




});