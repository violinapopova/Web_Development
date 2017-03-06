$(document).ready(function(){
    console.log("Document loaded");
    $( "#nameButton").click(function(){
        var name = prompt ("Please enter a name to add");
        console.log("Name: " + name);
        $( "#data").append("<div>" + name + "</div>");
    });
        $("#greenColourButton").click(function() {
        var dataDiv = $("#data");
        if (dataDiv.hasClass("red")){
        dataDiv.removeClass("red");
    }
        dataDiv.addClass("green");
    })
});
