(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RNiq:function(e,t,n){"use strict";n.r(t),function(e){var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("rePB"),s=n("MX0m"),c=n.n(s),l=n("q1tI"),p=n.n(l),u=n("8Kt/"),f=n.n(u),m=n("UeDS"),d=n("vcXL"),g=n.n(d),x=n("wd/R"),b=n.n(x),h=p.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=n("fu8r"),v="We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!",k="https://cacreators.com";function O(){return(O=Object(o.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="&".concat(Math.floor(1e3*Math.random())),e.next=3,g()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(t)).catch((function(e){console.log(e)}));case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent)){e.next=9;break}return e.abrupt("return",r.results);case 9:return e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(o.a)(a.a.mark((function t(){var n,r,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="&".concat(Math.floor(1e3*Math.random())),r="https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(n),console.log(e.env),r="https://shielded-plateau-06167.herokuapp.com/".concat(r),t.next=6,g()(r).catch((function(e){console.log(e)}));case 6:if(!(o=t.sent)){t.next=12;break}return t.next=10,o.json();case 10:return i=t.sent,t.abrupt("return",_(i));case 12:return t.next=14,new Promise((function(e){return setTimeout(e,3e3)}));case 14:return t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(e){return e.map((function(e){var t=e.group.localized_location.split(",")[0],n=b.a.utc(e.time).utcOffset(e.utc_offset/36e5).format();return{chapter:{city:t},url:e.link,start_date:n,title:e.name}}))}t.default=function(){var e=Object(l.useState)({events:[],loading:!0}),t=e[0],n=e[1],r=Object(l.useState)({events:[],loading:!0}),a=r[0],o=r[1];Object(l.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){n({events:e,loading:!1})}))}),[]),Object(l.useEffect)((function(){(function(){return N.apply(this,arguments)})().then((function(e){o({events:e,loading:!1})}))}),[]);return h("div",{style:{minHeight:"100%",position:"absolute",width:"100%"},className:"jsx-2920287722"},h(f.a,null,h("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0",className:"jsx-2920287722"}),h("title",{className:"jsx-2920287722"},"CA Creators",".com"),h("meta",{name:"Description",content:v.replace("<br/>"," "),className:"jsx-2920287722"}),h("meta",{property:"og:title",content:"CA Creators",className:"jsx-2920287722"}),h("meta",{property:"og:url",content:k,className:"jsx-2920287722"}),h("meta",{property:"og:image",content:"".concat(k,"/twitchsocal.gif"),className:"jsx-2920287722"}),h("meta",{property:"og:image:width",content:"800",className:"jsx-2920287722"}),h("meta",{property:"og:image:height",content:"800",className:"jsx-2920287722"}),h("meta",{property:"og:description",content:v.replace("<br/>"," "),className:"jsx-2920287722"}),h("meta",{property:"og:type",content:"website",className:"jsx-2920287722"}),h("meta",{property:"og:locale",content:"en_US",className:"jsx-2920287722"})),h("div",{className:"jsx-2920287722 hero"},h("span",{className:"jsx-2920287722 title-wrapper"},h("h1",{className:"jsx-2920287722 title"},"CA Creators")),h("p",{dangerouslySetInnerHTML:{__html:v},className:"jsx-2920287722 description"}),h("div",{className:"jsx-2920287722 row"},function(){var e=t.events.concat(a.events),n=t.loading||a.loading,r=function(e,t){return e.twitch.map(n).concat(e.meetup.map(n));function n(e){var n=t.find((function(t){return t.chapter.city===e.city}));return j(j({},e),{},{nextEvent:n||{}})}}(y,e).sort((function(e,t){return e.nextEvent.start_date?t.nextEvent.start_date?new Date(e.nextEvent.start_date)-new Date(t.nextEvent.start_date):-1:1}));return r.map((function(e,t){return h(m.a,{key:e.name,group:e,loading:n,totalCards:r.length,position:t+1})}))}())),h("div",{className:"jsx-2920287722 footer"},h("p",{className:"jsx-2920287722"},"This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.")),h(c.a,{id:"2920287722"},["html,body{height:100%;margin:0;padding:0;}",'body{background-color:#9146ff;background-image:url("/funky-lines.png");background-size:600px;font-family:"Kanit",sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}',".hero.jsx-2920287722{width:100%;color:#fff;}",'.title.jsx-2920287722{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:"Knewave",sans-serif;-webkit-animation:colorwipe-jsx-2920287722 6s infinite;animation:colorwipe-jsx-2920287722 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:2400px;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}',".title-wrapper.jsx-2920287722{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;width:270px;margin:0 auto;}",".title.jsx-2920287722,.description.jsx-2920287722{text-align:center;}",'.description.jsx-2920287722{font-size:22px;font-weight:300;font-family:"Kanit",sans-serif;}',".row.jsx-2920287722{max-width:1000px;margin:65px auto;position:relative;min-height:410px;}",".footer.jsx-2920287722{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}","@media (max-width:900px){.row.jsx-2920287722{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}","@-webkit-keyframes colorwipe-jsx-2920287722{0%{background-position:0%;}100%{background-position:100%;}}","@keyframes colorwipe-jsx-2920287722{0%{background-position:0%;}100%{background-position:100%;}}"]))}}.call(this,n("8oxB"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,4,1,3]]]);