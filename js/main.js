$(document).ready(function(){

    //наведение на социалки
    $(".vk, .vk_tab").hover(
        function(){
            $(".vk_tab").css("background-color","#527498");
        },
        function(){
            $(".vk_tab").css("background-color","black");
        }
    );
    $(".mail, .mail_tab").hover(
        function(){
            $(".mail_tab").css("background-color","#ef6210");
        },
        function(){
            $(".mail_tab").css("background-color","black");
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

});