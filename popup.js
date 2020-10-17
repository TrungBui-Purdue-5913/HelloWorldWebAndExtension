$(function(){
    $('#time').keyup(function(){
        $('#greet').text('Posture check in ' + $('#time').val());
    })
})