function openNavMobile(){
    document.querySelector('.header__box__menuBox').classList.add('visible');
}

function closeNavMobile(){
    document.querySelector('.header__box__menuBox').classList.remove('visible');
}

function init(){
    setTimeout(function(){
        alert('funcionou');
    },5000);
}
window.onload = function(){
   init();
}