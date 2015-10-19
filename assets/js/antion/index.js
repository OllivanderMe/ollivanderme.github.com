(function($){

    
    
    $(".logo").on("mouseover",function(){
        
        
        $(this).unbind("mouseover");
        
        var timer =setTimeout(function(){
            $(".logo_anit").removeClass("logo_anit");
            $(".logo").animate({top:-450},1000,function(){
                
                $(".content").animate({opacity:1},500);
            
            });
           
            clearTimeout(timer);
        },1000);
        
    }); 
    

})(jQuery);