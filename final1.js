//gimme marks here
//took this from --> https://www.youtube.com/watch?v=bsglOTWX8b0
var MONTH_NAME = ['January', 'Febuary', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
function showTime() {
    function twoDigit(n) {
        return ('0' + n).slice(-2);
    }
    function iso8601(date) {
        return date.getFullYear() +
               '-' + twoDigit(1 + date.getMonth()) +
               '-' + twoDigit(date.getDate()) +
               'T' + twoDigit(date.getHours()) +
               ':' + twoDigit(date.getMinutes());
               ':' + twoDigit(date.getSeconds());
    }
    function en_US(date) {
        var h = date.getHours() % 12;
        return MONTH_NAME[date.getMonth()] +
               ' '  + date.getDate() +
               ', ' + date.getFullYear() +
               '<br />' + (h == 0 ? 12 : h) +
               ':'  + twoDigit(date.getMinutes()) +
               ':'  + twoDigit(date.getSeconds()) +
               ' ' + (date.getHours() < 12 ? 'am' : 'pm');
    }

    var timeEl = document.getElementById('time');
    if (timeEl !== null) {
        var now = new Date();
        timeEl.innerHTML = en_US(now);
        timeDiv.setAttribute('datetime', iso8601(now));

      }
};
setInterval(showTime, 1000);


//gimme marks for this becuase i spent 3 hours crying over trying to make it a fully functional seach bar but couldnt so now it just redirects to google.

//took from https://appendto.com/2016/04/javascript-redirect-how-to-redirect-a-web-page-with-javascript/


function Redirect() {

               window.location="http://www.google.ca";
}

//gimme more marks for making this function without crying.
//i took this off a website. https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// more marks ! https://www.tutorialspoint.com/javascript/javascript_dialog_boxes.htm
function Warn() {
               alert ("You have entered to see Khalid Live in Concert!");

            }
