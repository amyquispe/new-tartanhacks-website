/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Adapted from http://stackoverflow.com/a/35090719/3857959
$(function () {
    $("[data-lazy-load-image]").each(function (index, element) {
        var img = new Image();
        img.src = $(element).data('lazy-load-image');
        img.className = 'img-responsive img-circle';
        img.alt = 'member image';
        $(element).append(img);
    });
});

// Adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
var elem = document.getElementsByClassName("expandable");
var i;
for (i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var text_answer = this.nextElementSibling;
      if (text_answer.style.display === "block") {
        text_answer.style.display = "none";
      } else {
        text_answer.style.display = "block";
      }
    });
  }
