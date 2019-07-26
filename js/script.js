/*

	
	HTML,CSS,JS Code By Prashant Sani
	https://prashantsani.com

*/
function whichAnimationEvent(){
	var t,
		el = document.createElement("fakeelement");

	var animations = {
		"animation"      : "animationend",
		"OAnimation"     : "oAnimationEnd",
		"MozAnimation"   : "animationend",
		"WebkitAnimation": "webkitAnimationEnd"
	}

	for (t in animations){
		if (el.style[t] !== undefined){
		return animations[t];
		}
	}
}
var animationEvent = whichAnimationEvent();


/* ------------
	Feature Detection
------------ */
// Fallback for SVG
if (!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
  });
}
// Fallback for WEBP
Modernizr.on('webp', function(result) {
  if (result) {
    console.log('Webp Supported');
  } else {
    console.log('Webp NOT Supported');
  }
});

/* ------------
	Plugins
------------ */

// w = window;
// d = document;
(function(w,d){
	

})(window,document);
