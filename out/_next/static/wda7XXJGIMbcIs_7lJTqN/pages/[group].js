(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"20+D":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[group]",function(){return n("wiK0")}])},wiK0:function(t,e,n){"use strict";n.r(e),function(t){var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("rePB"),s=n("MX0m"),c=n.n(s),l=n("q1tI"),p=n.n(l),u=n("nOHt"),f=n("8Kt/"),m=n.n(f),d=n("UeDS"),g=n("vcXL"),x=n.n(g),b=n("wd/R"),h=n.n(b),w=p.a.createElement;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=n("fu8r"),k="We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!",O="https://cacreators.com";function N(){return(N=Object(o.a)(a.a.mark((function t(){var e,n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="&".concat(Math.floor(1e3*Math.random())),t.next=3,x()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(e)).catch((function(t){console.log(t)}));case 3:return n=t.sent,t.next=6,n.json();case 6:if(!(r=t.sent)){t.next=9;break}return t.abrupt("return",r.results);case 9:return t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=Object(o.a)(a.a.mark((function e(){var n,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="&".concat(Math.floor(1e3*Math.random())),r="https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(n),console.log(t.env),r="https://shielded-plateau-06167.herokuapp.com/".concat(r),e.next=6,x()(r).catch((function(t){console.log(t)}));case 6:if(!(o=e.sent)){e.next=12;break}return e.next=10,o.json();case 10:return i=e.sent,e.abrupt("return",E(i));case 12:return e.next=14,new Promise((function(t){return setTimeout(t,3e3)}));case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(t){return t.map((function(t){var e=t.group.localized_location.split(",")[0],n=h.a.utc(t.time).utcOffset(t.utc_offset/36e5).format();return{chapter:{city:e},url:t.link,start_date:n,title:t.name}}))}e.default=Object(u.withRouter)((function(t){var e=t.router.asPath,n=Object(l.useState)({events:[],loading:!0}),r=n[0],a=n[1],o=Object(l.useState)({events:[],loading:!0}),i=o[0],s=o[1];Object(l.useEffect)((function(){(function(){return N.apply(this,arguments)})().then((function(t){a({events:t,loading:!1})}))}),[]),Object(l.useEffect)((function(){(function(){return _.apply(this,arguments)})().then((function(t){s({events:t,loading:!1})}))}),[]);return w("div",{style:{minHeight:"100%",position:"absolute",width:"100%"},className:"jsx-2920287722"},w(m.a,null,w("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0",className:"jsx-2920287722"}),w("title",{className:"jsx-2920287722"},e,".com"),w("meta",{name:"Description",content:k.replace("<br/>"," "),className:"jsx-2920287722"}),w("meta",{property:"og:title",content:e,className:"jsx-2920287722"}),w("meta",{property:"og:url",content:O,className:"jsx-2920287722"}),w("meta",{property:"og:image",content:"".concat(O,"/twitchsocal.gif"),className:"jsx-2920287722"}),w("meta",{property:"og:image:width",content:"800",className:"jsx-2920287722"}),w("meta",{property:"og:image:height",content:"800",className:"jsx-2920287722"}),w("meta",{property:"og:description",content:k.replace("<br/>"," "),className:"jsx-2920287722"}),w("meta",{property:"og:type",content:"website",className:"jsx-2920287722"}),w("meta",{property:"og:locale",content:"en_US",className:"jsx-2920287722"})),w("div",{className:"jsx-2920287722 hero"},w("span",{className:"jsx-2920287722 title-wrapper"},w("h1",{className:"jsx-2920287722 title"},e)),w("p",{dangerouslySetInnerHTML:{__html:k},className:"jsx-2920287722 description"}),w("div",{className:"jsx-2920287722 row"},function(){var t=r.events.concat(i.events),e=r.loading||i.loading,n=function(t,e){return t.twitch.map(n).concat(t.meetup.map(n));function n(t){var n=e.find((function(e){return e.chapter.city===t.city}));return y(y({},t),{},{nextEvent:n||{}})}}(v,t).sort((function(t,e){return t.nextEvent.start_date?e.nextEvent.start_date?new Date(t.nextEvent.start_date)-new Date(e.nextEvent.start_date):-1:1}));return n.map((function(t,r){return w(d.a,{key:t.name,group:t,loading:e,totalCards:n.length,position:r+1})}))}())),w("div",{className:"jsx-2920287722 footer"},w("p",{className:"jsx-2920287722"},"This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.")),w(c.a,{id:"2920287722"},["html,body{height:100%;margin:0;padding:0;}",'body{background-color:#9146ff;background-image:url("/funky-lines.png");background-size:600px;font-family:"Kanit",sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}',".hero.jsx-2920287722{width:100%;color:#fff;}",'.title.jsx-2920287722{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:"Knewave",sans-serif;-webkit-animation:colorwipe-jsx-2920287722 6s infinite;animation:colorwipe-jsx-2920287722 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:2400px;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}',".title-wrapper.jsx-2920287722{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;width:270px;margin:0 auto;}",".title.jsx-2920287722,.description.jsx-2920287722{text-align:center;}",'.description.jsx-2920287722{font-size:22px;font-weight:300;font-family:"Kanit",sans-serif;}',".row.jsx-2920287722{max-width:1000px;margin:65px auto;position:relative;min-height:410px;}",".footer.jsx-2920287722{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}","@media (max-width:900px){.row.jsx-2920287722{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}","@-webkit-keyframes colorwipe-jsx-2920287722{0%{background-position:0%;}100%{background-position:100%;}}","@keyframes colorwipe-jsx-2920287722{0%{background-position:0%;}100%{background-position:100%;}}"]))}))}.call(this,n("8oxB"))}},[["20+D",0,2,4,1,3]]]);