$(document).ready(function () {

    var $searchShopWrap = $('#search-shop-wrap');
    var $mainNav = $('#main-nav');
    var $slider = $('#slider');
    
    //Click on the search icon
    $searchShopWrap.find('.search-icon-header').on('click', function () {

        if ($(this).hasClass('active')) {
            //close search bar
            $(this).removeClass('active');
        } else {

            //remove active class from all sub-menus
            $mainNav.find('.has-sub-menu').removeClass('active');
            $mainNav.find('.sub-menu').removeClass('active');

            //open search bar
            $(this).addClass('active');
        }   
    });

    //Click on the close search icon
    $searchShopWrap.find('.close-search').on('click', function () {
        $searchShopWrap.find('.search-icon-header').removeClass('active');
    });

    //click on the menu element with sub-menu
    $mainNav.find('.has-sub-menu').on('click', function () {

        var theClass = $(this).attr("class").match(/has-sub-menu-[\w-]*\b/);
        var menuClass = theClass[0].substr(4);

        if ($(this).hasClass('active')) {

            //remove active class from element and sub-menu
            $(this).removeClass('active');
            $mainNav.find('.' + menuClass).removeClass('active');

        } else {
            //close search bar if it's open
            $searchShopWrap.find('.search-icon-header').removeClass('active');

            //remove active class from all elements
            $mainNav.find('.has-sub-menu').removeClass('active');
            $mainNav.find('.sub-menu').removeClass('active');

            //add active class to element and apropriate sub-menu
            $(this).addClass('active');
            $mainNav.find('.' + menuClass).addClass('active');
        }
        return false;
    });

    //play youtube slider video
    $slider.find('.youtube-play').on('click', function () {
        $slider.find('.second-slide').addClass('play');
    });

    $('#footer-promotion .close-footer-promotion').on('click', function () {
        $('#footer-promotion').hide();
    });
});