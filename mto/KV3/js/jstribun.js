window.addEventListener("load", function () {
	var colorTheme = "#045487";
	var immersivePoint = document.querySelector('.immersivePoint');
    var immersiveLeft = document.querySelector('.immersiveLeft');
	var immersiveRight = document.querySelector('.immersiveRight');
	var ads1 = document.querySelector('#div-Top-MediumRectangle');
	var ads2 = document.querySelector('#div-Middle-MediumRectangle');
	var ads3 = document.querySelector('#div-Anchor');
	var ads4 = document.querySelector('#div-Bottom-MediumRectangle');
    immersiveLeft.style.background = colorTheme;
	immersiveRight.style.background = colorTheme;
	ads1.style.background = colorTheme;
	ads2.style.background = colorTheme;
    ads3.style.background = colorTheme;  
    
    //check for null before changing
    if (ads4 != null) {        
        ads4.style.background = colorTheme;
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