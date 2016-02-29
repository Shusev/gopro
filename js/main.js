$(document).ready(function(){

    var fadeInTime = 400,
        fadeOutTime = 400;

    //hover socials
    $(".vk, .vk_tab").hover(
        function(){
            $(".vk").append('<style>.vk:before{opacity: 0;}</style>');
        },
        function(){
            $(".vk_tab").css("background-color","black");
            $(".vk").append('<style>.vk:before{opacity: 1;}</style>');
        }
    );
    $(".mail, .mail_tab").hover(
        function(){
            $(".mail").append('<style>.mail:before{opacity: 0;}</style>');
        },
        function(){
            $(".mail").append('<style>.mail:before{opacity: 1;}</style>');
        }
    );

    //hover table prices

    hover_tr($(".tr2"), $(".td2"));
    hover_tr($(".tr3"), $(".td3"));
    hover_tr($(".tr4"), $(".td4"));
    hover_tr($(".tr5"), $(".td5"));
    hover_tr($(".tr5"), $(".td6"));
    hover_tr($(".tr6"), $(".td6"));
    hover_tr($(".tr6"), $(".td5"));
    hover_tr($(".tr7"), $(".td7"));
    hover_tr($(".tr8"), $(".td8"));
    hover_tr($(".tr9"), $(".td9"));

    function hover_tr(a, b) {
        a.hover(
            function(){
                //a.css("background-color","#f0cdc5");
                b.css("background-color","#f0cdc5");
            },
            function(){
                //a.css("background-color","white");
                b.css("background-color","white");
            }
        );
    }

    //Scroll anchors

    scroll_anchor($(".address"));
    scroll_anchor($(".discounts"));
    scroll_anchor($(".prices"));
    scroll_anchor($(".contacts"));
    scroll_anchor($(".connect_block_btn"));


    function scroll_anchor(target) {
        target.click(function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                top = $(id).offset().top;
            $("body,html").animate({scrollTop: top}, 1500);
        });
    }

    $(window).scroll(function(){
        var a = $(window).scrollTop(),
            disc = $(".discounts"),
            prices = $(".prices"),
            contacts = $(".contacts");
        switch (true) {
            case (a < 1450 && a >= 850):
                disc.addClass("discounts_scroll");
                prices.removeClass("prices_scroll");
                contacts.removeClass("contacts_scroll");
                break;
            case a < 1850 && a >= 1450 :
                disc.removeClass("discounts_scroll");
                prices.addClass("prices_scroll");
                contacts.removeClass("contacts_scroll");
                break;
            case (a == $(document).height() - $(window).height()):
                disc.removeClass("discounts_scroll");
                prices.removeClass("prices_scroll");
                contacts.addClass("contacts_scroll");
                break;
            case a < 850 || (a >=1850 && a < 2850):
                disc.removeClass("discounts_scroll");
                prices.removeClass("prices_scroll");
                contacts.removeClass("contacts_scroll");
                break;
        }
    });

    //politic cart fade
    $(".form_footer_btn").on('click', function(){
        $(".form_block").addClass("form_block_fade");
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
                    url: "../avstarter/mail.php",
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
        autoplay: 3000,
        mousewheelControl: true,
        freeMode: true,
        loop: true,
        autoplayDisableOnInteraction: false
    });

    //popup certificate
    var link = $(".certificate_popup"),
        popup = $(".certificate_modal"),
        popup_img = $(".certificate_img_popup");
    link.on("click", function(event) {
        event.preventDefault();
        popup.fadeIn("slow");
    });
    $(document).keydown(function(event) {
        if( event.keyCode === 27 ) {
            popup.fadeOut("slow");
        }
    });
    $(document).mouseup(function (event) {
        if (popup_img.has(event.target).length === 0){
            popup.fadeOut("slow");
        }
    });
});