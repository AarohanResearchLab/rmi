(function($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function() {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function() {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

})(jQuery);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function sendMailcontactus() {

    var name = $('#name').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var sts = $('#sts').val();
    var state = $('#state').val();
    var message = $('#message').val();
    var subject = 'Hi,<br><br> Name:- ' + name + ' <br> Email:- ' + email + ' ' +
        ' <br> Mobile Number:- ' + mobile + ' <br> State:- ' + state + '<br> City:- ' + sts + '<br><br>' +
        'message:- ' + message + ' ';
    Email.send({
        SecureToken: "4e701d23-d2dc-4802-a764-f7b0e0ab0961",
        To: email,
        From: "arltestmailer@gmail.com",
        Subject: "Contact US",
        Body: subject
    }).then(
        message => alert("Mail has been sent.")
    );


}

function sendMailcareer(event) {
    //alert('pritesh');
    var name = $('#name').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var sts = $('#sts').val();
    var state = $('#state').val();
    var message = $('#message').val();
    var category_career = $('#category_career').val();
    var file = document.getElementById("fileToUpload").files[0];
    //var file = event.srcElement.files[0];
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function() {
        var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);

        var subject = 'Hi, <br> <br>  Applied For ' + category_career + ' <br><br> Name:- ' + name + ' <br> Email:- ' + email + ' ' +
            ' <br> Mobile Number:- ' + mobile + ' <br> State:- ' + state + '<br> City:- ' + sts + '<br><br>' +
            'message:- ' + message + ' ';
        Email.send({
            SecureToken: "4e701d23-d2dc-4802-a764-f7b0e0ab0961",
            To: email,
            From: "arltestmailer@gmail.com",
            Subject: "Career",
            Body: subject,
            Attachments: [{
                name: file.name,
                data: dataUri
            }]
        }).then(
            message => alert("Mail has been sent.")
        );
    };


}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}