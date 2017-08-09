   $(window).on("load", function () {
       $(".cmsplugin_filer_folder_list li > img").each(function () {
           var src = $(this).attr("src");
           src = src.replace("filer_public_thumbnails/", "");
           src = src.substr(0, src.indexOf("32x32") - 2);
           $(this).attr("src", src);

           $(this).removeAttr("width");
           $(this).removeAttr("height");
       });
   });

$(".cmsplugin_filer_folder_list li > img").each(function () {
    $(this).on("click", function () {
         $(this).parent("li").addClass("selected_img");
         var src = $(this).attr("src");
         var elem = "<div id='img_view'><div class='container'><img src='" + src + "'/></div></div>";

        $("body").append(elem);
        $("#img_view").on("click", function (e) {
            var offset = $(this).offset();
            var x = e.pageX - offset.left;
            var y = e.pageY - offset.top;
            var img = $(this).children("div").children("img");
            if (img.offset().left < x && (img.offset().left + img.width()) > x) {
                var next_selected_elem = $(".selected_img").next();
                if (!next_selected_elem[0]) {
                    next_selected_elem = $(".cmsplugin_filer_folder_list li");
                }
                $(".selected_img").removeClass("selected_img");
                next_selected_elem.addClass("selected_img");
                img.attr("src", $(".selected_img").children().attr("src"));
            }
            else {
                $(this).remove();
            }
        });
    });
});