
$(window).scroll(function() {
    let top = $(window).scrollTop();

    if (top > 300) {
        $('.top').fadeIn();
    }else {
        $('.top').fadeOut();
    }
})

$('.top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});