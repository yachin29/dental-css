//スクロールイベント
$(window).on('scroll',function(){
let scrollTop = $(this).scrollTop();

if(scrollTop > 50){
$('#header').addClass('scroll');
}else{
$('#header').removeClass('scroll');
}
});


//ハンバーガー
$('#ham-btn').on('touchstart ',function(){
$(this).toggleClass('click');
$('#g-nav-sp').toggleClass('move');
});



//西暦をフッターに表示
thisYear = new Date().getFullYear();

if(thisYear >= 2026){
document.querySelector('#thisYear').textContent = '2025 - ' + thisYear;
}else{
document.querySelector('#thisYear').textContent = thisYear;
}

