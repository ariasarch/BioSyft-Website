var lbox={isIOS:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,isChrome:/chrome/i.test(navigator.userAgent),isFF:/firefox/i.test(navigator.userAgent),slideTime:1.5,isTouch:!1,openLightbox:function(e){for(var t=e.closest(".gg"),i=this.slides=e.closest(".gg").querySelectorAll(".ggs"),l=0;l<i.length;l++)if(i[l].contains(e)){this.currentSlide=l;break}var o=document.createElement("div");this.addClass(o,"lb");var n=document.createElement("div");this.addClass(n,"lbm"),this.lbm=n;var a=this.addSlide(this.currentSlide,0);if(a){var r=document.body,s=document.documentElement.clientWidth,d=s-window.innerWidth,b=window.getComputedStyle(r).getPropertyValue("min-width"),c=this.isChrome?1:this.z();"0px"!==b&&(b=parseInt(b)*c)>s&&(d+=parseInt(b)-s)>0&&(d=0),r.style.setProperty("--sw",parseInt(d)+"px"),r.style.setProperty("--lbo","0"),r.style.setProperty("--lbbto","0"),this.updateAlign(),this.addClass(r,"lbb"),o.appendChild(this.lbm),n.gg=t;var h=t.getAttribute("data-ai");null!=h&&(r.style.setProperty("--lbar",t.getAttribute("data-ar")+"%"),r.style.setProperty("--lbap",t.getAttribute("data-ap")+"%"),["ac","abkc","abc","ahc","ahbkc","ahbc","aac","aabkc","aabc"].forEach(function(e){r.style.setProperty("--lb"+e,t.getAttribute("data-"+e))}),this.addButton(o,h,!0),this.addButton(o,h));var u=document.createElement("div");this.addClass(u,"lbw"),o.appendChild(this.lbw=u),r.insertBefore(o,r.childNodes[1]),o.offsetWidth,r.style.setProperty("--lbo","1"),r.style.setProperty("--lbbto","1"),r.style.setProperty("--lbot",t.getAttribute("data-ot")+"s"),r.style.setProperty("--lbbk",t.getAttribute("data-bk")),r.style.setProperty("--lbhp",t.getAttribute("data-lp")+"vw"),r.style.setProperty("--lbvp",t.getAttribute("data-lp")+"vh"),this.slideTime=t.getAttribute("data-ts"),this.maximizeSlideAnimated(a)}},closeLightBox:function(){this.lbm.childNodes.forEach(function(e){e.ro&&e.ro.disconnect()});var e=this.lbm.childNodes[this.currentSlide+1].childNodes[0],t=document.body;t.style.setProperty("--lbo","0"),t.style.setProperty("--lbbto","0");var i=this.lbw;["touchstart","touchmove","touchend","touchcancel","mousedown","mousemove","mouseup","mouseleave","wheel"].forEach(function(e){lbox.removeEvent(i,e,i.swipeHandler)}),i.swipeHandler=void 0,this.minimizeSlideAnimated(e)},addSlide:function(e,t){var i,l=(e=this.slides[e]).getAttribute("data-st"),o=e.getAttribute("data-rt"),n=e.getElementsByClassName("ggse")[0];if(n){if((i=n.cloneNode(!0)).type=l,"img"==l){var a=document.createElement("img"),r=e.getAttribute("data-img"),s=50*parseInt(e.getAttribute("data-ha")),d=50*parseInt(e.getAttribute("data-va")),b=(n=n.querySelector("img")).getBoundingClientRect(),c=b.width/b.height;a.setAttribute("src",r),a.style.position="relative",a.style.top=d+"%",a.style.left=s+"%",a.style.transform="translate(-"+s+"%, -"+d+"%)",c>o?a.style.width="100%":a.style.height="100%",i.innerHTML=a.outerHTML}if(i.rt=null!=o?parseFloat(o):16/9,this.addClass(i,"lbs"),i.style.minWidth="0",i.style.pointerEvents="none",i.se=n,"movie"==l)i.style.marginTop="0",(u=i.children[0]).style.width="100%",u.style.height="auto";else if(0!==t)if("vimeo"==l){var h=i.querySelector("iframe");null!=h&&("100%"!=h.style.width&&(h.style.width="100%",h.aw=!0),h.style.height="100%")}else{var u=i.children[0],y=i.getAttribute("data-pt");null!=y&&(i.setAttribute("data-pt",u.style.paddingTop),u.style.paddingTop=y)}var p=document.createElement("div");this.addClass(p,"lbc"),p.appendChild(i),null!=t?this.lbm.insertBefore(p,t.parentNode):this.lbm.appendChild(p);var v=function(e){return function(){var t;if(null==e.br||(t=e.getBoundingClientRect()).width!=e.br.width||t.height!=e.br.height){e.br=t;var i=e.childNodes[0];lbox.maximizeSlide(i)}}}(p);if("ResizeObserver"in window)p.ro=new ResizeObserver(v),p.ro.observe(p);else if("requestAnimationFrame"in window){var m=function(){v(),requestAnimationFrame(m)};requestAnimationFrame(m)}else setInterval(v,100);return i}},addButton:function(e,t,i){var l=document.createElement("div");this.addClass(l,"lbbc"),i?l.style.left=0:l.style.right=0;var o=document.createElement("div");this.addClass(o,"lbbt"),l.appendChild(o);var n,a,r=new XMLHttpRequest;r.onreadystatechange=(n=o,a=i,function(){if(4==r.readyState&&200==r.status){var e=r.responseText;a&&(e=e.replace("fill:","transform:scale(-1);fill:")),n.innerHTML=e}}),r.open("GET",t,!0),r.send(null),o.onclick=function(e){return function(t){null==lbox.lbm.fn&&lbox.changeSlide(0,e)}}(i),e.appendChild(l)},now:function(){return window.performance.now?window.performance.now():Date.now()},minimizeSlide:function(e){var t=e.se.getBoundingClientRect(),i=this.isChrome?1:this.z();e.style.visibility="hidden",e.style.marginTop=t.top+window.scrollY*(i-1)/i+"px",e.style.marginLeft=-window.innerWidth/i/2+t.left+"px",e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.verticalAlign="initial",e.style.visibility=""},minimizeSlideAnimated:function(e){if(this.maximizeSlide(e),e.offsetWidth,e.style.transition="all var(--lbot)","vimeo"==e.type){var t=e.querySelector("iframe");null!=t&&(t.style.transition="all var(--lbot)",t.aw?(t.style.width="",t.style.height="",t.aw=void 0):t.style.height="100%")}else if("youtube"==e.type){var i=e.getAttribute("data-pt");if(null!=i)(l=e.children[0]).style.transition="all var(--lbot)",l.style.paddingTop=i,e.removeAttribute("data-pt")}else if("movie"==e.type){var l;(l=e.children[0]).style.height="100%",l.offsetWidth,l.style.transition="all var(--lbot)",l.style.width="",l.style.height=""}this.minimizeSlide(e),this.addTransitionEndEvent(e,function(e,t){if(t.target==e){if(lbox.removeEvent(document,"keyup",lbox.keyboardHandler),lbox.removeTransitionEndEvent(e),e.style.position=e.style.marginTop="",e.style.marginLeft=0,e.style.width=e.style.height="100%","vimeo"==e.type){var i=e.querySelector("iframe");null!=i&&(i.style.transition="")}else if("youtube"==e.type||"movie"==e.type){e.children[0].style.transition=""}lbox.lbm.parentNode.remove(),lbox.updateAlign(!0);var l=document.body;lbox.removeClass(l,"lbb"),l.style.removeProperty("--sw"),["o","bto","ot","bk","as","ap","ab","ar","ac","abkc","abc","ahc","ahbkc","ahbc","aac","aabkc","aabc","hp","vp"].forEach(function(e){l.style.removeProperty("--lb"+e)})}})},maximizeSlide:function(e){var t=document.body,i=this.z(),l=window.getComputedStyle(this.lbm.gg).getPropertyValue("--lbas"),o=parseFloat(window.getComputedStyle(t).getPropertyValue("--lbhp")),n=parseFloat(window.getComputedStyle(t).getPropertyValue("--lbvp"));t.style.setProperty("--lbas",l),l=2*parseInt(l)*2*i;var a=window.getComputedStyle(this.lbm.gg).getPropertyValue("--lbab");document.body.style.setProperty("--lbab",a);var r,s,d=window.innerWidth,b=window.innerHeight,c=d-2*(o*=d/100)-l,h=b-2*(n*=b/100),u=c/h,y=e.rt;u>y?(r=h*y,s=h):s=(r=c)/y,b/=i,r/=i,s/=i,e.style.visibility="hidden",e.style.width=r+"px",e.style.height=s+"px",e.style.marginLeft=-(r+(this.isChrome?d-d/i:0))/2+"px",e.style.marginTop=(b-s)/2+"px",e.style.visibility=""},maximizeSlideAnimated:function(e){if(this.minimizeSlide(e),e.offsetWidth,e.style.transition="all var(--lbot)","vimeo"==e.type){var t=e.querySelector("iframe");null!=t&&(t.style.transition="all var(--lbot)","100%"!=t.style.width&&(t.style.width="100%",t.aw=!0),t.style.height="100%")}else if("youtube"==e.type){var i=e.getAttribute("data-pt");if(null!=i){(o=e.children[0]).style.transition="all var(--lbot)";var l=o.style.paddingTop;o.style.paddingTop=i,e.setAttribute("data-pt",l)}}else if("movie"==e.type){var o;(o=e.children[0]).style.transition="all var(--lbot)",o.style.width=o.style.height="100%"}this.maximizeSlide(e),this.addTransitionEndEvent(e,function(e,t){if(t.target==e){if(lbox.removeTransitionEndEvent(e),"vimeo"==e.type){var i=e.querySelector("iframe");null!=i&&(i.style.transition="")}else if("youtube"==e.type){(l=e.children[0]).style.transition=""}else if("movie"==e.type){var l;(l=e.children[0]).style.transition="",l.style.height="auto"}lbox.addSlide(lbox.slides.length-1,e);for(var o=0;o<lbox.currentSlide;)lbox.addSlide(o++,e);for(;++o<lbox.slides.length;)lbox.addSlide(o);lbox.addSlide(0);var n=lbox.lbm;n.style.width=100*(lbox.slides.length+2)+"vw",lbox.scrollSlide(),n.offsetWidth,lbox.addSwipeHandler(),lbox.keyboardHandler=function(e){lbox.keyboardHandler&&lbox.lbw.swipeHandler&&(27==e.keyCode?lbox.closeLightBox():null==lbox.lbm.fn&&(37==e.keyCode?lbox.changeSlide(0,!0):39==e.keyCode&&lbox.changeSlide(0,!1)))},lbox.addEvent(document,"keyup",lbox.keyboardHandler)}})},scrollSlide:function(e){e=e||0,this.lbm.style.transform=e?"translateX(calc("+(-100*this.currentSlide-100)+"vw + "+e+"px))":"translateX("+(-100*this.currentSlide-100)+"vw)"},changeSlide:function(e,t){this.currentSlide=this.currentSlide+(t?-1:1);var i=this.lbm;i.style.transition="transform "+(!e||e>this.slideTime?this.slideTime:e)+"s "+(e?"ease-out":"ease-in-out"),this.sc=!0,this.it=this.sa=0,this.scrollSlide(),this.addTransitionEndEvent(i,function(e,i){lbox.removeTransitionEndEvent(e),e.style.transition="",t&&-1==lbox.currentSlide?lbox.currentSlide=lbox.slides.length-1:t||lbox.currentSlide!=lbox.slides.length||(lbox.currentSlide=0),lbox.scrollSlide()})},addEvent:function(e,t,i,l){return null!=e.addEventListener?e.addEventListener(t,i,void 0!==l&&{passive:l}):null!=e.attachEvent?e.attachEvent("on"+t,i):e[t]=i},removeEvent:function(e,t,i){return null!=e.removeEventListener?e.removeEventListener(t,i):null!=e.detachEvent?e.detachEvent("on"+t,i):e[t]=null},addTransitionEndEvent:function(e,t){var i=function(e,t){return function(i){t(e,i)}}(e,t);this.addEvent(e,"transitionend",i),e.fn=i},removeTransitionEndEvent:function(e){e.style.transition="",this.removeEvent(e,"transitionend",e.fn),e.fn=null},addSwipeHandler:function(){var e=function(e){var t=function(e,t){var i=lbox.ts;lbox.ts=void 0;var l=lbox.now();if(lbox.sa>e)return lbox.changeSlide((l-lbox.it)/300,!0),!0;if(lbox.sa<-e)return lbox.changeSlide((l-lbox.it)/300),!0;if(t){if(lbox.scrollSlide(),l-lbox.it<300){var o=lbox.lbm.childNodes[lbox.currentSlide+1].childNodes[0],n=o.getBoundingClientRect();i.x>=n.left&&i.x<=n.right&&i.y>=n.top&&i.y<=n.bottom?lbox.play(o):lbox.closeLightBox()}lbox.it=lbox.sa=0}return!1};if("IFRAME"!=e.target.tagName){if("wheel"==e.type&&void 0===lbox.ts){var i=e.deltaX;0!=lbox.st&&clearTimeout(lbox.st),lbox.st=setTimeout(function(){lbox.sc&&(lbox.sc=!1),lbox.st=lbox.it=lbox.sa=lbox.dx=0,lbox.scrollSlide()},100),lbox.sc&&(lbox.dx>0&&lbox.dx<i/2||lbox.dx<0&&lbox.dx>i/2)&&(lbox.sc=!1,lbox.it=0),null!=lbox.lbm.fn||lbox.sc||(lbox.it||(lbox.it=lbox.now()),lbox.scrollSlide(lbox.sa-=i),addTimeout=!t(250,!1)),lbox.dx=i}else if(null!=lbox.lbm.fn||"touchstart"!=e.type&&(lbox.isMobile||"mousedown"!=e.type||0!=e.button)){if(void 0!==lbox.ts)if("touchcancel"==e.type||!lbox.isMobile&&"mouseleave"==e.type)lbox.ts=void 0,lbox.sa=0,lbox.scrollSlide();else if("touchmove"==e.type||!lbox.isMobile&&"mousemove"==e.type&&0==e.button){l=lbox.z();lbox.scrollSlide(lbox.sa=(void 0!==e.touches?e.touches[0].clientX/l:e.clientX/l)-lbox.ts.x)}else("touchend"==e.type||!lbox.isMobile&&"mouseup"==e.type&&0==e.button)&&t(50,!0)}else{lbox.isMobile="touchstart"==e.type;var l=lbox.z();lbox.ts=void 0!==e.touches?{x:e.touches[0].clientX/l,y:e.touches[0].clientY/l}:{x:e.clientX/l,y:e.clientY/l},lbox.sa=0,lbox.it=lbox.now()}e.stopImmediatePropagation(),"wheel"==e.type&&e.preventDefault()}},t=this.lbw;this.sa=0,t.swipeHandler=e,["touchstart","touchmove","touchend","touchcancel","mousedown","mousemove","mouseup","mouseleave"].forEach(function(i){lbox.addEvent(t,i,e,!0)}),this.addEvent(t,"wheel",e)},play:function(e){var t=e.querySelector("iframe");if("youtube"==e.type)if(null==e.player){e.player=new YT.Player(t,{events:{onReady:function(e){e.target.playVideo()}}})}else switch(e.player.getPlayerState()){case 0:case 5:e.player.playVideo();break;case 1:e.player.stopVideo()}else if("vimeo"==e.type)null==e.player&&(e.player=new Vimeo.Player(t)),e.player.getPaused().then(function(t){t?e.player.play():e.player.pause()});else if("movie"==e.type){if(null==e.player){var i=e.getElementsByTagName("VIDEO")[0];e.children[0].innerHTML=i.outerHTML,e.player=new Plyr(e.getElementsByTagName("VIDEO")[0])}e.player.paused?e.player.play():e.player.pause()}},addClass:function(e,t){var i=e.classList;null!=i?i.add(t):e.className+=" "+t},removeClass:function(e,t){if(null!=(i=e.classList))i.remove(t);else{var i,l=(i=e.className.split(" ")).indexOf(t);l>=0&&(i.splice(l,1),e.className=i.join(" "))}},z:function(){var e=parseFloat(window.getComputedStyle(document.body).getPropertyValue("zoom"));return e||1},updateAlign:function(e){if(this.isIOS){var t=this.z(),i=document.body.style,l=i.cssText,o=l.indexOf("margin-top"),n=l.indexOf("position");if(o>=0&&n>=0&&(n=l.indexOf(";",n+8))>=0){var a=-parseInt(i.marginTop)*t;l=l.substring(0,o)+l.substring(n+1),i.cssText=l,window.scrollTo(0,a)}e||(l+="margin-top:-"+(window.scrollY/t).toFixed(3)+"px;width:calc(100% - var(--sw));position:fixed;",i.cssText+=l)}},init:function(){var e=document.createElement("style");e.innerHTML=".ggs .plyr__controls{display:none}.ggso{z-index:2147483646;cursor:pointer}.lbb{margin-left:var(--sw);overflow: hidden}.lb::-webkit-scrollbar{display:none}.lb{margin-left:calc(0px - var(--sw));width:100vw;height:100%;position:fixed;top:0;z-index:2147483647;overflow:hidden;scrollbar-width:none;-ms-overflow-style:none}.lb::before{content:'';width:100%;height:100%;position:fixed;top:0;background-color:var(--lbbk);opacity:var(--lbo);transition:opacity var(--lbot)}.lbm{display:inline-block;position:absolute;width:100vw;height:100%;z-index:1}.lbc{display:inline-block;position:relative;box-sizing:border-box;width:100vw;height:100%;text-align:center;vertical-align:middle;padding-left:calc(var(--lbas) * 2 + var(--lbhp));padding-right:calc(var(--lbas) * 2 + var(--lbhp));padding-top:var(--lbvp);padding-bottom:var(--lbvp)}.lbs{top:0;margin-top:0;margin-left:0;clip-path:content-box;position:absolute !important}.lbw{position:fixed;width:100%;height:100%;z-index:2;pointer-events:all}.lbbc{position:fixed;width:calc(var(--lbas) * 2);height:100%;top: 0;z-index:3;pointer-events:none}.lbbt{position:absolute;cursor:pointer;top:50%;left:50%;transform:translate3d(-50%,-50%,0);width:var(--lbas);height:var(--lbas);color:var(--lbac);background-color:var(--lbabkc);opacity:var(--lbbto);box-sizing:border-box;padding:var(--lbap);border-radius:var(--lbar);border:var(--lbab) var(--lbabc) solid;transition:opacity var(--lbot), color 0.25s, background-color 0.25s, border-color 0.25s}.lbbt:hover{color:var(--lbahc);background-color:var(--lbahbkc);border-color:var(--lbahbc)}.lbbt:active{color:var(--lbaac);background-color:var(--lbaabkc);border-color:var(--lbaabc)}.lbbt svg{pointer-events:auto;width:100%;height:100%}",document.body.insertBefore(e,document.body.childNodes[0]);for(var t=document.getElementsByClassName("ggs"),i=0;i<t.length;i++){var l=t[i],o=l.getAttribute("data-st"),n=l.getElementsByClassName("ggse")[0];if(n){var a=l.getAttribute("data-rt"),r=parseInt(l.getAttribute("data-sm")),s=n.getBoundingClientRect(),d=s.width/s.height;if(a||(a=d),n.style.minWidth=n.style.minHeight="0",n.style.overflow="hidden","youtube"==o)"DIV"!=(b=n.children[0]).tagName&&(b=n.children[1]),b.children[0].style.position="absolute",b.style.height="auto",b.style.position="relative",r?(d>a&&(n.style.width=s.height*a+"px"),b.style.paddingTop=(100/a).toFixed(1)+"%"):(b.style.paddingTop=(100/d).toFixed(1)+"%",n.setAttribute("data-pt",(100/a).toFixed(1)+"%")),b.style.top="50%",b.style.transform="translateY(-50%)";else if("movie"==o){var b;(b=n.children[0]).style.position="relative",b.style.top="50%",b.style.left="50%",b.style.transform="translate(-50%, -50%)",b.style.display="grid"}var c=n.querySelector("iframe");null!=c&&("youtube"==o?c.style.position="absolute":r&&(c.style.width=c.style.height="100%"),c.offsetWidth)}}}};lbox.init();
