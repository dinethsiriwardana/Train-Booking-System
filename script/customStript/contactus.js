$(document).ready(function() {
    $('#emailerr').hide();
    $('#nameerr').hide();
    $('#phoneerr').hide();
    $('#texterr').hide();
});

$('#submit').click(function() {
    validate = formvalidation();


});


function formvalidation() {
    emailaddress = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    nameval = document.getElementById('name').value;
    textarea = document.getElementById('textarea').value;
    // console.log(phone.length);

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }
    var errcode = 0
    if ((phone.length) != 10) {
        $('#phoneerr').show(200);
        errcode = 1;

    } else {
        $('#phoneerr').hide(500);
        errcode = 0;
    }
    if (!validateEmail(emailaddress) || emailaddress == '') {
        errcode = 1;
        $('#emailerr').show(200);

    } else {
        $('#emailerr').hide(500);
        errcode = 0;

    }
    if (nameval == '') {
        errcode = 1;
        $('#nameerr').show(200);

    } else {
        $('#nameerr').hide(500);
        errcode = 0;

    }
    if (textarea == '') {
        errcode = 1;
        $('#texterr').show(200);

    } else {
        $('#texterr').hide(500);
        errcode = 0;

    }
    if (errcode == 1) {
        return false
    }
    $('#bookingform').hide();
    $('#formsuccess').show();

}