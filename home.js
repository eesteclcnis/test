var hdr;
    hdr=document.getElementById("myNav");
$(document).ready(function() { 
 });
$(window).on('scroll', function() {
            if ($(window).scrollTop()+hdr.offsetHeight >= $('#myCarousel').offset().top
			+ $('#myCarousel').outerHeight()){ 
                hdr.style.backgroundColor="var(--primary-color)";
            } 
			else{
               if ($(window).scrollTop()+hdr.offsetHeight >= ($('#myCarousel').offset().top
			+ $('#myCarousel').outerHeight())*2/6){
				scrolltoend();
			   hdr.style.backgroundColor="transparent";
			   }
			   else{
			   hdr.style.backgroundColor="transparent";
			   }
			}
        }); 
	function scrolltoend(){
		     if ($(window).scrollTop()+hdr.offsetHeight < $('#myCarousel').offset().top
			+ $('#myCarousel').outerHeight()){
				$(window).scrollTop($(window).scrollTop()+10);
			}
			else{
				
                hdr.style.backgroundColor="var(--primary-color)";
			}
	}
	