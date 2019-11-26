var imgs = $("img");
var msg = "Hover over an image below.";

$("img").each(function() {

$(this).mouseover( function() {
 $('#image').css("background-image", "url('"+this.src+"')");
 $('#image').html(this.alt);

 })

 $(this).mouseleave( function() {
 $('#image').css("background-image", "url('')");
 $('#image').html(msg);

 })

 $(this).focus( function() {
 $('#image').css("background-image", "url('"+this.src+"')");
 $('#image').html(this.alt);

 })

 $(this).blur( function() {
 $('#image').css("background-image", "url('')");
 $('#image').html(msg);

 })


})