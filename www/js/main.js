// Global variables
var onboardingInterval;

$(document).ready(function(){
  $("body").children().each(function() {
    $(this).html($(this).html().replace(/&#8232;/g," "));
  });
});

function createOnboardingList() {
  list = $(".onboaring-list");
  if(list.length > 0) {
    $(".onboaring-list").slick({
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    clearInterval(onboardingInterval);
  }
}

function goNextSlide() {
  $(".onboaring-list").slick('slickNext');
}