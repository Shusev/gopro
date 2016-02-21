$(document).ready(function(){

    //наведение на социалки
    $(".vk, .vk_tab").hover(
        function(){
            //$(".vk_tab").css("background-color","#527498");
            //$(".vk_tab").append("<style>.vk_tab:hover{color: white;} .vk_tab:hover:before{-webkit-transform: scaleY(1); transform: scaleY(1);}</style>");
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
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $("body,html").animate({scrollTop: top}, 1500);
        });
    }
});