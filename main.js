$("#btn").click(function(){
    $.get("http://random.cat/meow")
    .done(function(data){
        $("#img").attr("src", data.file);
    })
})

$(document).ready(function() {
    $.get("http://random.cat/meow")
    .done(function(data){
        $("#img").attr("src", data.file);
    })
});
