(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(2),o=a.n(s),c=a(3),l=a(4),i=a(7),u=a(5),m=(a(13),a(6)),d=(a(14),function(t){var e=t.goods,a=t.sortBy,n=t.isReversed,s=Object(m.a)(e).sort((function(t,e){switch(a){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}}));return n&&s.reverse(),r.a.createElement("ul",{className:"list"},s.map((function(t){return r.a.createElement("li",{key:t},t)})))}),h=(r.a.memo(d),a(15),function(t){var e=t.callback,a=t.text;return r.a.createElement("button",{type:"button",onClick:e,className:"button"},a)}),f=(r.a.memo(h),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:[].concat(f),isStarted:!1,isReversed:!1,sortBy:null},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByLength=function(){t.setState((function(t){return{sortBy:"length"}}))},t.sortByName=function(){t.setState((function(t){return{sortBy:"alphabet"}}))},t.reset=function(){t.setState((function(t){return{goods:[].concat(f),isStarted:!0,isReversed:!1,sortBy:null}}))},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isStarted?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Goods"),r.a.createElement(d,{goods:this.state.goods,sortBy:this.state.sortBy,isReversed:this.state.isReversed}),r.a.createElement("div",{className:"buttons"},r.a.createElement(h,{callback:this.reverse,text:"Reverse"}),r.a.createElement(h,{callback:this.sortByLength,text:"Sort by length"}),r.a.createElement(h,{callback:this.sortByName,text:" Sort alphabetically"}),r.a.createElement(h,{callback:this.reset,text:" Reset"}))):r.a.createElement("button",{type:"button",onClick:this.start,className:"button"},"Start"))}}]),a}(r.a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.999e3c4d.chunk.js.map