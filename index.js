$('#ctest').hide();
var count = 0;

$('#tester').click(function () {
    $('#ctest').toggle(500);
    count += 1;
    if (count % 2) {
        $('#tester').text('FERMER')

    }
    else {
        $('#tester').text('TESTER')

    }


})

$('#voir').click(function () {
    $('#ctest2').html($('#ctest1').val());
})


$('#chtml1').hide();
$('#ccss1').hide();



$('#html1').click(function () {
    $('#chtml1').toggle(1000);
})

$('#css1').click(function () {
    $('#ccss1').toggle(1000);
})

