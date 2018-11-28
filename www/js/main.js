// Global variables
var onboardingInterval;
var currentSlickSlide = 0;

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
    currentSlickSlide = currentSlide;
  if (currentSlide === 2) {
    $("#submit_btn").attr("onclick","exitTour()");
    $("#submit_btn").text("Finish Tour");
  } else {
    $("#submit_btn").attr("onclick","goNextSlide()");
    $("#submit_btn").text("Next")
  }
})

function goNextSlide() {
  $(".onboaring-list").slick('slickNext');
}

function goPreviousSlide() {
  $(".onboaring-list").slick('slickPrev');
}

function pageBack() {
  var currentPage = document.location.href.match(/[^\/]+$/)[0];
  switch (currentPage) {
    case "welcome.html":
      window.location.href = "mobilechain://exitwallet";
      break;
    case "onboarding.html":
      if (currentSlickSlide > 0) {
        goPreviousSlide()
      } else {
        window.location.href = "welcome.html";
      }
      break;
    default:
      break;
  }
}

function exitTour() {
  console.log("exit");
  window.location.href = 'mobilechain://close';
}