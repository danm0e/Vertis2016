// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);


/*!
 * multiscroll.js 0.1.7 Beta
 * https://github.com/alvarotrigo/multiscroll.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($, window, document, Math, undefined) {

    $.fn.multiscroll = function(options) {
        var MS = $.fn.multiscroll;

        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            'verticalCentered' : true,
            'scrollingSpeed': 700,
            'easing': 'easeInQuart',
            'menu': false,
            'sectionsColor': [],
            'anchors':[],
            'navigation': false,
            'navigationPosition': 'right',
            'navigationColor': '#000',
            'navigationTooltips': [],
            'loopBottom': false,
            'loopTop': false,
            'css3': false,
            'paddingTop': 0,
            'paddingBottom': 0,
            'fixedElements': null,
            'normalScrollElements': null,
            'keyboardScrolling': true,
            'touchSensitivity': 5,

            // Custom selectors
            'sectionSelector': '.ms-section',
            'leftSelector': '.ms-left',
            'rightSelector': '.ms-right',

            //events
            'afterLoad': null,
            'onLeave': null,
            'afterRender': null,
            'afterResize': null
        }, options);

        //Defines the delay to take place before being able to scroll to the next section
        //BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and
        //Apple devices (laptops, mouses...)
        var scrollDelay = 600;

        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

        // adding class namef for right and left blocks
        if (options.rightSelector !== '.ms-right') {
            $(options.rightSelector).addClass('ms-right');
        }

        if (options.leftSelector !== '.ms-left') {
            $(options.leftSelector).addClass('ms-left');
        }

        var numberSections = $('.ms-left').find('.ms-section').length;
        var isMoving = false;
        var nav;
        var windowHeight = $(window).height();


        addMouseWheelHandler();
        addTouchHandler();

        //if css3 is not supported, it will use jQuery animations
        if(options.css3){
            options.css3 = support3d();
        }

        $('html, body').css({
            'overflow' : 'hidden',
            'height' : '100%'
        });

        //adding class names to each sections
        if (options.sectionSelector !== '.ms-section') {
            $(options.sectionSelector).each(function(){
                $(this).addClass('ms-section');
            });
        }

        //creating the navigation dots
        if (options.navigation) {
            $('body').append('<div id="multiscroll-nav"><ul></ul></div>');
            nav = $('#multiscroll-nav');

            nav.css('color', options.navigationColor);
            nav.addClass(options.navigationPosition);
        }

        $('.ms-right, .ms-left').css({
            'width': '50%',
            'position': 'absolute',
            'height': '100%',
            '-ms-touch-action': 'none'
        });

        $('.ms-right').css({
            'right': '1px', //http://stackoverflow.com/questions/23675457/chrome-and-opera-creating-small-padding-when-using-displaytable
            'top': '0',
            '-ms-touch-action': 'none',
            'touch-action': 'none'
        });

        $('.ms-left').css({
            'left': '0',
            'top': '0',
            '-ms-touch-action': 'none',
            'touch-action': 'none'
        });


        $('.ms-left .ms-section, .ms-right .ms-section').each(function(){
            var sectionIndex = $(this).index();

            if(options.paddingTop || options.paddingBottom){
                $(this).css('padding', options.paddingTop  + ' 0 ' + options.paddingBottom + ' 0');
            }

            if (typeof options.sectionsColor[sectionIndex] !==  'undefined') {
                $(this).css('background-color', options.sectionsColor[sectionIndex]);
            }

            if (typeof options.anchors[sectionIndex] !== 'undefined') {
                $(this).attr('data-anchor', options.anchors[sectionIndex]);
            }

            if(options.verticalCentered){
                addTableClass($(this));
            }

            //only for the left panel
            if($(this).closest('.ms-left').length && options.navigation) {
                var link = '';
                if(options.anchors.length){
                    link = options.anchors[sectionIndex];
                }
                var tooltip = options.navigationTooltips[sectionIndex];
                if(typeof tooltip === 'undefined'){
                    tooltip = '';
                }
                if (options.navigation) {
                    nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
                }
            }
        });

        //inverting the right panel
        $('.ms-right').html( $('.ms-right').find('.ms-section').get().reverse());

        $('.ms-left .ms-section, .ms-right .ms-section').each(function(){
            var sectionIndex = $(this).index();

            $(this).css({
                'height': '100%'
            });


            if(!sectionIndex && options.navigation ){
                //activating the navigation bullet
                nav.find('li').eq(sectionIndex).find('a').addClass('active');
            }
        }).promise().done(function(){

            //if no active section is defined, the 1st one will be the default one
            if(!$('.ms-left .ms-section.active').length){
                $('.ms-right').find('.ms-section').last().addClass('active');
                $('.ms-left').find('.ms-section').first().addClass('active');
            }

            //vertical centered of the navigation + first bullet active
            if(options.navigation){
                nav.css('margin-top', '-' + (nav.height()/2) + 'px');
            }
            $.isFunction( options.afterRender ) && options.afterRender.call( this);

            //scrolling to the defined active section and adjusting right and left panels
            silentScroll();

            //setting the class for the body element
            setBodyClass();

            $(window).on('load', function() {
                scrollToAnchor();
            });
        });


        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        $(window).on('hashchange', hashChangeHandler);

        function hashChangeHandler(){
            var value =  window.location.hash.replace('#', '');
            var sectionAnchor = value;

            if(sectionAnchor.length){
                var section = $('.ms-left').find('[data-anchor="'+sectionAnchor+'"]');

                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' );

                if (isFirstScrollMove || sectionAnchor !== lastScrolledDestiny){
                    scrollPage(section);
                }
            }
        };


        /**
        * Sliding with arrow keys, both, vertical and horizontal
        */
        $(document).keydown(keydownHandler);


        var keydownId;
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = $(document.activeElement);

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                options.keyboardScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        /**
         * Sliding with arrow keys, both, vertical and horizontal
         */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            switch (e.which) {
                //up
                case 38:
                case 33:
                    MS.moveSectionUp();
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed){
                        MS.moveSectionUp();
                        break;
                    }
                case 40:
                case 34:
                    MS.moveSectionDown();
                    break;

                //Home
                case 36:
                    MS.moveTo(1);
                    break;

                //End
                case 35:
                    MS.moveTo( $('.ms-left .ms-section').length);
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
         * Disabling any action when pressing of the mouse wheel (Chrome, IE, Opera, Safari)
         */
        $(document).mousedown(function(e) {
            if(e.button == 1){
                e.preventDefault();
                return false;
            }
        });

        //navigation action
        $(document).on('click', '#multiscroll-nav a', function(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($('.ms-left .ms-section').eq(index));
        });

        //navigation tooltips
        $(document).on({
            mouseenter: function(){
                var tooltip = $(this).data('tooltip');
                $('<div class="multiscroll-tooltip ' + options.navigationPosition +'">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
            },
            mouseleave: function(){
                $(this).find('.multiscroll-tooltip').fadeOut(200, function() {
                    $(this).remove();
                });
            }
        }, '#multiscroll-nav li');


        if(options.normalScrollElements){
            $(document).on('mouseenter', options.normalScrollElements, function () {
                MS.setMouseWheelScrolling(false);
            });

            $(document).on('mouseleave', options.normalScrollElements, function(){
                MS.setMouseWheelScrolling(true);
            });
        }


        //when resizing the site, we adjust the heights of the sections
        $(window).on('resize', doneResizing);

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function doneResizing() {
            windowHeight = $(window).height();
            $('.ms-tableCell').each(function() {
                $(this).css({ height: getTableHeight($(this).parent()) });
            });
            silentScroll();
            $.isFunction( options.afterResize ) && options.afterResize.call( this);
        }

        function silentScroll(){
            //moving the right section to the bottom
            if(options.css3){
                transformContainer($('.ms-left'), 'translate3d(0px, -' + $('.ms-left').find('.ms-section.active').position().top + 'px, 0px)', false);
                transformContainer($('.ms-right'), 'translate3d(0px, -' + $('.ms-right').find('.ms-section.active').position().top + 'px, 0px)', false);
            }else{
                $('.ms-left').css('top', -$('.ms-left').find('.ms-section.active').position().top );
                $('.ms-right').css('top', -$('.ms-right').find('.ms-section.active').position().top );
            }
        }

        MS.moveSectionUp = function(){
            var prev = $('.ms-left .ms-section.active').prev('.ms-section');

            if(!prev.length && options.loopTop){
                prev = $('.ms-left .ms-section').last();
            }

            if (prev.length) {
                scrollPage(prev);
            }
        };

        MS.moveSectionDown = function (){
            var next = $('.ms-left .ms-section.active').next('.ms-section');

            if(!next.length && options.loopBottom ){
                next = $('.ms-left .ms-section').first();
            }

            if(next.length){
                scrollPage(next);
            }
        };

        MS.moveTo = function (section){
            var destiny = '';

            if(isNaN(section)){
                destiny = $('.ms-left [data-anchor="'+section+'"]');
            }else{
                destiny = $('.ms-left .ms-section').eq( (section -1) );
            }

            scrollPage(destiny);
        };

        function scrollPage(leftDestination){
            var leftDestinationIndex = leftDestination.index();
            var rightDestination = $('.ms-right').find('.ms-section').eq( numberSections -1 - leftDestinationIndex);
            var rightDestinationIndex = numberSections - 1 - leftDestinationIndex;
            var anchorLink  = leftDestination.data('anchor');
            var activeSection = $('.ms-left .ms-section.active');
            var leavingSection = activeSection.index() + 1;
            var yMovement = getYmovement(leftDestination);

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            isMoving = true;

            var topPos = {
                'left' : leftDestination.position().top,
                'right': rightDestination.position().top
            };

            rightDestination.addClass('active').siblings().removeClass('active');
            leftDestination.addClass('active').siblings().removeClass('active');

            setURLHash(anchorLink);

            // Use CSS3 translate functionality or...
            if (options.css3){
                //callback (onLeave)
                $.isFunction(options.onLeave) && options.onLeave.call(this, leavingSection, (leftDestinationIndex + 1), yMovement);

                var translate3dLeft = 'translate3d(0px, -' + topPos['left'] + 'px, 0px)';
                var translate3dRight = 'translate3d(0px, -' + topPos['right'] + 'px, 0px)';

                transformContainer($('.ms-left'), translate3dLeft, true);
                transformContainer($('.ms-right'), translate3dRight, true);

                setTimeout(function () {
                    //callback (afterLoad)
                    $.isFunction(options.afterLoad) && options.afterLoad.call(this, anchorLink, (leftDestinationIndex + 1));

                    setTimeout(function () {
                        isMoving = false;
                    }, scrollDelay);
                }, options.scrollingSpeed);
            }else{
                //callback (onLeave)
                $.isFunction(options.onLeave) && options.onLeave.call(this, leavingSection, (leftDestinationIndex + 1), yMovement);

                $('.ms-left').animate({
                    'top': -topPos['left']
                }, options.scrollingSpeed, options.easing, function(){
                    $.isFunction(options.afterLoad) && options.afterLoad.call(this, anchorLink, (leftDestinationIndex + 1));

                    setTimeout(function () {
                        isMoving = false;
                    }, scrollDelay);
                });

                $('.ms-right').animate({
                    'top': -topPos['right']
                }, options.scrollingSpeed, options.easing);
            }

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = anchorLink;

            activateMenuElement(anchorLink);
            activateNavDots(anchorLink, leftDestinationIndex);
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and tackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and tackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        */
        function addMouseWheelHandler(){
            if (document.addEventListener) {
                document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.addEventListener("wheel", MouseWheelHandler, false); //Firefox
            } else {
                document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        function MouseWheelHandler(e) {
            // cross-browser wheel delta
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1,
                    (e.wheelDelta || -e.deltaY || -e.detail)));

            if (!isMoving) { //if theres any #

                //scrolling down?
                if (delta < 0) {
                    MS.moveSectionDown();
                }

                //scrolling up?
                else {
                    MS.moveSectionUp();
                }
            }

            return false;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(container, translate3d, animated){
            container.toggleClass('ms-easing', animated);

            container.css(getTransforms(translate3d));
        }


        /**
        * Returns the transform styles for all browsers
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $('#multiscroll-nav').find('.active').removeClass('active');
                if(name){
                    $('#multiscroll-nav').find('a[href="#' + name + '"]').addClass('active');
                }else{
                    $('#multiscroll-nav').find('li').eq(sectionIndex).find('a').addClass('active');
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find('.active').removeClass('active');
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
            }
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $('.ms-left .ms-section.active').index();
            var toIndex = destiny.index();

            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }


        /**
        * Sets the URL hash for a section with slides
        */
        function setURLHash(anchorLink){
            if(options.anchors.length){
                location.hash = anchorLink;
            }

            setBodyClass();
        }

         /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $('.ms-left .ms-section.active');
            var sectionAnchor = section.data('anchor');
            var sectionIndex = section.index();

            var text = String(sectionIndex);

            if(options.anchors.length){
                text = sectionAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + 'ms-viewing' + '-[^\\s]+\\b', "g");
            $('body')[0].className = $('body')[0].className.replace(classRe, '');

            //adding the current anchor
            $('body').addClass('ms-viewing-' + text);
        }


        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = "translate3d(1px,1px,1px)";
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
        }

        /**
        * Wraps an element in order to center it vertically by using a class style.
        */
        function addTableClass(element){
            element.addClass('ms-table').wrapInner('<div class="ms-tableCell" style="height: ' + getTableHeight(element) + 'px" />');
        }

        /**
        * Gets the height of the section after removing the paddings.
        */
        function getTableHeight(section){
            var sectionHeight = windowHeight;

            if(options.paddingTop || options.paddingBottom){
                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowHeight - paddings);
            }

            return sectionHeight;
        }


        /**
        * Scrolls the page to the existent anchor in the URL
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var sectionAnchor =  window.location.hash.replace('#', '');
            var section = $('.ms-left .ms-section[data-anchor="'+sectionAnchor+'"]');

            if(sectionAnchor.length){  //if theres any #
                scrollPage(section);
            }
        }

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        MS.setKeyboardScrolling = function (value){
            options.keyboardScrolling = value;
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        MS.setMouseWheelScrolling = function (value){
            if(value){
                addMouseWheelHandler();
            }else{
                removeMouseWheelHandler();
            }
        };

        /**
        * Defines the scrolling speed
        */
        MS.setScrollingSpeed = function(value){
            options.scrollingSpeed = value;
        };



        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;

            if(isReallyTouch(e)){
                //preventing the easing on iOS devices
                event.preventDefault();

                var activeSection = $('.ms-left .ms-section.active');

                if (!isMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);
                    touchEndY = touchEvents['y'];
                    touchEndX = touchEvents['x'];


                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > ($(window).height() / 100 * options.touchSensitivity)) {

                        if (touchStartY > touchEndY) {
                            MS.moveSectionDown();

                        } else if (touchEndY > touchStartY) {
                            MS.moveSectionUp();
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }


        /**
        * Handler to get he coordinates of the starting touch
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents['y'];
                touchStartX = touchEvents['x'];
            }
        }


        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouch){
                //Microsoft pointers
                MSPointer = getMSPointer();

                $(document).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
                $(document).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouch){
                //Microsoft pointers
                MSPointer = getMSPointer();

                $(document).off('touchstart ' + MSPointer.down);
                $(document).off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11
            if(window.PointerEvent){
                pointer = { down: "pointerdown", move: "pointermove"};
            }

            //IE < 11
            else{
                pointer = { down: "MSPointerDown", move: "MSPointerMove"};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e)){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Destroy multiscroll.js plugin's events
        */
        MS.destroy = function() {
            MS.setKeyboardScrolling(false);
            MS.setMouseWheelScrolling(false);

            $(window)
                .off('hashchange', hashChangeHandler)
                .off('resize', doneResizing);

            $(document)
                .off('mouseenter', '#multiscroll-nav li')
                .off('mouseleave', '#multiscroll-nav li')
                .off('click', '#multiscroll-nav a');
        };

        /**
        * Build multiscroll.js plugin's events after destroy
        */
        MS.build = function() {
            MS.setKeyboardScrolling(true);
            MS.setMouseWheelScrolling(true);

            $(window)
                .on('hashchange', hashChangeHandler)
                .on('resize', doneResizing);

            $(document)
                .on('mouseenter', '#multiscroll-nav li')
                .on('mouseleave', '#multiscroll-nav li')
                .on('click', '#multiscroll-nav a');
        };

    };
})(jQuery, window, document, Math);


