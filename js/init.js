/*! modernizr 3.3.1 (Custom Build) | MIT *
* https://new.modernizr.com/download/?-canvas-csscalc-csscolumns-cssvhunit-forcetouch-history-inlinesvg-objectfit-pagevisibility-svg-svgasimg-svgfilters-touchevents-webp-setclasses-testallprops !*/
!function(e,t,n){function r(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?_.className.baseVal=t:_.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,i,a,s;for(var u in w)if(w.hasOwnProperty(u)){if(e=[],t=w[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==o.length?Modernizr[o[0]]=t:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=t),r([(t&&0!=t?"":"no-")+o.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?f(r,n||t):r);return!1}function d(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,s,u,l,f="modernizr",A=a("div"),c=d();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:f+(r+1),A.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+f,(c.fake?c:A).appendChild(i),c.appendChild(A),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),A.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=n(A,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=l,_.offsetHeight):A.parentNode.removeChild(A),!!s}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,r,i){function u(){A&&(delete k.style,delete k.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var f=h(e,r);if(!o(f,"undefined"))return f}for(var A,d,c,p,v,m=["modernizr","tspan","samp"];!k.style&&m.length;)A=!0,k.modElem=a(m.shift()),k.style=k.modElem.style;for(c=e.length,d=0;c>d;d++)if(p=e[d],v=k.style[p],l(p,"-")&&(p=s(p)),k.style[p]!==n){if(i||o(r,"undefined"))return u(),"pfx"==t?p:!0;try{k.style[p]=r}catch(g){}if(k.style[p]!=v)return u(),"pfx"==t?p:!0}return u(),!1}function m(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+R.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?v(s,t,r,i):(s=(e+" "+O.join(a+" ")+a).split(" "),A(s,t,n))}function g(e,t,r){return m(e,n,n,t,r)}var y=[],w=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var _=t.documentElement,b="svg"===_.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var T=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();C.hasEvent=T;var S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=S,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+S.join(t+e),!!n.style.length});var E;!function(){var e={}.hasOwnProperty;E=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=u}),Modernizr.addAsyncTest(function(){function e(e,t,n){function r(t){var r=t&&"load"===t.type?1==o.width:!1,i="webp"===e;u(e,i?new Boolean(r):r),n&&n(t)}var o=new Image;o.onerror=r,o.onload=r,o.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var r=0;r<t.length;r++)e(t[r].name,t[r].uri)})}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var x="Moz O ms Webkit",R=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=R;var B=function(t){var r,o=S.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=S[a],u=s.toUpperCase()+"_"+r;if(u in i)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=B;var O=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=O;var U=C.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");U(r,function(e){n=9===e.offsetTop})}return n}),U("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)});var Q={elem:a("modernizr")};Modernizr._q.push(function(){delete Q.elem});var k={style:Q.elem.style};Modernizr._q.unshift(function(){delete k.style}),C.testAllProps=m,C.testAllProps=g,function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=g("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=g("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||g(n[r])),Modernizr.addTest("csscolumns."+e,t)}();var P=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?B(e):(-1!=e.indexOf("-")&&(e=s(e)),t?m(e,t,n):m(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return T(P("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),Modernizr.addTest("pagevisibility",!!P("hidden",t,!1)),Modernizr.addTest("objectfit",!!P("objectFit"),{aliases:["object-fit"]}),i(),r(y),delete C.addTest,delete C.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
 
var utils= {
    // detect if mobile browser. regex -> http://detectmobilebrowsers.com
    isMobile : (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera),
    animationEndEvents : 'webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd',
    isNavBtnClickable:true,
    isAnythingAnimating:false,
    reverseCheckGetIndex: function (array,name,value){
        //utility function to get the index of the value in an Array
        for (var index = 0; index<array.length;index++){
            if(array[index][name]===value){
                return index;
            }
        }
        console.log("not found in the array, returning 0");
        return 0
    },
    randomBetween: function(min, max){
        return Math.floor((Math.random() * ((max + 1) - min)) + min)
    },
    visits : {
        history:[],
        pageState:{
            page:"",
            title:"",
            details:{}
        },
        init: function(href,title,details){ 
            if (window.history && window.history.pushState){
                window.history.replaceState(
                    {page:href, title:title,details:details},
                    title,
                    href
                );
                this.history.push(href);
            }
        },
        add:function(href,title,details){
            if (window.history && window.history.pushState){

                window.history.pushState(
                    {page:href, title:title,details:details},
                    title,
                    href
                );
                this.history.push(href);

                this.pageState = {
                    page: href,
                    title: title,
                    details: details
                };
            }
        },
        hasBack: function(){
            return this.history.length>1
        },
        popstate: function(){ /* Should be re-defined elsewhere */ },
        clear : function(){
            this.history = []
        }
    }
};

function initStoresMap(){
    window.utils.googleAPILoaded= true;
}

utils.reInitValues = function () {
    this.winWidth = document.documentElement.clientWidth;
    this.winHeight = document.documentElement.clientHeight;
    this.aspectRatio = ((this.winWidth/this.winHeight).toFixed(2)/1);
    this.winWidthHalf = this.winWidth/2;
    this.winHeightHalf = this.winHeight/2;
}
utils.reInitValues();

function splitText($element){
    var text="";
    $.each($element.text().split(''),function(i, char){

        if(char===" "){
            text +=" "
        }else if(char ==="&#13;"){
            text +="&#13;"
        }else {
            text += "<span style='display:inline-block'>"+char+"</span>"
        }

    });
    $element.html(text);
}
 
window.addEventListener('resize', function(){
    utils.reInitValues();
}, true)
 