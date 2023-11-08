window.addEventListener("load", function () {
	var colorTheme = "#9bbded";
	var immersiveLeft = document.querySelector('.immersiveLeft');
	var immersiveRight = document.querySelector('.immersiveRight');
	var ads1 = document.querySelector('#div-gpt-ad-Zone_1');
	var ads2 = document.querySelector('#div-gpt-ad-Zone_3');
	var ads3 = document.querySelector('#div-gpt-ad-Horizontal_Ad');
	var ads4 = document.querySelector('.kcm-track');
	var liftdown = document.querySelector('.ol_container');
	var ol_swipe = document.querySelector('.ol_swipe');
	var tombolclosehorad = document.querySelector('#tombolclosehorad');
	var premium_div = document.querySelector('.premium_div');

	immersiveLeft.style.background = colorTheme;
	immersiveRight.style.background = colorTheme;		
	  
	setTimeout(function(){
		console.log("2s");
		if (liftdown != null) {        
			liftdown.style.background = colorTheme;
		}
		if (ads1 != null) {        
			ads1.style.background = colorTheme;
		}
		if (ads2 != null) {        
			ads2.style.background = colorTheme;	
		}
		if (ads3 != null) {        
			ads3.style.background = colorTheme;    
		}
		if (ads4 != null) {        
			ads4.style.background = colorTheme;  
		}
		if (ol_swipe != null) {        
			ol_swipe.style.background = colorTheme;
		}
		if (premium_div != null) {        
			premium_div.style.background = colorTheme;
		}
		if (tombolclosehorad != null) {        
			tombolclosehorad.addEventListener("click", function(){
				immersiveLeft.style.display = "none";
				immersiveRight.style.display = "none";
			});
		}   
	}, 2000);

});