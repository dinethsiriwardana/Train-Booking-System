document.title = 'Ceylon Train';

$(document).ready(function() {


    $('#trainmap').click(function() {
        window.location.replace('trainmap.html');
    });
    $('#trainlist').click(function() {
        window.location.replace('trainlist.html');
    });

    $('#pricecal').click(function() {
        window.location.replace('costcal.html');
    });
    $('#seatbooking').click(function() {
        cookieload();

        window.location.replace('booking.html');
    });
    $('#gallery').click(function() {
        window.location.replace('gallery.html');
    });
    $('#contact').click(function() {
        window.location.replace('contactus.html');
    });
    $('#about').click(function() {
        window.location.replace('history.html');
    });
    $('#login').click(function() {
        window.location.replace('login.html');
    });

});


function cookieload() {

    var savedata = $.cookie('saveforlate');


    if (!savedata) {
        window.location.replace('booking.html');

    } else {
        window.location.replace('costcal.html');

    }
}