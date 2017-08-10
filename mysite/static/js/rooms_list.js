console.log("hello")
$(".rooms dt").on("click", function () {
    console.log($("selected_room"));
    $(this).toggleClass("selected_room");
   $(this).next("dd").addClass("selected_room_desc");
});