$(document).ready(function() {
    $('#emailerr').hide();
    $('#phoneerr').hide();
    $('#savedataalert').hide();
    var savedata = $.cookie('saveforlate');



    cookieload();
    var url = dataload();

    $('#bookingbtn').click(function() {
        $.cookie('saveforlate', '')
        var formvali = formvalidation();
        if (formvali) {


            $('#bookingform').hide();
            $('#formsuccess').show();
        }


    });
    $('#saveforlate').click(function() {
        var formvali = formvalidation();
        if (formvali) {
            saveforlate();
            window.location.replace("booking.html");

        }
    });
    $('#restorbtn').click(function() {
        restorbtn()
    });
    $('#alertboxclose').click(function() {
        $('#savedataalert').hide(1000);
    });


});

function restorbtn() {

    var savedata = $.cookie('saveforlate');
    var url = (document.URL);
    params = (new URL(url + savedata)).searchParams;
    // console.log(savedata);
    // console.log(params.get('fpoint'));
    // console.log(params.get('1stclass'));

    document.getElementById('spoint').innerHTML = params.get('spoint')
    document.getElementById('fpoint').innerHTML = params.get('fpoint')
    document.getElementById('class1').innerHTML = params.get('1stclass')
    document.getElementById('class2').innerHTML = params.get('2ndclass')
    document.getElementById('class3').innerHTML = params.get('3rdclass')
    document.getElementById('total').innerHTML = Math.round(params.get('costforall')) + '.00'
    document.getElementById('email').value = params.get('emailaddress')
    document.getElementById('name').value = params.get('nameval')
    document.getElementById('date').value = params.get('date')
    document.getElementById('phone').value = params.get('phone')

}

function cookieload() {

    var savedata = $.cookie('saveforlate');
    // console.log($.cookie('saveforlate'));

    if (!savedata) {
        // console.log('NOdata');
        // dataload();
        $('#savedataalert').hide();
        params = (new URL(document.URL)).searchParams;
        if (params.get('fpoint') == null) {
            window.location.replace('costcal.html');

        }


    } else {
        // console.log('hasdata');
        $('#savedataalert').show();
        // dataload();

    }
}

function dataload() {


    params = (new URL(document.URL)).searchParams;

    document.getElementById('spoint').innerHTML = params.get('spoint')
    document.getElementById('fpoint').innerHTML = params.get('fpoint')
    document.getElementById('class1').innerHTML = params.get('1stclass')
    document.getElementById('class2').innerHTML = params.get('2ndclass')
    document.getElementById('class3').innerHTML = params.get('3rdclass')
    document.getElementById('total').innerHTML = Math.round(params.get('costforall')) + '.00'
        // console.log(params.get('spoint'));


}

function saveforlate() {
    var spoint = document.getElementById('spoint').innerHTML
    var fpoint = document.getElementById('fpoint').innerHTML
    var class1 = document.getElementById('class1').innerHTML
    var class2 = document.getElementById('class2').innerHTML
    var class3 = document.getElementById('class3').innerHTML
    var total = document.getElementById('total').innerHTML = Math.round(params.get('costforall')) + '.00'
    emailaddress = document.getElementById('email').value;
    nameval = document.getElementById('name').value;
    date = document.getElementById('date').value;
    phone = document.getElementById('phone').value;

    var url = '?1stclass=' + class1 + '&2ndclass=' + class2 + '&3rdclass=' + class3 + '&costforall=' + total + '&spoint=' + spoint + '&fpoint=' + fpoint;
    var urlgen = url + '&emailaddress=' + emailaddress + '&nameval=' + nameval + '&date=' + date + '&phone=' + phone
    $.cookie('saveforlate', urlgen)

}

function formvalidation() {
    emailaddress = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    console.log(emailaddress);

    // function validateEmail(email) {
    //     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    //     return emailReg.test(email);
    // }
    function validateEmail(emailaddress) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailaddress)) {
            return (true)
        }
        // alert("You have entered an invalid email address!")
        return (false)
    }

    var errcodephone = 0
    var errcodeemail = 0
    if ((phone.length) != 10) {
        $('#phoneerr').show(200);
        errcodephone = 1;

    } else {
        $('#phoneerr').hide(500);
        errcodephone = 0;
    }
    if (!validateEmail(emailaddress)) {
        errcodeemail = 1;
        $('#emailerr').show(200);

    } else {
        $('#emailerr').hide(500);
        errcodeemail = 0;

    }
    // console.log(errcode);
    if (errcodephone == 1 || errcodeemail == 1) {
        return false
    }
    return true

}