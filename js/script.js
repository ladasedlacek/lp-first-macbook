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

    // tabs switcher
    $("#landingpage .lpMainNav__tab").on("click", function() {
        let saveTarget = $(this).attr('data-tab')
        $("#landingpage .lpMainNav__tab").removeClass('tabActive')
        $("#landingpage .lpMain").removeClass('mainActive')
        $(this).addClass('tabActive')
        $("#landingpage #" + saveTarget).addClass('mainActive')
    }),

    $("#landingpage .categoryTile").on("click", function() {
        let saveTarget = $(this).attr('data-tab')
        $("#landingpage .lpMainNav__tab").removeClass('tabActive')
        $("#landingpage .lpMain").removeClass('mainActive')
        $("#landingpage .lpMainNav__wrapper").find(`[data-tab='${saveTarget}']`).addClass('tabActive')
        $("#landingpage #" + saveTarget).addClass('mainActive')
    }),

    // smooth scroller
    $('#landingpage a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (a) {
        let o;
        location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") ||
            location.hostname != this.hostname ||
            ((o = (o = $(this.hash)).length ? o : $("[name=" + this.hash.slice(1) + "]")).length && (a.preventDefault(), $("html, body").animate({ scrollTop: o.offset().top - 75 }, 800)));
    });
});