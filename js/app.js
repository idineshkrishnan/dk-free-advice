$(document).ready(function() {
    getAdvice();
});

setInterval(function() {
    getAdvice();
}, 10 * 1000);

function getAdvice() {

    $.ajax({
        url: "https://api.adviceslip.com/advice",
        method: "GET",
        success: function(response) { 
            var result = jQuery.parseJSON(response);
            $('#advice').html("\""+result.slip.advice+"\"");
        } 
    });
}