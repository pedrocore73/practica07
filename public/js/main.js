$(document).ready(function (){
    // Cambio estilo barra nav
    $(window).on("scroll", function(){
        var positionParagraph = $("#primera").offset();
        var positionDocument = $(window).scrollTop();
        console.log(positionDocument);
        if (positionDocument > positionParagraph.top - 60) {
            $('nav').removeClass('white');
        } else {
            $('nav').addClass('white');
        }
    });
});