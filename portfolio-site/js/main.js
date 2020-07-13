$(function() {

  // 背景画像の自動切り替え
  $('#header').bgSwitcher({
    images: ['img/back1.jpg','img/back2.jpg','img/back3.jpg'], 
  });

  // スクロール
  $('#about').click(function() {
    $('html, body').animate({ scrollTop: $('.about').offset().top }, 300);
  });

  $('#skill').click(function() {
    $('html, body').animate({ scrollTop: $('.skill').offset().top }, 300);
  });
  
  $('#works').click(function() {
    $('html, body').animate({ scrollTop: $('.works').offset().top }, 300);
  });
  
  $('#contact').click(function() {
    $('html, body').animate({ scrollTop: $('.contact').offset().top }, 300);
  });
  
  // 一番下からスクロールトップに戻る
  $('#arrow').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  // それぞれの画像を拡大表示
  $('#write-s').click(function() {
    $('#write-b').fadeIn();
  });
  
  $('#jin-s').click(function() {
    $('#jin-b').fadeIn();
  });
  
  $('#xe-s').click(function() {
    $('#xe-b').fadeIn();
  });
  
  $('#ban1-s').click(function() {
    $('#ban1-b').fadeIn();
  });
  
  $('#ban2-s').click(function() {
    $('#ban2-b').fadeIn();
  });
  
  $('#lp-s').click(function() {
    $('#lp-b').fadeIn();
  });

  // オーバーレイ表示
  $('.work-img').click(function() {
    $('.overlay').fadeIn();

    // スクロール無効化
    $('body').css('overflow','hidden');

    // 表示する時、画像の一番上から表示
    $('.big-img-container').scrollTop(0);
  });

  // オーバーレイ、画像を非表示
  $('.overlay').click(function() {
    $('.overlay').fadeOut();
    $('#write-b').fadeOut();
    $('#jin-b').fadeOut();
    $('#xe-b').fadeOut();
    $('#ban1-b').fadeOut();
    $('#ban2-b').fadeOut();
    $('#lp-b').fadeOut();

    // スクロール有効化
    $('body').css('overflow','visible');
  });

});