/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */

;(function ( $, window, document, undefined ) {
  'use strict';

  /** Abort if browser does not support pushState */
  if(!window.history.pushState) {
    // setup a dummy fn, but don't intercept on link clicks
    $.fn.smoothState = function() { return this; };
    $.fn.smoothState.options = {};
    return;
  }

  /** Abort if smoothState is already present **/
  if($.fn.smoothState) { return; }

  var
    /** Used later to scroll page to the top */
    $body = $('html, body'),

    /** Used in debug mode to console out useful warnings */
    consl = window.console,

    /** Plugin default options, will be exposed as $fn.smoothState.options */
    defaults = {

      /** If set to true, smoothState will log useful debug information instead of aborting */
      debug: false,

      /** jQuery selector to specify which anchors smoothState should bind to */
      anchors: 'a',

      /** Regex to specify which href smoothState should load. If empty, every href will be permitted. */
      hrefRegex: '',

      /** jQuery selector to specify which forms smoothState should bind to */
      forms: 'form',

      /** If set to true, smoothState will store form responses in the cache. */
      allowFormCaching: false,

      /** Minimum number of milliseconds between click/submit events. Events ignored beyond this rate are ignored. */
      repeatDelay: 500,

      /** A selector that defines what should be ignored by smoothState */
      blacklist: '.no-smoothState',

      /** If set to true, smoothState will prefetch a link's contents on hover */
      prefetch: false,

      /** The name of the event we will listen to from anchors if we're prefetching */
      prefetchOn: 'mouseover touchstart',

      /** jQuery selector to specify elements which should not be prefetched */
      prefetchBlacklist: '.no-prefetch',

      /** The number of pages smoothState will try to store in memory */
      cacheLength: 0,

      /** Class that will be applied to the body while the page is loading */
      loadingClass: 'is-loading',

      /** Scroll to top after onStart and scroll to hash after onReady */
      scroll: true,

      /**
       * A function that can be used to alter the ajax request settings before it is called
       * @param  {Object} request jQuery.ajax settings object that will be used to make the request
       * @return {Object}         Altered request object
       */
      alterRequest: function (request) {
        return request;
      },

      /** Run before a page load has been activated */
      onBefore: function ($currentTarget, $container) {},

      /** Run when a page load has been activated */
      onStart: {
        duration: 0,
        render: function ($container) {}
      },

      /** Run if the page request is still pending and onStart has finished animating */
      onProgress: {
        duration: 0,
        render: function ($container) {}
      },

      /** Run when requested content is ready to be injected into the page  */
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          $container.html($newContent);
        }
      },

      /** Run when content has been injected and all animations are complete  */
      onAfter: function($container, $newContent) {}
    },

    /** Utility functions that are decoupled from smoothState */
    utility = {

      /**
       * Checks to see if the url is external
       * @param   {string}    url - url being evaluated
       * @see     http://stackoverflow.com/questions/6238351/fastest-way-to-detect-external-urls
       *
       */
      isExternal: function (url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
          return true;
        }
        if (typeof match[2] === 'string' &&
          match[2].length > 0 &&
          match[2].replace(new RegExp(':(' + {'http:': 80, 'https:': 443}[window.location.protocol] +
            ')?$'), '') !== window.location.host) {
          return true;
        }
        return false;
      },

      /**
       * Strips the hash from a url and returns the new href
       * @param   {string}    href - url being evaluated
       *
       */
      stripHash: function(href) {
        return href.replace(/#.*/, '');
      },

      /**
       * Checks to see if the url is an internal hash
       * @param   {string}    href - url being evaluated
       * @param   {string}    prev - previous url (optional)
       *
       */
      isHash: function (href, prev) {
        prev = prev || window.location.href;

        var hasHash = (href.indexOf('#') > -1) ? true : false,
            samePath = (utility.stripHash(href) === utility.stripHash(prev)) ? true : false;

        return (hasHash && samePath);
      },

      /**
       * Translates a url string into a $.ajax settings obj
       * @param  {Object|String} request url or settings obj
       * @return {Object}        settings object
       */
      translate: function(request) {
          var defaults = {
            dataType: 'html',
            type: 'GET'
          };
          if(typeof request === 'string') {
            request = $.extend({}, defaults, { url: request });
          } else {
            request = $.extend({}, defaults, request);
          }
          return request;
      },

      /**
       * Checks to see if we should be loading this URL
       * @param   {string}    url - url being evaluated
       * @param   {string}    blacklist - jquery selector
       *
       */
      shouldLoadAnchor: function ($anchor, blacklist, hrefRegex) {
        var href = $anchor.prop('href');
        // URL will only be loaded if it's not an external link, hash, or
        // blacklisted
        return (
            !utility.isExternal(href) &&
            !utility.isHash(href) &&
            !$anchor.is(blacklist) &&
            !$anchor.prop('target')) &&
            (
              typeof hrefRegex === undefined ||
              hrefRegex === '' ||
              $anchor.prop('href').search(hrefRegex) !== -1
            );
      },

      /**
       * Resets an object if it has too many properties
       *
       * This is used to clear the 'cache' object that stores
       * all of the html. This would prevent the client from
       * running out of memory and allow the user to hit the
       * server for a fresh copy of the content.
       *
       * @param   {object}    obj
       * @param   {number}    cap
       *
       */
      clearIfOverCapacity: function (cache, cap) {
        // Polyfill Object.keys if it doesn't exist
        if (!Object.keys) {
          Object.keys = function (obj) {
            var keys = [],
              k;
            for (k in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, k)) {
                keys.push(k);
              }
            }
            return keys;
          };
        }

        if (Object.keys(cache).length > cap) {
          cache = {};
        }

        return cache;
      },

      /**
       * Stores a document fragment into an object
       * @param   {object}    object - object where it will be stored
       * @param   {string}    url - name of the entry
       * @param   {string|document}    doc - entire html
       * @param   {string}    id - the id of the fragment
       *
       */
      storePageIn: function (object, url, doc, id) {
        var $html = $( '<html></html>' ).append( $(doc) );
        object[url] = { // Content is indexed by the url
          status: 'loaded',
          // Stores the title of the page, .first() prevents getting svg titles
          title: $html.find('title').first().text(),
          html: $html.find('#' + id), // Stores the contents of the page
          doc: doc, // Stores the whole page document
        };
        return object;
      },

      /**
       * Triggers an 'allanimationend' event when all animations are complete
       * @param   {object}    $element - jQuery object that should trigger event
       * @param   {string}    resetOn - which other events to trigger allanimationend on
       *
       */
      triggerAllAnimationEndEvent: function ($element, resetOn) {

        resetOn = ' ' + resetOn || '';

        var animationCount = 0,
          animationstart = 'animationstart webkitAnimationStart oanimationstart MSAnimationStart',
          animationend = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
          eventname = 'allanimationend',
          onAnimationStart = function (e) {
            if ($(e.delegateTarget).is($element)) {
              e.stopPropagation();
              animationCount++;
            }
          },
          onAnimationEnd = function (e) {
            if ($(e.delegateTarget).is($element)) {
              e.stopPropagation();
              animationCount--;
              if(animationCount === 0) {
                $element.trigger(eventname);
              }
            }
          };

        $element.on(animationstart, onAnimationStart);
        $element.on(animationend, onAnimationEnd);

        $element.on('allanimationend' + resetOn, function(){
          animationCount = 0;
          utility.redraw($element);
        });
      },

      /** Forces browser to redraw elements */
      redraw: function ($element) {
        $element.height();
      }
    },

    /** Handles the popstate event, like when the user hits 'back' */
    onPopState = function ( e ) {
      if(e.state !== null) {
        var url = window.location.href,
          $page = $('#' + e.state.id),
          page = $page.data('smoothState');

        if(page.href !== url && !utility.isHash(url, page.href)) {
          page.load(url, false);
        }
      }
    },

    /** Constructor function */
    Smoothstate = function ( element, options ) {
      var
        /** Container element smoothState is run on */
        $container = $(element),

        /** ID of the main container */
        elementId = $container.prop('id'),

        /** If a hash was clicked, we'll store it here so we
         *  can scroll to it once the new page has been fully
         *  loaded.
         */
        targetHash = null,

        /** Used to prevent fetching while we transition so
         *  that we don't mistakenly override a cache entry
         *  we need.
         */
        isTransitioning = false,

        /** Variable that stores pages after they are requested */
        cache = {},

        /** Url of the content that is currently displayed */
        currentHref = window.location.href,

        /**
         * Clears a given page from the cache, if no url is provided
         * it will clear the entire cache.
         * @param  {String} url entry that is to be deleted.
         */
        clear = function(url) {
          url = url || false;
          if(url && cache.hasOwnProperty(url)) {
            delete cache[url];
          } else {
            cache = {};
          }
          $container.data('smoothState').cache = cache;
        },

        /**
         * Fetches the contents of a url and stores it in the 'cache' variable
         * @param  {String|Object}   request  url or request settings object
         * @param  {Function} callback function that will run as soon as it finishes
         */
        fetch = function (request, callback) {

          // Sets a default in case a callback is not defined
          callback = callback || $.noop;

          // Allows us to accept a url string or object as the ajax settings
          var settings = utility.translate(request);

          // Check the length of the cache and clear it if needed
          cache = utility.clearIfOverCapacity(cache, options.cacheLength);

          // Don't prefetch if we have the content already or if it's a form
          if(cache.hasOwnProperty(settings.url) && typeof settings.data === 'undefined') {
            return;
          }

          // Let other parts of the code know we're working on getting the content
          cache[settings.url] = { status: 'fetching' };

          // Make the ajax request
          var ajaxRequest = $.ajax(settings);

          // Store contents in cache variable if successful
          ajaxRequest.done(function (html) {
            utility.storePageIn(cache, settings.url, html, elementId);
            $container.data('smoothState').cache = cache;
          });

          // Mark as error to be acted on later
          ajaxRequest.fail(function () {
            cache[settings.url].status = 'error';
          });

          // Call fetch callback
          if(callback) {
            ajaxRequest.always(callback);
          }
        },

        repositionWindow = function(){
          // Scroll to a hash anchor on destination page
          if(targetHash) {
            var $targetHashEl = $(targetHash, $container);
            if($targetHashEl.length){
              var newPosition = $targetHashEl.offset().top;
              $body.scrollTop(newPosition);
            }
            targetHash = null;
          }
        },

        /** Updates the contents from cache[url] */
        updateContent = function (url) {
          // If the content has been requested and is done:
          var containerId = '#' + elementId,
              $newContent = cache[url] ? $(cache[url].html.html()) : null;

          if($newContent.length) {

            // Update the title
            document.title = cache[url].title;

            // Update current url
            $container.data('smoothState').href = url;

            // Remove loading class
            if(options.loadingClass) {
              $body.removeClass(options.loadingClass);
            }

            // Call the onReady callback and set delay
            options.onReady.render($container, $newContent);

            $container.one('ss.onReadyEnd', function(){

              // Allow prefetches to be made again
              isTransitioning = false;

              // Run callback
              options.onAfter($container, $newContent);

              if (options.scroll) {
                repositionWindow();
              }

            });

            window.setTimeout(function(){
              $container.trigger('ss.onReadyEnd');
            }, options.onReady.duration);

          } else if (!$newContent && options.debug && consl) {
            // Throw warning to help debug in debug mode
            consl.warn('No element with an id of ' + containerId + ' in response from ' + url + ' in ' + cache);
          } else {
            // No content availble to update with, aborting...
            window.location = url;
          }
        },

        /**
         * Loads the contents of a url into our container
         * @param   {string}    url
         * @param   {bool}      push - used to determine if we should
         *                      add a new item into the history object
         * @param   {bool}      cacheResponse - used to determine if
         *                      we should allow the cache to forget this
         *                      page after thid load completes.
         */
        load = function (request, push, cacheResponse) {

          var settings = utility.translate(request);

          /** Makes these optional variables by setting defaults. */
          if (typeof push === 'undefined') {
            push = true;
          }
          if (typeof cacheResponse === 'undefined') {
            cacheResponse = true;
          }

          var
            /** Used to check if the onProgress function has been run */
            hasRunCallback = false,

            callbBackEnded = false,

            /** List of responses for the states of the page request */
            responses = {

              /** Page is ready, update the content */
              loaded: function () {
                var eventName = hasRunCallback ? 'ss.onProgressEnd' : 'ss.onStartEnd';

                if (!callbBackEnded || !hasRunCallback) {
                  $container.one(eventName, function(){
                    updateContent(settings.url);
                    if (!cacheResponse) {
                      clear(settings.url);
                    }
                  });
                }
                else if (callbBackEnded) {
                  updateContent(settings.url);
                }

                if (push) {
                  window.history.pushState({ id: elementId }, cache[settings.url].title, settings.url);
                }

                if (callbBackEnded && !cacheResponse) {
                  clear(settings.url);
                }
              },

              /** Loading, wait 10 ms and check again */
              fetching: function () {

                if (!hasRunCallback) {

                  hasRunCallback = true;

                  // Run the onProgress callback and set trigger
                  $container.one('ss.onStartEnd', function(){

                    // Add loading class
                    if (options.loadingClass) {
                      $body.addClass(options.loadingClass);
                    }

                    options.onProgress.render($container);

                    window.setTimeout(function (){
                      $container.trigger('ss.onProgressEnd');
                      callbBackEnded = true;
                    }, options.onProgress.duration);

                  });
                }

                window.setTimeout(function () {
                  // Might of been canceled, better check!
                  if (cache.hasOwnProperty(settings.url)){
                    responses[cache[settings.url].status]();
                  }
                }, 10);
              },

              /** Error, abort and redirect */
              error: function (){
                if(options.debug && consl) {
                  consl.log('There was an error loading: ' + settings.url);
                } else {
                  window.location = settings.url;
                }
              }
            };

          if (!cache.hasOwnProperty(settings.url)) {
            fetch(settings);
          }

          // Run the onStart callback and set trigger
          options.onStart.render($container);

          window.setTimeout(function(){
            if (options.scroll) {
              $body.scrollTop(0);
            }
            $container.trigger('ss.onStartEnd');
          }, options.onStart.duration);

          // Start checking for the status of content
          responses[cache[settings.url].status]();
        },

        /**
         * Binds to the hover event of a link, used for prefetching content
         * @param   {object}    event
         */
        hoverAnchor = function (event) {
          var request,
              $anchor = $(event.currentTarget);

          if (utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex) && !isTransitioning) {
            event.stopPropagation();
            request = utility.translate($anchor.prop('href'));
            request = options.alterRequest(request);
            fetch(request);
          }
        },

        /**
         * Binds to the click event of a link, used to show the content
         * @param   {object}    event
         */
        clickAnchor = function (event) {

          // Ctrl (or Cmd) + click must open a new tab
          var $anchor = $(event.currentTarget);
          if (!event.metaKey && !event.ctrlKey && utility.shouldLoadAnchor($anchor, options.blacklist, options.hrefRegex)) {

            // stopPropagation so that event doesn't fire on parent containers.
            event.stopPropagation();
            event.preventDefault();

            // Apply rate limiting.
            if (!isRateLimited()) {

              // Set the delay timeout until the next event is allowed.
              setRateLimitRepeatTime();

              var request = utility.translate($anchor.prop('href'));
              isTransitioning = true;
              targetHash = $anchor.prop('hash');

              // Allows modifications to the request
              request = options.alterRequest(request);

              options.onBefore($anchor, $container);

              load(request);
            }
          }
        },

        /**
         * Binds to form submissions
         * @param  {Event} event
         */
        submitForm = function (event) {
          var $form = $(event.currentTarget);

          if (!$form.is(options.blacklist)) {

            event.preventDefault();
            event.stopPropagation();

            // Apply rate limiting.
            if (!isRateLimited()) {

              // Set the delay timeout until the next event is allowed.
              setRateLimitRepeatTime();

              var request = {
                url: $form.prop('action'),
                data: $form.serialize(),
                type: $form.prop('method')
              };

              isTransitioning = true;
              request = options.alterRequest(request);

              if (request.type.toLowerCase() === 'get') {
                request.url = request.url + '?' + request.data;
              }

              // Call the onReady callback and set delay
              options.onBefore($form, $container);

              load(request, undefined, options.allowFormCaching);
            }
          }
        },

        /**
         * DigitalMachinist (Jeff Rose)
         * I figured to keep these together with this above functions since they're all related.
         * Feel free to move these somewhere more appropriate if you have such places.
         */
        rateLimitRepeatTime = 0,
        isRateLimited = function () {
          var isFirstClick = (options.repeatDelay === null);
          var isDelayOver = (parseInt(Date.now()) > rateLimitRepeatTime);
          return !(isFirstClick || isDelayOver);
        },
        setRateLimitRepeatTime = function () {
          rateLimitRepeatTime = parseInt(Date.now()) + parseInt(options.repeatDelay);
        },

        /**
         * Binds all events and inits functionality
         * @param   {object}    event
         */
        bindEventHandlers = function ($element) {

          if (options.anchors) {
            $element.on('click', options.anchors, clickAnchor);

            if (options.prefetch) {
              $element.find(options.anchors).not(options.prefetchBlacklist).on(options.prefetchOn, null, hoverAnchor);
            }
          }

          if (options.forms) {
            $element.on('submit', options.forms, submitForm);
          }
        },

        /** Restart the container's css animations */
        restartCSSAnimations = function () {
          var classes = $container.prop('class');
          $container.removeClass(classes);
          utility.redraw($container);
          $container.addClass(classes);
        };

      /** Merge defaults and global options into current configuration */
      options = $.extend( {}, $.fn.smoothState.options, options );

      /** Sets a default state */
      if(window.history.state === null) {
        window.history.replaceState({ id: elementId }, document.title, currentHref);
      }

      /** Stores the current page in cache variable */
      utility.storePageIn(cache, currentHref, document.documentElement.outerHTML, elementId);

      /** Bind all of the event handlers on the container, not anchors */
      utility.triggerAllAnimationEndEvent($container, 'ss.onStartEnd ss.onProgressEnd ss.onEndEnd');

      /** Bind all of the event handlers on the container, not anchors */
      bindEventHandlers($container);

      /** Public methods */
      return {
        href: currentHref,
        cache: cache,
        clear: clear,
        load: load,
        fetch: fetch,
        restartCSSAnimations: restartCSSAnimations
      };
    },

    /** Returns elements with smoothState attached to it */
    declaresmoothState = function ( options ) {
      return this.each(function () {
        var tagname = this.tagName.toLowerCase();
        // Checks to make sure the smoothState element has an id and isn't already bound
        if(this.id && tagname !== 'body' && tagname !== 'html' && !$.data(this, 'smoothState')) {
          // Makes public methods available via $('element').data('smoothState');
          $.data(this, 'smoothState', new Smoothstate(this, options));
        } else if (!this.id && consl) {
          // Throw warning if in debug mode
          consl.warn('Every smoothState container needs an id but the following one does not have one:', this);
        } else if ((tagname === 'body' || tagname === 'html') && consl) {
          // We dont support making th html or the body element the smoothstate container
          consl.warn('The smoothstate container cannot be the ' + this.tagName + ' tag');
        }
      });
    };

  /** Sets the popstate function */
  window.onpopstate = onPopState;

  /** Makes utility functions public for unit tests */
  $.smoothStateUtility = utility;

  /** Defines the smoothState plugin */
  $.fn.smoothState = declaresmoothState;

  /* expose the default options */
  $.fn.smoothState.options = defaults;

})(jQuery, window, document);
