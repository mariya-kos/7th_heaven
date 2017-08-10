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
        $(this).append('<div class="cmsplugin_filer_folder_list room_imgs">' + html + '</div>');
        $(".room_imgs img").each(function () {
            $(this).on("click", function () {
                 $(this).parent("li").addClass("selected_img");
                 var src = $(this).attr("src");
                 var elem = "<div id='img_view'><div class='container'><img src='" + src + "'/></div></div>";

                $("body").append(elem);
                $("#img_view").on("click", function (e) {
                    // var offset = $(this).offset();
                    // var x = e.pageX - offset.left;
                    // var y = e.pageY - offset.top;
                    // var img = $(this).children("div").children("img");
                    // if (img.offset().left < x && (img.offset().left + img.width()) > x) {
                    //     var next_selected_elem = $(".selected_img").next();
                    //     if (!next_selected_elem[0]) {
                    //         next_selected_elem = $(".cmsplugin_filer_folder_list li");
                    //     }
                    //     $(".selected_img").removeClass("selected_img");
                    //     next_selected_elem.addClass("selected_img");
                    //     img.attr("src", $(".selected_img").children().attr("src"));
                    // }
                    // else {
                        $(this).remove();
                    // }
                });
            });
        });
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