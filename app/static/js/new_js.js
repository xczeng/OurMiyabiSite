$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
    navigation : true,
    singleItem : true,
    lazyLoad: true,
    transitionStyle : "fadeUp",
    autoPlay : 6000,
  });
 
});