!function(i){if(i("#back-to-top").on("click",function(){i("body, html").animate({scrollTop:0},600)}),i("#main-nav-toggle").on("click",function(){i(".nav-container-inner").slideToggle()}),i(".article-entry").each(function(n){i(this).find("img").each(function(){!this.alt||i.prototype.justifiedGallery&&i(this).parent(".justified-gallery").length||i(this).after('<span class="caption">'+this.alt+"</span>"),"A"!==i(this).parent().prop("tagName")&&i(this).wrap('<a href="'+this.src+'" title="'+this.alt+'" class="gallery-item"></a>')})}),"undefined"!=typeof lightGallery){var n={selector:".gallery-item"};i(".article-entry").each(function(i,a){lightGallery(a,n)}),lightGallery(i(".article-gallery")[0],n)}if(i.prototype.justifiedGallery){n={rowHeight:140,margins:4,lastRow:"justify"};i(".justified-gallery").justifiedGallery(n)}function a(){var n=i(".nav-container-inner").width()-10,a=i("#main-nav").width(),t=i("#sub-nav").width();if(a+t>n){0==i(".main-nav-more").length&&(i(['<li class="main-nav-list-item top-level-menu main-nav-more">','<a class="main-nav-list-link" href="javascript:;">More</a>','<ul class="main-nav-list-child">',"</ul></li>"].join("")).appendTo(i("#main-nav")),i(".main-nav-more").hover(function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideDown("fast")},function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideUp("fast")}));for(var e=i("#main-nav").children().length-2;e>=0;e--){var l=i("#main-nav").children().eq(e);if(!(a+t>n))return;l.prependTo(i(".main-nav-more > ul")),a=i("#main-nav").width()}}i(".main-nav-more").length>0&&(i(".main-nav-more > ul").children().appendTo(i("#main-nav")),i(".main-nav-more").remove())}i("#sidebar .sidebar-toggle").click(function(){i("#sidebar").hasClass("expend")?i("#sidebar").removeClass("expend"):i("#sidebar").addClass("expend")}),i(".main-nav-list > li").unwrap(),i("#main-nav > li > .main-nav-list-link").each(function(){i(".page-title-link").length>0&&(i(this).html().toUpperCase()==i(".page-title-link").html().toUpperCase()?i(this).addClass("current"):i(this).attr("href")==i(".page-title-link").attr("data-url")&&i(this).addClass("current"))}),a(),i(window).resize(function(){a()}),i(".main-nav-list-item").hover(function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideDown("fast")},function(){i(window).width()<480||i(this).children(".main-nav-list-child").slideUp("fast")}),i(".main-nav-list-item").each(function(){i(this).find(".main-nav-list-child").length>0&&i(this).addClass("top-level-menu")})}(jQuery);