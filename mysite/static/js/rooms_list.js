$(window).on("load", function () {
    $("cms-plugin.cms-plugin-text-node").each(function () {
        var id = $(this).text().trim();
        if (id.slice(0,-1) == 'room_') {
            $(this).next().css("display", "none");
        }
        $(this).next().attr("id", id);
    });
    $(".rooms dd").each(function () {
        var dd_id = $(this).attr("id").slice(0,-5);
        var html = $('#' + dd_id + ' ul').html();
        $(this).append('<div class="cmsplugin_filer_folder_list room_imgs"' + html + '</div>');
    });
});

$(".rooms dt").on("click", function () {
    $(".selected_room_desc").removeClass("selected_room_desc");
    var selected_room = $(".selected_room");
    if (selected_room && !$(this).hasClass("selected_room")) {
        selected_room.removeClass("selected_room");
    }
    $(this).toggleClass("selected_room");
    $(".selected_room").next("dd").addClass("selected_room_desc");
});