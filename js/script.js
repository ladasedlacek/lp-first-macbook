$(document).ready(function() {
    // desktop layout swticher
    $("#layout_switch button").on("click", function () {
        $("#testLayout").removeClass("layout-0").removeClass("layout-1"), $("body").addClass("mobile");
    }),

    $("#layout_switch button:nth-child(2)").on("click", function () {
        $("#testLayout").addClass("layout-0").css({'width':'1035px', 'margin':'0 auto'}), $("body.mobile").removeClass("mobile");
    }),
    $("#layout_switch button:nth-child(3)").on("click", function () {
        $("#testLayout").addClass("layout-1").css({'width':'1310px', 'margin':'0 auto'}), $("body.mobile").removeClass("mobile");
    }),

    // accordion
    $("#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph").hide(),
    $("#accordion > .lpFAQs__wrapper").click(function (e) {
        if (!$(e.target).closest(".lpFAQs__headline").length) return;
        return (
            $(this).hasClass("active")
                ? $(this).removeClass("active").find(".lpFAQs__paragraph").slideUp()
                : ($("#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph").slideUp(), $("#accordion > .lpFAQs__wrapper.active").removeClass("active"), $(this).addClass("active").find(".lpFAQs__paragraph").slideDown()),
            !1
        );
    }),

    // smooth scroller
    $('#landingpage a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (a) {
        var o;
        location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") ||
            location.hostname != this.hostname ||
            ((o = (o = $(this.hash)).length ? o : $("[name=" + this.hash.slice(1) + "]")).length && (a.preventDefault(), $("html, body").animate({ scrollTop: o.offset().top }, 800)));
    });
});

// on load
-1 < window.location.href.indexOf("alza")
? $(window).load(function () {
	  $("#landingpage").addClass("lpActive");
})
: $("#landingpage").addClass("lpActive");
