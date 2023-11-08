window.addEventListener("load", function () {
	var colorTheme = "#045487";    
    var immersivePoint = document.querySelector('.immersivePoint');
    var immersiveLeft = document.querySelector('.immersiveLeft');
	var immersiveRight = document.querySelector('.immersiveRight');
	var ads1 = document.querySelector('#div-gpt-ad-top-banner');
    var ads2 = document.querySelector('#div-gpt-ad-m4-home');
    var ads3 = document.querySelector('#div-gpt-ad-mid-banner');
    var ads4 = document.querySelector('#div-gpt-ad-bottom-frame');
    var ads5 = document.querySelector('#div-Inside-MediumRectangle');
	var ads6 = document.querySelector('#div-Inside-MediumRectangle2');
    var ads7 = document.querySelector('#div-gpt-ad-over-comment');
    var ads8 = document.querySelector('#div-gpt-ad-below-comment');

	immersiveLeft.style.background = colorTheme;
    immersiveRight.style.background = colorTheme;    
	ads1.style.background = colorTheme;
	ads2.style.background = colorTheme;	
	ads4.style.background = colorTheme;	
   

    //check for null before changing
    if (ads3 != null) {        
        ads3.style.background = colorTheme;
        ads3.parentElement.style.overflow = "visible";
    }
    if (ads5 != null) {        
        ads5.style.background = colorTheme;
    }
    if (ads6 != null) {        
        ads6.style.background = colorTheme;
    }
    if (ads7 != null) {        
        ads7.style.background = colorTheme;
    }
    if (ads8 != null) {        
        ads8.style.background = colorTheme;
    }

    userHasScrolled = false;
	window.onscroll = function (e)
	{
		userHasScrolled = true;
		console.log("scroll");
		immersivePoint.classList.add('immersivePointOff');
		
		if(userHasScrolled)
		{
			//do your code here
			userHasScrolled = false;
			console.log("offscroll");
			setTimeout(function(){ 
				immersivePoint.classList.remove('immersivePointOff'); 
			}, 750);		
			
		}	
	}
});