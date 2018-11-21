// Global variables
var onboardingInterval;

$(document).ready(function(){
  $( "#body_container" ).load( "components/not-supported.html");
});

function goTo(pageName) {
  $( "#body_container" ).load( "components/" + pageName);

  // This function builds the onboarging list items
  onboardingInterval = setInterval(createOnboardingList, 5);
}

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