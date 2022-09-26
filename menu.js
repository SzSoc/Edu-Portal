function menuToggle(){

$(document).on('click', '.nav-menu', function(e) {
    $("nav").show();
    $(".nav-menu").addClass('nm-visible');
});

$(document).on('click', '.nm-visible', function(e) {
    $("nav").hide();
    $(".nav-menu").removeClass('nm-visible');
});

}