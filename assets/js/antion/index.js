(function($){






        $(".logo").on("mouseover",function(){

            if($('body').width()<720){
                clearTimeout(timer);
                
            }else {
                $(this).unbind("mouseover");

                var timer =setTimeout(function(){
                    $(".logo_anit").removeClass("logo_anit");
                    $(".logo").animate({top:-450},1000,function(){

                        $(".content").animate({opacity:1},500);

                    });

                    clearTimeout(timer);
                },1000);

            }



        });



    

})(jQuery);