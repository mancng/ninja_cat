$(document).ready(function(){

    $("img").click(function(){
        var newImage = $(this).attr('data-new-image');
        $(this).attr("src", newImage);
    });
});