console.log("hello")
$(".rooms dt").on("click", function () {
    $(".selected_room_desc").removeClass("selected_room_desc");
    var selected_room = $(".selected_room");
    if ($(this) != selected_room) {
        console.log("this is not selected yet");
        selected_room.removeClass("selected_room");
    }
    $(this).toggleClass("selected_room");
    $(this).next("dd").addClass("selected_room_desc");
});