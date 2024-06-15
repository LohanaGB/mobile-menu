function openNavMobile(){
    $('.icon-menu').click(function(){
        $('.header__navContent').addClass('visible');
    })
    closeNavMobile();
}

function closeNavMobile(){
    $('.icon-close').click(function(){
        $('.header__navContent').removeClass('visible');
    })
}

function init(){
    openNavMobile();
}

$( document ).ready(function() {
    init();
});