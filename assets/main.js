var attribute = ["an Indian",
                 "a EE undergrad",
                 "an IITian",
                 "a programmer...",
                 
                 "a coffeeholic...",
                 "an AI Enthusiast...",
                 "rewatching Ramayana...",
                 "learning new things...",
                 "Experimenting new things...",
                 "Building new things..."
                 ];

var len = attribute.length;

var i = 0;
var j = 0;
function myLoop () {
   var temp = setTimeout(function () {
      $(".magic").append(attribute[i][j]);
      j++;
      if (j <= attribute[i].length) {
         myLoop();
      }
      else {
        setTimeout(function(){
          $(".magic").text("");
          i = (i + 1)%len;
          j = 0;
          myLoop();
        }, 2000);
      }
   }, 130);
};

function blink() {
  setInterval(function() {
    $(".cursor").toggleClass('trans');
  }, 500);
};

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".name").addClass('trans');
  blink();
  setTimeout(function() {
    myLoop();
    $(".attribute").css("opacity", 1);
  }, 1500);


  $(".main-btn").click(function(){
    $(".main-btn").toggleClass("pulse");
  });

  if($(window).width() >= 1024){
    $(".main-btn").toggleClass("pulse");
    // $('.social-icons').append('<li><a class="btn-floating" style="background-color: #0077B5;" href="https://www.linkedin.com/in/ujjal-das-525987127/" target="_blank"><i class="fa fa-linkedin"></i></a></li>');
    
    // $('.social-icons').append('<li><a class="btn-floating pink darken-2" href="https://www.instagram.com/ujjaldas132/" target="_blank"><i class="fa fa-instagram"></i></a></li>');
   
    $(".main-btn").click();
  };
  console.log("Hey Buddy!!, Glad you reached here. If you have some projects for me or wanna collaborate or just wanna say a hello, drop me a mail at ujjaldas132@gmail.com")
});