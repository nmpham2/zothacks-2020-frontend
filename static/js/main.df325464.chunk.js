(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{31:function(e,t,n){e.exports=n(68)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),o=n.n(r),i=(n(36),n(5)),l=(n(37),n(38),n(39),n(7)),u=n(1),s=(n(14),n(29),n(41),n(13),n(59),n(11));n(60);var m=function(e){var t=e.ingredient;return c.a.createElement(s.a.div,{animate:{opacity:[0,1]},transition:{duration:.2,delay:.1},className:"displayIngredients"},c.a.createElement("h2",null,t))};var d=n(6),p=(n(61),n(13));var f=function(e){e.recipe;var t=e.setRecipe,n=Object(u.f)(),r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],s=o[1],f=Object(a.useState)([]),g=Object(i.a)(f,2),h=g[0],E=g[1],b=Object(a.useState)([]),v=Object(i.a)(b,2),y=v[0],j=v[1];return Object(a.useEffect)((function(){console.log(h),console.log(y)}),[h,y]),c.a.createElement("div",null,c.a.createElement("div",{style:{padding:"20px 0"}},c.a.createElement("h1",null,"\u0295\u2022\u0301\u1d25\u2022\u0300\u0294\u3063 Food Finder c\u0295\u2022\u0301\u1d25\u2022\u0300\u0294")),c.a.createElement("div",{style:{padding:"20px 0"}},c.a.createElement("input",{style:{width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"},key:"random1",placeholder:"input ingredient",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){E([].concat(Object(d.a)(h),[l])),s("")}},"Add Item"),c.a.createElement("button",{onClick:function(){p.post("http://food-finders.herokuapp.com/search",{ingredients:h,healthLabels:y}).then((function(e){console.log(e.data);var a=e.data;t(a),n.push("/recipes")})).catch((function(e){console.log(e)}))}},"Submit List"),c.a.createElement("div",{style:{padding:"10px 0"}},c.a.createElement("h3",null,"~ Health Labels ~"),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){j([].concat(Object(d.a)(y),["peanut-free"]))}},"Peanut-free"),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){j([].concat(Object(d.a)(y),["alcohol-free"]))}},"Alcohol-free"),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){j([].concat(Object(d.a)(y),["tree-nut-free"]))}},"Tree-Nut-free"),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){j([].concat(Object(d.a)(y),["vegan"]))}},"Vegan"),c.a.createElement("button",{style:{margin:"10px"},onClick:function(){j([].concat(Object(d.a)(y),["vegetarian"]))}},"Vegetarian"))),c.a.createElement("h3",null,"Your Ingredients and/or Dietary Restrictions:"),h.map((function(e){return c.a.createElement(m,{ingredient:e})})),y.map((function(e){return c.a.createElement(m,{ingredient:e})})))};n(67);var g=function(e){var t=e.recipe;return c.a.createElement("div",null,c.a.createElement("h1",null,"~ You Should Make ~"),Object.keys(t).map((function(e){var n=t[e];return c.a.createElement(m,{ingredient:n})})))};var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"app fill-view"},c.a.createElement(l.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/zothacks-2020-frontend"},c.a.createElement(f,{recipe:n,setRecipe:r})),c.a.createElement(u.a,{exact:!0,path:"/recipes"},c.a.createElement(g,{recipe:n})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.df325464.chunk.js.map