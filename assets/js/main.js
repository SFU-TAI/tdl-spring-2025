
$(document).ready(function() {
    $("h4 >a").addClass("anchorjs-link");
    $("h4 >a").attr("anchorjs-link", "Anchor");
    $("h4 >a").attr("data-anchorjs-icon", "#");
    
    $("h4").mouseenter(function() {
        $(this).find("a").show();
    });
    $("h4").mouseleave(function() {
        $(this).find("a").hide();
    }).mouseleave();
    $("#schedule_table table").addClass("table")
    $("#schedule_table thead").addClass("table-light")
});


