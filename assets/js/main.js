// ! Active Link For Nav

$('.navbar li a').click(function () {
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
});


// ! Owl slider sections

$(document).ready(function () {
    $('.home-info-slider').owlCarousel({
        loop: true,
        rtl: true,
        lazyLoad: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    })
});

$(document).ready(function () {
    $('.home-most-selling-slider , .home-most-recent-slider').owlCarousel({
        loop: true,
        margin: 20,
        rtl: true,
        lazyLoad: true,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-right'></i>", "<i class='fas fa-long-arrow-alt-left'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 3
            }
        }
    })
});

// ! Item Images Slider

$(document).ready(function () {
    $('.item-img-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 20,
        rtl: true,
        lazyLoad: true,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-alt-circle-right'></i>", "<i class='fas fa-arrow-alt-circle-left'></i>"],
        // autoplay: true,
        // autoplayTimeout: 6000,
        // autoplayHoverPause: true,
        responsiveClass: true
    })
});


// ! Fav Icon On Hover

$(document).ready(function () {
    $(".far").hover(function () {
        $(this).toggleClass("fas");
    });
});

// ! Search

$(document).ready(function () {
    $("#marketer-search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".marketer").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// ! Active Map

window.onload = function () {
    var latlng = new google.maps.LatLng(24.3343848, 42.86837);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'اسحب و افلت في موقعك',
        draggable: true
    });
    google.maps.event.addListener(marker, 'dragend', function (a) {
        console.log(a);
        $('#kasema_latitude').val(a.latLng.lat().toFixed(4));
        $('#kasema_longitude').val(a.latLng.lng().toFixed(4));

    });
    google.maps.event.addListener(map, 'zoom_changed', function () {
        $('#kasema_zoom').val(map.getZoom());

    });

};

$("#kasema_location").on('click', function () {

    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function (position) {

            $('#kasema_latitude').val(position.coords.latitude.toFixed(4));
            $('#kasema_longitude').val(position.coords.longitude.toFixed(4));

            var latlng = new google.maps.LatLng(position.coords.latitude.toFixed(4), position.coords
                .longitude.toFixed(4));
            var map = new google.maps.Map(document.getElementById('map'), {
                center: latlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            });
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'Set lat/lon values for this property',
                draggable: true
            });
            google.maps.event.addListener(marker, 'dragend', function (a) {
                console.log(a);
                $('#kasema_latitude').val(a.latLng.lat().toFixed(4));
                $('#kasema_longitude').val(a.latLng.lng().toFixed(4));

            });
            google.maps.event.addListener(map, 'zoom_changed', function () {
                $('#kasema_zoom').val(map.getZoom());

            });

        });
});