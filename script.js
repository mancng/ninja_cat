$(document).ready(function(){

    $("img").click(function(){
        var temp = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-new-image"));
        $(this).attr("data-new-image", temp);
    })
});