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

});