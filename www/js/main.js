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

$(this).on('afterChange', function(event, slick, currentSlide) {
  if (currentSlide === 2) {
    $("#submit_btn").attr("onclick","exitTour()");
    $("#submit_btn").text("Finish Tour");
  } else {
    $("#submit_btn").attr("onclick","goNextSlide()");
    $("#submit_btn").text("Next")
  }
})

function goNextSlide() {
  console.log("next");
  $(".onboaring-list").slick('slickNext');
}

function pageBack() {
  var currentPage = document.location.href.match(/[^\/]+$/)[0];
  switch (currentPage) {
    case "welcome.html":
      window.location.href = "mobilechain://exitwallet";
      break;
    case "onboarding.html":
      window.location.href = "welcome.html";
      break;
    default:
      break;
  }
}

function exitTour() {
  console.log("exit");
  window.location.href = 'mobilechain://close';
}