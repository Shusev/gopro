$(document).ready(function(){

    var fadeInTime = 400,
        fadeOutTime = 400;

    //наведение на социалки
    $(".vk, .vk_tab").hover(
        function(){
            //$(".vk_tab").css("background-color","#527498");
            //$(".vk_tab").append("<style>.vk_tab:hover, .vk_tab:focus, .vk_tab:active {color: white;} .vk_tab:hover:before, .vk_tab:focus:before, .vk_tab:active:before{-webkit-transform: scaleY(1); transform: scaleY(1);}</style>");
            //$(".vk_tab").append("<style>.vk_tab:hover:before{-webkit-transform: scaleY(1); transform: scaleY(1);}</style>");
            $(".vk").append('<style>.vk:before{opacity: 0;}</style>');
        },
        function(){
            //$(".vk_tab").css("background-color","black");
            $(".vk").append('<style>.vk:before{opacity: 1;}</style>');
        }
    );
    $(".mail, .mail_tab").hover(
        function(){
    //        $(".mail_tab").css("background-color","#ef6210");
            $(".mail").append('<style>.mail:before{opacity: 0;}</style>');
    //
        },
        function(){
    //        $(".mail_tab").css("background-color","black");
            $(".mail").append('<style>.mail:before{opacity: 1;}</style>');
        }
    );

    //hover строк таблицы

    //hover_tr($(".tr1"), $(".td1"));
    hover_tr($(".tr2"), $(".td2"));
    hover_tr($(".tr3"), $(".td3"));
    hover_tr($(".tr4"), $(".td4"));
    hover_tr($(".tr5"), $(".td5"));
    hover_tr($(".tr6"), $(".td6"));
    hover_tr($(".tr7"), $(".td7"));
    hover_tr($(".tr8"), $(".td8"));
    hover_tr($(".tr9"), $(".td9"));

    function hover_tr(a, b) {
        a.hover(
            function(){
                a.css("background-color","#f0cdc5");
                b.css("background-color","#f0cdc5");
            },
            function(){
                a.css("background-color","white");
                b.css("background-color","white");
            }
        );
    }

    //Scroll map

    scroll_anchor($(".address"));
    scroll_anchor($(".discounts"));
    scroll_anchor($(".prices"));
    scroll_anchor($(".contacts"));
    scroll_anchor($(".connect_block_btn"));


    function scroll_anchor(target) {
        target.click(function (event) {
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id = $(this).attr("href"),
            //узнаем высоту от начала страницы до блока на который ссылаетс€ €корь
                top = $(id).offset().top;
            //анимируем переход на рассто€ние - top за 1500 мс
            $("body,html").animate({scrollTop: top}, 1500);
        });
    }

    //politic cart fade
    $(".form_footer_btn").on('click', function(){
        $(".form_block").addClass("form_block_fade");
        //$("form_block_fade").fadeOut(fadeInTime);
        setTimeout(function () {
            $(".politic_cart").fadeIn(fadeInTime);
        }, fadeOutTime);
        setTimeout(function () {
            $(".politic_cart").fadeOut(fadeOutTime);
            setTimeout(function () {
                $(".form_block").removeClass("form_block_fade");
            }, fadeOutTime);
        }, 12000);
    });

    //send mail

    send_mail($("#name"), $("#phone"), $("#send_form"), $(".name_tooltip"), $(".phone_tooltip"), "center left", "center right");


    function send_mail(name, phone, form_name, name_target, phone_target, my, at) {
        var name_pattern = /^[\u0410-\u044Fa-zA-Z]{2,20}$/,
            phone_pattern = /^[0-9-]{10,11}$/i;
        phone.blur(function () {
            if (phone.val() != "") {
                if (phone.val().search(phone_pattern) == 0) {
                    phone.removeClass("error").addClass("okay");
                }
                else {

                    tooltip(phone_target, "¬ведите номер", my, at);
                    phone.addClass("error");
                    phone.removeClass("okay").addClass("error");
                }
            }
            else {
                tooltip(phone_target, "¬ведите номер", my, at);
                phone.removeClass("okay").addClass("error");
            }
        });
        name.blur(function () {
            if (name.val() != "") {
                if (name.val().search(name_pattern) == 0) {
                    name.removeClass("error").addClass("okay");
                }
                else {
                    tooltip(name_target, "¬ведите им€", my, at);
                    name.addClass("error");
                }
            }
            else {
                tooltip(name_target, "¬ведите им€", my, at);
                name.removeClass("okay").addClass("error");
            }
        });
        form_name.on("submit", function (event) {
            event.preventDefault();
            if (name.hasClass("okay") && phone.hasClass("okay")) {
                $.ajax({
                    url: "../avstarter/mail.php",
                    type: "POST",
                    data: form_name.serialize(),
                    success: function () {
                        form_name.trigger("reset");
                        $(".success").fadeIn("slow");
                        name.removeClass("okay").removeClass("error");
                        phone.removeClass("okay").removeClass("error");
                        setTimeout(function () {
                            $(".success").fadeOut("slow");
                        }, 1500);
                    },
                    error: function () {
                        form_name.trigger("reset");
                        name.removeClass("okay").removeClass("error");
                        phone.removeClass("okay").removeClass("error");
                    }
                });
            }
            else {
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
});