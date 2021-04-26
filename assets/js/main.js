jQuery(document).ready(($) => {
    $(".modal").css("display", "none");
    $('.reset-js').removeAttr('href');
        $(".swipe__item").on("click", function () {
            if (!$(this).hasClass("active")) {
            $(".swipe__item.active")
                .removeClass("active")
                .find(".swipe__info")
                .slideToggle(300);
    }
        $(this).toggleClass("active").find(".swipe__info").slideToggle(300);
  });
});
function ShowModal(modal) {
    $('.modal').fadeOut();
    $(modal).fadeIn();
}
function CloseModal(modal) {
    $('.modal').fadeOut();
}