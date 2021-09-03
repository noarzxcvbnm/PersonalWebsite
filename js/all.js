$('.navbar-toggler').click(function () {
    $('.navbar-nav').toggleClass('active')
  })


  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("header").style.top = "-90px";
    document.getElementById("footer").style.bottom = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
