var page = $("html, body");
var animationDuration = 1000;
$(".anchor").click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});