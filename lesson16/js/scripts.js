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

$('.navbar-nav').on('click', function () {
    console.log('hi');
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
  });
