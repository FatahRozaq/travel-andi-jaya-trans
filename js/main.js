(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


// function redirect(page) {
//     window.location.href = "layout.html" + "?page=" + page;
//   }

//   var url_string = window.location.href;
//   var url = new URL(url_string);
//   var new_page = url.searchParams.get("page");

//   if (new_page != null) {
//     $.ajax({
//       url: new_page + ".html",
//       beforeSend: function () {
//         // $("#content").html("Please wait...");
//       },
//       success: function (data) {
//         $("#content").html(data);
//       },
//     });
//   } else {
//     $.ajax({
//       url: "coba.html",
//       beforeSend: function () {
//         // $("#content").html("Please wait...");
//       },
//       success: function (data) {
//         $("#content").html(data);
//       },
//     });
//   }


// Mengambil konten halaman secara dinamis
function loadPage(page) {
    fetch(`${page}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then(data => {
        document.querySelector("#content").innerHTML = data;
      })
      .catch(error => console.error("Error:", error));
  }
  
  // Cek parameter URL dan muat halaman yang sesuai
  var urlParams = new URLSearchParams(window.location.search);
  var page = urlParams.get("page");
  
  if (page) {
    loadPage(page);
  } else {
    loadPage("coba"); // Halaman default jika tidak ada parameter
  }

