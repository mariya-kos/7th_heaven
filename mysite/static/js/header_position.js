   $(window).on("load", function () {
       var height = $("header").height();
       $("section.content").css("padding-top", height);
   });