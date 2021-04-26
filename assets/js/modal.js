function ShowModal(modal) {
    $('.modal').fadeOut();
    $(modal).fadeIn();
    SetTimeout(() => {
        $(modal).css("display","flex");
    },200);
}