// Global variables
var onboardingInterval;
var currentSlickSlide = 0;

jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};

$(document).ready(function(){
  $("body").children().each(function() {
    $(this).html($(this).html().replace(/&#8232;/g," "));
  });
  var currentPage = document.location.href.match(/[^\/]+$/)[0];
  if (currentPage === "onboarding.html") {
    var mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
      },
      on: {
        reachEnd: function () {
          $("#submit_btn").attr("onclick", "exitTour()");
          $("#submit_btn").text("Finish Tour");
        },
        slidePrevTransitionEnd: function () {
          $("#submit_btn").attr("onclick", "goNextSlide()");
          $("#submit_btn").text("Next")
        },
      }
    });
  }
});

function buildSwiperSlides() {

}

function goNextSlide() {
  var mySwiper = document.querySelector('.swiper-container').swiper;
  mySwiper.slideNext();
}

function goPreviousSlide() {
  var mySwiper = document.querySelector('.swiper-container').swiper;
  mySwiper.slidePrev();
}

function pageBack() {
  var currentPage = document.location.href.match(/[^\/]+$/)[0];
  switch (currentPage) {
    case "welcome.html":
      window.location.href = "mobilechain://exitwallet";
      break;
    case "onboarding.html":
      var mySwiper = document.querySelector('.swiper-container').swiper;
      if (mySwiper.activeIndex > 0) {
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