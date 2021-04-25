jQuery(document).ready(($) => {
    $('.swipe__item').on('click', function() {
        $('.swipe__item.active').removeClass('active')
            .find('.swipe__info').slideToggle(300);
        $(this).toggleClass('active')
            .find('.swipe__info').slideToggle(300);
    });
})