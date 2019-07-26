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

 w = window;
 d = document;
//(function(w,d){

	var _html = d.documentElement,
			request = new XMLHttpRequest(),
			data = undefined,
			url = 'helpers/dummy-json.json',
			template_list = Handlebars.compile(d.getElementById('template-list').innerHTML),
			_$ = function (selector){
				return d.querySelectorAll(selector);
			},
			customer_list = _$('#customer-list')[0];


	// Ajaxing data
	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
				// Success!!
				data = JSON.parse(request.responseText);
				console.log(data)

				customer_list.innerHTML = template_list(data)
				
		} else {
				data = 'We reached our target server, but it returned an error'
		}
	};
	request.onerror = function() {
		data =  'Ajax Error'
	};
	request.send();

//})(window,document);
