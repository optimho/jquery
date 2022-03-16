$(document).ready(function(){

    $("button").click(function(){
        $("p").addClass('turnBlue');
        console.log('Hello The button the button has been clicked')
    });

$('input').eq(0).keypress(function(){
    $('h3').toggleClass('turnBlue');
    console.log(event);
    if (event.which === 97){
        $('h3').toggleClass('turnRed')
    }
});

$('h1').on('dblclick', function(){
    $(this).toggleClass('turnBlue')
});

$('input').eq(1).on('dblclick', function(){
   $('.container').slideUp(2000)
});

});
