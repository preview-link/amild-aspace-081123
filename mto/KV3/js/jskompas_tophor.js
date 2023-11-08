window.addEventListener("load", function () {
	var colorTheme = "#045487";
	var immersivePoint = document.querySelector('.immersivePoint');
    var immersiveLeft = document.querySelector('.immersiveLeft');
	var immersiveRight = document.querySelector('.immersiveRight');
	var ads1 = document.querySelector('#div-gpt-ad-Zone_1');
	var ads2 = document.querySelector('#div-gpt-ad-Zone_2');
	var ads3 = document.querySelector('#div-gpt-ad-Horizontal_Ad');
	var ads4 = document.querySelector('.flying_carpet_div');
    var liftdown = document.querySelector('.ol_container');
	var ol_swipe = document.querySelector('.ol_swipe');
	var tombolclosehorad = document.querySelector('#tombolclosehorad');
	var pin = document.querySelector('#draggable');
    
    immersiveLeft.style.background = colorTheme;
	immersiveRight.style.background = colorTheme;
	ads1.style.background = colorTheme;
	//ads2.style.background = colorTheme;
	ads3.style.background = colorTheme;    
	// ads4.style.background = colorTheme;    

    // check for null before changing
    if (liftdown != null) {        
        liftdown.style.background = colorTheme;
	    ol_swipe.style.background = colorTheme;
	}
	
    // check for null before changing
    // if (tombolclosehorad != null) {        
    //     tombolclosehorad.addEventListener("click", function(){
	// 		pin.classList.add("pinOff");
	// 	});
    // }


	if (immersivePoint != null) {        
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
	}
	

    
});