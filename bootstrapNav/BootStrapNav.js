$(document).ready(function(e) {
//	var linkText = $('.drowpdown a').clone().html();
//	var linkValue = $('.drowpdown a').attr('href');
//	$('ul.dropdown-menu li').prepend('<li><a href="' + linkValue + '">' + linkText + "</a></li>");
});


$(document).ready(function () {

    $('.nav > li.dropdown > a').click(function (e) {
        var $target = $(e.target);
        var activeNav = $(this).siblings();
        if ($target.is('b') || $(this).attr('href')=='#') {
            $(this).siblings().toggle("fast");
            $('.nav > li.dropdown > ul.dropdown-menu:visible').not($(this).siblings()).hide("fast");
            return false;
        }
    });
});
