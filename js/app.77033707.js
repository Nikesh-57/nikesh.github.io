(function(t){function a(a){for(var i,o,c=a[0],r=a[1],n=a[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&m.push(e[o][0]),e[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);v&&v(a);while(m.length)m.shift()();return l.push.apply(l,n||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],i=!0,o=1;o<s.length;o++){var r=s[o];0!==e[r]&&(i=!1)}i&&(l.splice(a--,1),t=c(c.s=s[0]))}return t}var i={},e={app:0},l=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3d08cb52"}[t]+".js"}function c(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var a=[],s=e[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,i){s=e[t]=[a,i]}));a.push(s[2]=i);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=o(t);var n=new Error;l=function(a){r.onerror=r.onload=null,clearTimeout(d);var s=e[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",n.name="ChunkLoadError",n.type=i,n.request=l,s[1](n)}e[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(a)},c.m=t,c.c=i,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)c.d(s,i,function(a){return t[a]}.bind(null,i));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=a,r=r.slice();for(var d=0;d<r.length;d++)a(r[d]);var v=n;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0a74":function(t,a,s){"use strict";s("5e47")},"56d7":function(t,a,s){"use strict";s.r(a);var i=s("2b0e"),e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fl"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("Navbar")],1),a("div",{staticClass:"col-lg-9"},[a("router-view")],1)])])])},l=[],o=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"conatiner-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"dashboard"},[a("div",{staticClass:"dashboard-nav"},[a("header",[a("a",{staticClass:"brand-logo",attrs:{href:"#"}},[a("span",[t._v("MY BRAND")])])]),a("nav",{staticClass:"dashboard-nav-list"},[a("a",{staticClass:"dashboard-nav-item active",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-home"}),t._v(" Home")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-hashtag"}),t._v(" Exploare ")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-bell"}),t._v(" Notification ")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-envelope"}),t._v(" Message ")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" Bookmark ")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-list"}),t._v(" List ")]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-user"}),t._v(" Profile ")]),a("div",{staticClass:"mt-1 mb-1"},[a("a",{staticClass:"buttons text-white",attrs:{href:"#myModal","data-toggle":"modal"}},[t._v("Tweet")])]),a("a",{staticClass:"dashboard-nav-item",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-power-off"}),t._v(" Logout ")])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog border-0"},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-body border-0"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[t._v("x")]),a("div",{staticClass:"row tweet"},[a("div",{staticClass:"col-lg-1"},[a("div",{staticClass:"tweet-image"},[a("img",{attrs:{src:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",alt:""}})])]),a("div",{staticClass:"col-lg-11"},[a("div",{staticClass:"tweet-post"},[a("div",{staticClass:"form-group"},[a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[a("option",[t._v("Everyone")]),a("option",[t._v("Friends")]),a("option",[t._v("Private")])])]),a("textarea",{staticStyle:{width:"410px","margin-left":"-151px"},attrs:{maxlength:"280",name:"",id:"",cols:"28",rows:"100",placeholder:"what happening?"}})])])]),a("div",{staticClass:"social-menu p-3"},[a("div",{staticClass:"text-left ml-5",staticStyle:{"margin-bottom":"-15px"}},[a("p",{staticClass:"ml-2",staticStyle:{color:"#1d9bf0","font-size":"14px"}},[a("i",{staticClass:"fa fa-globe"}),t._v(" Everyone can reply")])]),a("ul",[a("li",[a("a",[a("i",{staticClass:"fa fa-picture-o"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-video-camera"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-file-text"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-calendar"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-map-marker"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-tag"})])])]),a("div",{staticClass:"tweet-button"},[a("button",[t._v("Tweet")])])])])])])])])}],r={},n=r,d=(s("87cc"),s("2877")),v=Object(d["a"])(n,o,c,!1,null,"1a6f865c",null),m=v.exports,p={components:{Navbar:m}},f=p,u=(s("a09e"),Object(d["a"])(f,e,l,!1,null,null,null)),h=u.exports,C=s("8c4f"),g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 home-page"},[t._m(0),t._m(1),t._m(2),a("hr",{staticClass:"hr1"}),t._m(3),a("hr"),a("div",{attrs:{id:"post"}},[t._m(4),a("div",{staticClass:"content"},[t._v("WHY SO SERIOUS?")]),t._m(5),t._m(6),a("div",{staticClass:"feedback-action"},[a("div",{staticClass:"option"},[a("i",{staticClass:"fb-icon thumb-up fa fa-thumbs-up",on:{click:t.onLike}}),t._v(" "+t._s(t.counter)+" ")]),a("div",{staticClass:"option"},[a("i",{staticClass:"fb-icon fa fa-retweet",on:{click:t.onRetweet}}),t._v(" "+t._s(t.retweet)+" ")]),a("div",{staticClass:"option"},[a("i",{staticClass:"fb-icon response fa fa-comments-o",on:{click:t.onComments}}),t._v(" 122 ")]),t._m(7)]),t.comments?a("div",{staticClass:"comments"},[t._m(8),t._m(9),t._m(10)]):t._e()])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"shadow-none p-2 mb-3 bg-white home-shadow"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"searchBar"},[a("input",{attrs:{id:"searchQueryInput",type:"text",name:"searchQueryInput",placeholder:"Search",value:""}}),a("button",{attrs:{id:"searchQuerySubmit",type:"submit",name:"searchQuerySubmit"}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#666666",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])])])])]),t._m(11),a("RightSide")],1)])])},_=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"shadow p-1 mb-3 bg-white home-shadow"},[a("div",{staticClass:"row d-flex"},[a("div",{staticClass:"col-lg-8 text-left home-firstOne"},[a("h5",[t._v("Home")])]),a("div",{staticClass:"col-lg-4 text-right"},[a("div",{staticClass:"home-firsttwo"},[a("i",{staticClass:"fa fa-star-o"})])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row tweet"},[a("div",{staticClass:"col-lg-1"},[a("div",{staticClass:"tweet-image"},[a("img",{attrs:{src:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",alt:""}})])]),a("div",{staticClass:"col-lg-11"},[a("div",{staticClass:"tweet-post"},[a("div",{staticClass:"form-group"},[a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[a("option",[t._v("Everyone")]),a("option",[t._v("Friends")]),a("option",[t._v("Private")])])]),a("textarea",{attrs:{maxlength:"280",name:"",id:"",cols:"28",rows:"100",placeholder:"what happening?"}})])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"social-menu p-3"},[a("ul",[a("li",[a("a",[a("i",{staticClass:"fa fa-picture-o"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-video-camera"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-file-text"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-calendar"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-map-marker"})])]),a("li",[a("a",[a("i",{staticClass:"fa fa-tag"})])])]),a("div",{staticClass:"tweet-button"},[a("button",[t._v("Tweet")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"text-center"},[a("h6",{staticClass:"text-info font-weight-bold"},[t._v("Show 1234 Post")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"header"},[a("div",{staticClass:"left-info"},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})]),a("div",{staticClass:"name-info"},[a("div",{staticClass:"name"},[a("a",{attrs:{href:""}},[t._v("Nikesh Sharma")]),a("i",{staticClass:"fa fa-check-circle ml-1",staticStyle:{"font-size":"12px",color:"#1d9bf0"}})]),a("div",{staticClass:"time"},[t._v(" Noida 12:45 am "),a("i",{staticClass:"global-icon ml-1"})])])]),a("div",{staticClass:"right-info"})])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"video-link",attrs:{href:"https://youtu.be/UnjzmmK7TaY",target:"_blank"}},[a("div",{staticClass:"video-wrposter"},[a("div",{staticClass:"video-thumbnail"},[a("img",{attrs:{src:"https://img.shop.com/Image/250000/257700/257781/products/1545411058__400x400__.jpg",alt:""}})]),a("div",{staticClass:"video-info"},[a("div",{staticClass:"youtube-title"},[t._v("YOUTUBE.COM")]),a("div",{staticClass:"video-title"},[t._v("Joker【Let's Play a Game】- Official Video")]),a("div",{staticClass:"video-desc"},[t._v("\"Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just...DO things.\"")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"feedback-info"},[a("div",{staticClass:"feedback-emojis"},[a("i",{staticClass:"icons laugh-icon"}),a("i",{staticClass:"icons angry-icon"}),a("i",{staticClass:"icons wow-icon"}),t._v(" Tony Stark, Logan and 9487 others ")]),a("div",{staticClass:"threads-and-share"},[a("div",{staticClass:"threads"},[t._v(" 15 comments")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"option"},[a("i",{staticClass:"fb-icon fa fa-share"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"my-comment-wrposter"},[a("div",{staticClass:"my-avatar"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/813/81320.jpg",alt:""}})]),a("div",{staticClass:"my-comment"},[a("div",{staticClass:"my-comment-placeholder"},[a("input",{attrs:{type:"text",placeholder:"Write a comment..."}})])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrposter"},[a("div",{staticClass:"people-comment-wrposter"},[a("div",{staticClass:"people-avatar"},[a("img",{attrs:{src:"https://i1.sndcdn.com/avatars-000472635192-bk5zvc-t500x500.jpg",alt:""}})]),a("div",{staticClass:"people-comment"},[a("div",{staticClass:"people-comment-container"},[a("div",{staticClass:"people-name"},[a("a",{attrs:{href:"https://www.facebook.com/Thanos-66479565036/"}},[t._v("Aman")]),a("i",{staticClass:"blue-check"})]),a("div",{staticClass:"people-saying"},[t._v("You're not the only one cursed with knowledge.")])]),a("div",{staticClass:"comment-reactions"},[a("i",{staticClass:"icons like-icon"}),a("span",{staticClass:"number"},[t._v("87")])])])]),a("div",{staticClass:"like-and-response-wrposter"},[a("div",{staticClass:"like-comment"},[a("a",[t._v("Like")]),a("span",{staticClass:"tiny-dot"},[t._v("・")])]),a("div",{staticClass:"day-comment"},[t._v("4 Days")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrposter"},[a("div",{staticClass:"people-comment-wrposter"},[a("div",{staticClass:"people-avatar"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/123/thumb-123732.jpg",alt:""}})]),a("div",{staticClass:"people-comment"},[a("div",{staticClass:"people-comment-container"},[a("div",{staticClass:"people-name"},[a("a",{attrs:{href:"https://www.facebook.com/Thanos-66479565036/"}},[t._v("Vipin")]),a("i",{staticClass:"blue-check"})]),a("div",{staticClass:"people-saying"},[t._v("Bad shit hpostens to people I care about and I don't care about.")]),a("div",{staticClass:"people-sharing"},[a("img",{attrs:{src:"https://i.ytimg.com/vi/X2Z3aBA9AZE/maxresdefault.jpg",alt:""}})])]),a("div",{staticClass:"comment-reactions"},[a("i",{staticClass:"icons like-icon"}),a("span",{staticClass:"number"},[t._v("948")])])])]),a("div",{staticClass:"like-and-response-wrposter"},[a("div",{staticClass:"like-comment"},[a("a",[t._v("Like")]),a("span",{staticClass:"tiny-dot"},[t._v("・")])]),a("div",{staticClass:"day-comment"},[t._v("5 Days")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"right-feed mt-5"},[a("div",{staticClass:"p-2 text-left"},[a("h5",{staticClass:"font-weight-bold text-dark"},[t._v("What's happening?")])])])}],b=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"card",staticStyle:{width:"20rem","margin-left":"-10px","border-radius":"10px","background-color":"#eee"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("This is the altest")]),a("p",[t._v("@Nikesh kumar")])])])]),a("div",{staticClass:"hmm"}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("This is the altest")]),a("p",[t._v("@Nikesh kumar")])])])]),a("div",{staticClass:"hmm"}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("This is the altest")]),a("p",[t._v("@Nikesh kumar")])])])])])]),a("div",{staticClass:"card mt-2",staticStyle:{width:"20rem","margin-left":"-10px","border-radius":"10px","background-color":"#eee"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("Nikesh Kumar")]),a("div",{staticClass:"new-folow"},[a("a",[t._v("Follow")])])])])]),a("div",{staticClass:"hmm"}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("Vipin Chandra")]),a("div",{staticClass:"new-folow"},[a("a",[t._v("Follow")])])])])]),a("div",{staticClass:"hmm"}),a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"list-inline-item"},[a("img",{attrs:{src:"https://avatarfiles.alphacoders.com/131/131892.jpg",alt:""}})])]),a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"text-news"},[a("h6",[t._v("Vipin Chandra")]),a("div",{staticClass:"new-folow"},[a("a",[t._v("Follow")])])])])])])])])}],y={},k=y,x=(s("6c58"),Object(d["a"])(k,b,w,!1,null,null,null)),j=x.exports,S={components:{RightSide:j},data(){return{counter:20,retweet:12,comments:!1}},methods:{onComments(){this.comments=!0},onLike(){this.counter++},onRetweet(){this.retweet++}}},O=S,L=(s("0a74"),Object(d["a"])(O,g,_,!1,null,null,null)),T=L.exports;i["a"].use(C["a"]);const P=[{path:"/",name:"HomePage",component:T},{path:"/about",name:"About",component:()=>s.e("about").then(s.bind(null,"f820"))}],I=new C["a"]({mode:"history",base:"/",routes:P});var M=I,E=s("2f62");i["a"].use(E["a"]);var N=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=s("bc3a"),B=s("130e");i["a"].use(B["a"],A["a"]),i["a"].config.productionTip=!1,new i["a"]({router:M,store:N,render:t=>t(h)}).$mount("#app")},"5e47":function(t,a,s){},6852:function(t,a,s){},"6c58":function(t,a,s){"use strict";s("e84d")},"87cc":function(t,a,s){"use strict";s("a8e0")},a09e:function(t,a,s){"use strict";s("6852")},a8e0:function(t,a,s){},e84d:function(t,a,s){}});
//# sourceMappingURL=app.77033707.js.map