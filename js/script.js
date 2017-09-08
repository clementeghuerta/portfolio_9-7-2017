/*
console.log('working');


$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
        $('.nav').addClass('nav-back-to-top');
}
else {
$('.nav').removeClass('nav-back-to-top');
}
});


console.log('working');
$(window).scroll(function() {
if ($(this).scrollTop() < 300) {
        $('.nav-back-to-top').addClass('nav-back-to-top-2');
}
else {
$('.nav-back-to-top').removeClass('nav-back-to-top-2');
}
});


$(document).ready(function (){
            $(".scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div-1").offset().top
                }, 1000);
            });
        });


console.log('working-last');
*/

$(document).ready(function(){
    $("div#panel").hide();
    $("#toggle_panel").click( function() {
        $('#panel').slideToggle();
        $(this).html($(this).html() == 'Close About Clemente' ? 'Open About Clemente' : 'Close About Clemente');   
    });
});




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}



console.log("I am working1");





var all = ['Graphic', 'Front-end', 'UI', 'UX'];
window.onload = function()
{
/*for (i = 0; i < 1; i++) {*/
    document.getElementById('change-text').innerHTML = all[0] + ' ' + 'Designer';
}
  



















