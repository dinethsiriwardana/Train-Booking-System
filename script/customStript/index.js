$(document).ready(function() {



    cookieload();
    $('#customcardshow').click(function() {
        window.location.replace('booking.html');
    });

});

function cookieload() {

    var savedata = $.cookie('saveforlate');


    if (!savedata) {

        // $('#customcardshow').hide();
        $("#customcardshow").removeClass("customcardshow");

    } else {
        // $('#customcardshow').show();
        // $(".customcard").add("#customcardshow");
        $("#customcardshow").addClass("customcardshow");



    }
}