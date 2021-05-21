$(document).ready(function () {
    $(".burger").click(function (e) {
        $(".burger").toggleClass("burger--active"),
        $(".header__nav,.header__menu-items,.header__menu-item,.header__top-btn").toggleClass("active"),
        $("body").toggleClass("disable-scroll")
    }),
        $(".header__menu-item").click(function (e) {
            $(".header__nav,.header__menu-items,.header__menu-item,.header__top-btn").removeClass("active"),
            $(".burger--active").removeClass("burger--active"),
            $("body").removeClass("disable-scroll")
        })
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}