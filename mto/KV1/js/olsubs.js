window.addEventListener("load", function() {
  var olBigHtmlHeight = 480;
    
  //swipeup
  var ldSwipe = document.createElement("div");
  ldSwipe.setAttribute("class", "ol_swipe");
  
  // condition
function setDomain() {
    var full = window.location.host;
    var parts = full.split(".");
    var sub = parts[0];
    //console.log(full);
    //console.log(sub);
    
    switch (sub) {
        case "ohayojepang":
            console.log("ohayo");
            //ohayo
      $("header").prependTo(".main");
      $(".main").prepend(ldSwipe);
      $("header, .header").css({
          position: "relative",
          right: "0 !important"
      });
      $(".banner__top").css({
          "padding-top": "10px"
      });
      $(".ol_container").css({
          zIndex: "0"
      });
      $(".main").css({
          background: "#fff",
          overflowX: "hidden",
          margin: "0",
        zIndex: "1"
      });
      //scroll ohayo
      $(window).scroll(function() {
          var getHeight = $(".ol_container").height();
          
          if ($(window).scrollTop() > getHeight) {
          $(".header").css("position", "fixed");
      } else {
          $(".header").css("position", "relative");
      }
  });
  break;
  default:
      console.log("kompas");
      //kompas
      $("#page1").prepend(ldSwipe);
      $("#js-banner-sticky.boxBanner1").removeClass("banner--sticky");
      $("#js-banner-sticky .banner1").removeClass("scrolling");
      $("#js-banner-sticky .banner1").addClass("openLiftDown");
      
      //scroll kompas
      $(window).scroll(function() {
        var getHeight = $(".ol_container").height();

        if ($(window).scrollTop() > getHeight) {
          $(".header").css("position", "fixed");
          $(".new-sub-menu").css({
              position: "fixed",
            top: $(".header").height() + "px"
          });
          $("ul.floating-share--nav").css("position", "fixed");
          $("#js-banner-sticky .banner1").removeClass("openLiftDown");
          $("#navpanel").css({
            position: "fixed",
            top: "0"
          });
          $(".boxBanner1").css("position", "unset");
          $(".boxBanner1 .banner1").removeClass("scrolling");
          $("#navpanel").css("top", "0");
        } else {
            $(".header").css("position", "absolute");
          $(".new-sub-menu").css("position", "absolute");
          $("ul.floating-share--nav").css("position", "absolute");
          $("#js-banner-sticky .banner1").addClass("openLiftDown");
          $("#navpanel").css({
              position: "absolute"
          });
          $(".boxBanner1").css("position", "relative");
          $(".boxBanner1 .banner1").addClass("scrolling");
          $("#navpanel").css("top", "20px");

      }
      
        //sticky header kompascom
        var a = $(".breadcum-new").outerHeight();
        var b = $(".headline .read__title").outerHeight();
        var c = $(".headline .read__date").outerHeight();
        var d = $("#social--article").outerHeight();
        var e = $("#js-banner-sticky").outerHeight();
        var f = $(".calendar__nav").outerHeight();
        if ($(window).scrollTop() > getHeight + a + b + c + d + e) {
            $(".floating-share--nav").css("top", "55px");
            $(".boxBanner1 .banner1").addClass("scrolling");
        } else {
            $(".floating-share--nav").css("top", "0");
            $(".boxBanner1 .banner1").removeClass("scrolling");
        }
  });
  
  //menukompas
  $(".menu.right").click(function() {
      if ($("body").is(".menuopen")) {
          $(".footer").css("display", "none");
          $(".row")
          .not(".header")
          .css({
              height: "calc(100vh - " + $(".header").outerHeight() + "px)",
              overflow: "hidden"
          });
          $(".row")
            .not(".header")
            .css({
                height: "calc(100vh - " + $(".header").outerHeight() + "px - " + $(".new-sub-menu").outerHeight() + "px)",
                overflow: "hidden"
              });
          } else {
              $(".footer").css("display", "block");
              $(".row")
              .not(".header")
              .css({
                  height: "",
                  overflow: ""
              });
          }
      });
      break;
  }
}

//run
setDomain();

//global
$("html, #page1").css({
  overflow: "hidden"
});

$(".ol_swipe").html("Swipe up untuk membaca artikel");
$(".ol_container").css("height", olBigHtmlHeight + "px");
$("#page1, .main").css("margin-top", olBigHtmlHeight + "px");

$("body").css("height", "calc(100% - 480px)");

setTimeout(function() {
    $("html, #page1").css({
        height: "auto",
        overflow: "unset",
        overflowX: "hidden"
      });
      
      $("body").css("height", "auto");
  }, 2000);
  
  //close btn
  $(".ol_close_ad").click(function() {
      $(".ol_close_ad").hide();
      $("#page1, .main").animate(
          {
              "margin-top": 0
          },
          200
          );
          $(".ol_container").animate(
              {
      height: 0
  },
  200
  );
  setTimeout(function() {
      $(".ol_big").css("display", "none");
      $(".ol_big").remove();
  }, 200);
  $("#navpanel").css({
    position: "fixed",
    top: 0
  });
  $(".ol_swipe").hide();
  
});


// smart banner
var o = 'liftdown2';
var x = o+'-show';
var km = document.querySelector(".ol_container");
var pv = document.querySelector(".pushTopVideo");
var hh = document.querySelector("."+o+"-hide");
var pvp = document.querySelector(".liftdown_v2_tanda");
if(!!km) {
document.body.classList.add('liftdown');
var getHeight = km.clientHeight;
window.addEventListener("scroll", function() {
  var stLiftdown = window.scrollY;
  if (stLiftdown > getHeight) {
    document.body.classList.add('-ldhide');
  } else {
    document.body.classList.remove('-ldhide');
  }
});
} else if(!!pv && !hh) {
var pvc = pv.querySelector(".pushTopClose");
var p = pvp.getBoundingClientRect();
document.body.classList.add(o);
window.addEventListener("scroll", function() {
    if(p.top <= window.innerHeight && p.bottom <= window.innerHeight) {
      document.body.classList.add(x);
    } else {
      document.body.classList.remove(x);
    }
    pvc.addEventListener('click', function(){
      document.body.classList.remove(x);
      document.body.classList.remove(o);
      document.body.classList.add(o+'-hide');
    });
  });    
} else {
  document.body.classList.add('-noliftdown');
}

});
