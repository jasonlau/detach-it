<!-- 
/* 
    Detach It - A jQuery plugin
    ==================================================================
    Copyright (c)2012 JasonLau.biz - Version 1.0
    ==================================================================
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    Example: jQuery("#navigation-menu").detachit();
    Demo: http://jasonlau.biz/public/examples/detaching-nav
*/

(function($){
 	$.fn.extend({ 
 		detachit: function(options) {
			var defaults = { 
			 position: 'fixed',
             top: '0px',
             zindex: 16777271,
             display: 'none',
             width: false,
             css: false
			}
            var option =  $.extend(defaults, options);
            return this.each(function() {
    		  var temp_image, 
              img_width, 
              obj_width, 
              css, 
              obj = $(this), 
              id = Math.round(Math.random()*1000),
              check_detached_visibility = function(os){
                $(".detached-item").each(function(){
                    var related_item = $(this).attr('rel'),
                    obj_pos = $("." + related_item).position().top;
                    
                    if(os > obj_pos){
                        if(!$(this).is(":visible")){
                            $(this).show();                            
                        }
                    } else {
                        if($(this).is(":visible")){
                            $(this).hide();
                        }
                    }
                });
              };
              obj.clone().addClass("detached-item").attr({'rel':'detached-item-'+id, 'id':'detached_item_'+id}).appendTo("body");
              obj.addClass("detached-item-" + id); 
              obj_width = (!option.width) ? obj.width() : option.width;
              if(obj.is('img') && !option.width){
                css = (!option.css) ? {'position': option.position, 'top': option.top, 'z-index': option.zindex, 'display': option.display} : option.css;              
              } else {
                css = (!option.css) ? {'position': option.position, 'top': option.top, 'z-index': option.zindex, 'display': option.display, 'width': obj_width + 'px'} : option.css;
              }
              $(".detached-item[rel='detached-item-"+id+"']").css(css);
              $(window).scroll(function(){                
                var os = $(this).scrollTop();
                check_detached_visibility(os);
              });              
    		});
    	}
	});	
})(jQuery);
 -->