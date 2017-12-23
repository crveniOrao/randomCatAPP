$("#btn").click(function(){
    $.get("https://random.cat/meow")
    .done(function(data){
        $("#img").attr("src", data.file);
    })
})

$(document).ready(function() {
    $.get("https://random.cat/meow")
    .done(function(data){
        $("#img").attr("src", data.file);
    })
});
