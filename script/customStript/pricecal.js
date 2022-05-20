$(document).ready(function() {
    $('.bookingbtndiv').hide();

    $('#submit').click(function() {

        var spoint = $('#spoint').val();
        var fpoint = $('#fpoint').val();

        costforall = costcal(spoint, fpoint);
        if (costforall >= 10000) {
            var discount = (costforall * 0.1);

        } else
        if (costforall >= 5000 && costforall <= 9999) {
            discount = (costforall * 0.05);
        } else {
            discount = 0;
        }
        costforall = costforall - discount;

        $('#discount').html(Math.round(discount) + '.00');
        $('#total').html(Math.round(costforall) + '.00');

        $('.bookingbtndiv').show();
    });

    $('#bookingbtn').click(function() {
        var url = urlgen('bookingbtn');
        window.location.replace(url);
    });

});

function urlgen() {

    var fstclass = document.getElementById('1stclass').value;
    var sndclass = document.getElementById('2ndclass').value;
    var trdclass = document.getElementById('3rdclass').value;
    var spointlink = document.getElementById('spoint');
    spointlink = spointlink.options[spointlink.selectedIndex].text;
    var fpointlink = document.getElementById('fpoint');
    fpointlink = fpointlink.options[fpointlink.selectedIndex].text;

    var url = 'booking.html?1stclass=' + fstclass + '&2ndclass=' + sndclass + '&3rdclass=' + trdclass + '&costforall=' + costforall + '&spoint=' + spointlink + '&fpoint=' + fpointlink;
    return url;
}

function costcal(spoint, fpoint) {
    if (fpoint > spoint) {
        var stationnum = (spoint - fpoint) * -1
    } else {
        var stationnum = (spoint - fpoint)
    }
    if (stationnum <= -1) {
        stationnum = stationnum * -1
    }
    // console.log(stationnum)
    switch (stationnum) {
        case 1:
            costfortrip = 300;
            break;
        case 2:
            costfortrip = 350;
            break;
        case 3:
            costfortrip = 400;
            break;
        case 4:
            costfortrip = 450;
            break;
        case 5:
            costfortrip = 500;
            break;
        case 6:
            costfortrip = 550;
            break;
        case 7:
            costfortrip = 600;
            break;
        case 8:
            costfortrip = 650;
            break;
        case 9:
            costfortrip = 700;
            break;
        case 10:
            costfortrip = 750;
            break;
    }
    var fstclass = document.getElementById('1stclass').value;
    var sndclass = document.getElementById('2ndclass').value;
    var trdclass = document.getElementById('3rdclass').value;
    costforallfclz = (fstclass * costfortrip * 0.5) + (fstclass * costfortrip);
    costforallsclz = (sndclass * costfortrip * 0.25) + (sndclass * costfortrip);
    costforalltclz = trdclass * costfortrip;

    costforall = costforallfclz + costforallsclz + costforalltclz
    costforall = Math.round(costforall);
    return costforall;
}