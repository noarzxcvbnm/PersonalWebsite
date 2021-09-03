$('.navbar-toggler').click(function () {
    $('.navbar-nav').toggleClass('active')
  })


  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // console.log("currentScrollPos:"+currentScrollPos)
  // console.log("prevScrollpos:"+prevScrollpos)
  
  if (prevScrollpos > currentScrollPos) {
    if (document.getElementById("header") != null){
      document.getElementById("header").style.top = "0";
    }
    if (document.getElementById("footer") != null){
    document.getElementById("footer").style.bottom = "0";
    }
  } else {
    if (document.getElementById("header") != null){
    document.getElementById("header").style.top = "-90px";
    }
    if (document.getElementById("footer") != null){
    document.getElementById("footer").style.bottom = "-60px";
    }
  }
  prevScrollpos = currentScrollPos;
}
