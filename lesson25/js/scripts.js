$('.nav-tabs li').on('click', function () {
    console.log($(this));
    $('.nav-tabs li').removeClass('active');
    $(this).addClass('active');
  });

$('.nav-pills li').on('click', function () {
    console.log($(this));
    $('.nav-pills li').removeClass('active');
    $(this).addClass('active');
  });

$('.nav-stacked li').on('click', function () {
    console.log($(this));
    $('.nav-stacked li').removeClass('active');
    $(this).addClass('active');
  });

$('.nav-justified li').on('click', function () {
    console.log($(this));
    $('.nav-justified li').removeClass('active');
    $(this).addClass('active');
  });

$('.navbar-nav li').on('click', function () {
    console.log('hi');
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
  });

$('.navbar-fixed-top').addClass(function () {
    $('.row').addClass('row top');
  });

$('.navbar-fixed-bottom').addClass(function () {
    $('.row').addClass('row bottom');
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip(); // Using Attribute selector in JQuery
});

$(function () {
  $('.carousel').carousel({
    interval: 1000,
    pause: false,
    wrap: false,
    keyboard: true,
  });
});
