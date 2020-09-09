(this["webpackJsonpvezdekod-web-mini-app"]=this["webpackJsonpvezdekod-web-mini-app"]||[]).push([[0],{170:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);t(94),t(120),t(122),t(123),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(132),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(143),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162);var r=t(0),c=t.n(r),n=t(84),o=t.n(n),i=t(85),s=t.n(i),l=t(28),m=t(8),d=t(29),u=t(7),f=t(6),_=t(23),p=t.n(_),E=(t(170),function(e){var a=e.foodAreas,t=e.order;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"Home"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("div",{className:"Home__fixed-content"},c.a.createElement("header",{className:"Home__header"},c.a.createElement("h1",{className:"Home__head"},c.a.createElement(u.b,{to:"/",className:"Home__logo"},e.name)),c.a.createElement(u.b,{to:"/",className:"Home__change-tz"},c.a.createElement("img",{className:"Home__edit",alt:"change-profile",src:p.a}))),c.a.createElement("ul",{className:"Home__tabs"},c.a.createElement("li",{className:"Home__tab Home__tab_active"},"\u0415\u0434\u0430"))),c.a.createElement("ul",{className:"Home__items"},e.items.map((function(e){return c.a.createElement("li",{className:"Home__item",key:e.id},c.a.createElement(u.b,{className:"Home__food-link",to:e.link},c.a.createElement("img",{alt:e.name,className:"Home__image",src:e.image}),c.a.createElement("h3",{className:"Home__food-name"},e.name),c.a.createElement("p",{className:"Home__food-type"},e.description)))}))))}))),0!==Object.keys(t).length&&c.a.createElement("footer",{className:"Footer"},c.a.createElement(u.b,{to:"/orders",className:"Footer__orders"},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))});E.defaultProps={foodAreas:[]};var g=E,N=t(36),h=t.n(N),b=(t(52),function(e){var a=e.item,t=e.order,n=e.onIncrementPosition,o=e.onDecrementPosition,i=e.area,s=Object(r.useMemo)((function(){var e=new Set((a.foods||[]).map((function(e){return e.id}))),r=Object.values(t).filter((function(a){var t=a.item.id;return e.has(t)})).reduce((function(e,a){var t=a.count,r=a.item.price;return e+parseInt(r)*parseInt(t)}),0);return h.a.formatNumber(r,0," ")}),[t,a]),l=s<=0;return c.a.createElement("div",{className:"Place"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(u.b,{to:"/",className:"Place__logo"},i.name)),c.a.createElement(u.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:a.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},a.name),c.a.createElement("p",{className:"Place__restoraunt-type"},a.description)),c.a.createElement("ul",{className:"Place__foods"},a.foods.map((function(e){return c.a.createElement("li",{className:"Place__food",key:e.id},c.a.createElement("div",{className:"Place__food-logo-wrapper"},c.a.createElement("img",{alt:"food logo",className:"Place__food-logo",src:e.image})),c.a.createElement("h3",{className:"Place__food-name"},e.name),c.a.createElement("p",{className:"Place__food-composition"},e.composition),c.a.createElement("div",{className:"Place__food-price"},c.a.createElement("span",{className:".Place__food-price-price"},"\u0426\u0435\u043d\u0430: ",e.price,"\xa0\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){o({id:e.id,itemId:a.id,areaId:i.id})}},"-"),c.a.createElement("span",null,"\xa0",e.id in t?t[e.id].count:0,"\xa0"),c.a.createElement("button",{className:"Place__food-button",onClick:function(){n({id:e.id,itemId:a.id,areaId:i.id})}},"+")))}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(u.b,{to:"/basket/".concat(i.id,"/").concat(a.id),className:"Place__order ".concat(l?"Place__order_disabled":""),disabled:l,onClick:function(e){if(l)return e.preventDefault()}},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",s,")")))});b.defaultProps={item:{},onIncrementPosition:function(){},onDecrementPosition:function(){}};var v=b,O=(t(175),t(87)),P=t.n(O),I=function(e){var a=e.checked,t=e.onToggle;return c.a.createElement("div",{className:"Checkbox"},c.a.createElement("input",{checked:a,onChange:t,type:"checkbox"}),c.a.createElement("img",{alt:"custom checkbox logo",src:P.a}))};I.defaultProps={onToggle:function(){}};var k=I,S=Object(f.f)((function(e){var a=e.match.params,t=a.areaId,n=a.itemId,o=e.foodAreas,i=e.order,s=e.orderParams,l=e.setFaster,m=e.setTime,f=e.setSelfService,_=s[n]||{faster:!0,time:"",selfService:!1},E=_.faster,g=_.time,N=_.selfService,b=o.filter((function(e){return e.id===t}))[0],v=b.items.filter((function(e){return e.id===n}))[0],O=Object(r.useMemo)((function(){var e=new Set((v.foods||[]).map((function(e){return e.id}))),a=Object.values(i).filter((function(a){var t=a.item.id;return e.has(t)})),t=a.reduce((function(e,a){var t=a.count,r=a.item;return e+parseInt(r.price)*parseInt(t)}),0);return[h.a.formatNumber(t,0," "),a]}),[i,v]),P=Object(d.a)(O,2),I=P[0],S=P[1];return c.a.createElement("div",{className:"Place"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(u.b,{to:"/",className:"Place__logo"},b.name)),c.a.createElement(u.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:v.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},v.name),c.a.createElement("p",{className:"Place__restoraunt-type"},v.description)),c.a.createElement("div",{className:"Place__products-wrapper"},c.a.createElement("ul",{className:"Place__products"},S.map((function(e){var a=e.item,t=e.count;return c.a.createElement("li",{className:"Place__product",key:a.id},c.a.createElement("img",{className:"Place__product-logo",alt:"Ordered product logo",src:a.image}),c.a.createElement("h3",{className:"Place__product-name"},a.name),c.a.createElement("p",{className:"Place__product-price"},"\u0426\u0435\u043d\u0430: ",a.price),c.a.createElement("p",{className:"Place__product-count"},"x",t))}))),c.a.createElement(u.b,{className:"Place__change-product",to:"/place/".concat(t,"/").concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),c.a.createElement("div",{className:"Place__choice"},c.a.createElement("h3",null,"\u0412\u0440\u0435\u043c\u044f:"),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435"),c.a.createElement(k,{checked:E,onToggle:function(){E?l({id:n,faster:!1}):(m({id:n,time:""}),l({id:n,faster:!0}))}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("span",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c"),c.a.createElement("input",{type:"time",value:g,onFocus:function(){l({id:n,faster:!1})},onChange:function(e){l({id:n,faster:!1}),m({id:n,time:e.target.value})},onBlur:function(){g&&l({id:n,faster:!1})}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u0421 \u0441\u043e\u0431\u043e\u0439"),c.a.createElement(k,{checked:N,onToggle:function(){return f({id:n,selfService:!N})}})),c.a.createElement("div",{className:"Place__choice-item"},c.a.createElement("h3",null,"\u041d\u0430 \u043c\u0435\u0441\u0442\u0435"),c.a.createElement(k,{checked:!N,onToggle:function(){return f({id:n,selfService:!N})}}))),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement(u.b,{to:"/order/".concat(b.id,"/").concat(v.id),className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",I)))})),j=function(e){var a=e.match.params,t=a.areaId,r=a.itemId,n=e.history,o=e.foodAreas,i=e.setActiveOrder,s=o.filter((function(e){return e.id===t}))[0],l=s.items.filter((function(e){return e.id===r}))[0];return c.a.createElement("div",{className:"Place Place_order"},c.a.createElement("header",{className:"Place__header"},c.a.createElement("aside",{className:"Place__trz"},c.a.createElement("h1",{className:"Place__head"},c.a.createElement(u.b,{to:"/",className:"Place__logo"},s.name)),c.a.createElement(u.b,{to:"/edit",className:"Place__change-tz"},c.a.createElement("img",{alt:"change-profile",src:p.a})))),c.a.createElement("aside",{className:"Place__restoraunt"},c.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:l.image}),c.a.createElement("h2",{className:"Place__restoraunt-name"},l.name),c.a.createElement("p",{className:"Place__restoraunt-type"},l.description)),c.a.createElement("div",{className:"Place__order-body"},c.a.createElement("h3",{className:"Place__order-number-header"},"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430"),c.a.createElement("main",{className:"Place__order-number"},"7"),c.a.createElement("p",{className:"Place__order-number-header"},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437"),c.a.createElement("h3",{className:"Place__order-time"},"~ 15 \u043c\u0438\u043d\u0443\u0442")),c.a.createElement("footer",{className:"Place__footer"},c.a.createElement("div",{to:"/orders",className:"Place__order",onClick:function(){i({itemId:r}),setTimeout((function(){n.push("/orders")}),0)}},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))};j.defaultProps={setActiveOrder:function(){}};var y=Object(f.f)(j),A=t(88),x=t.n(A),T=(t(176),function(e){var a=e.order,t=e.orderStatuses,n=e.foodAreas,o=e.setFinishedOrder,i=e.setActiveOrder,s=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"===t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeId:e.id,placeName:e.name,shopId:t.id,shopName:t.name,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]),l=Object(r.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"!==t[e]})).map((function(e){return e})),r=[],c=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(c.has(t.id)){var n={placeName:e.name,shopName:t.name,shopId:t.id,price:t.foods.reduce((function(e,t){if(t.id in a){var r=a[t.id],c=r.item.price,n=r.count;return e+parseInt(c)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};r.push(n)}}))})),r}),[a,t,n]);return c.a.createElement("div",{className:"Orders"},c.a.createElement("ul",{className:"Orders__active-orders"},s.map((function(e){return c.a.createElement("li",{className:"Orders__active-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name"},e.shopName),c.a.createElement("p",{className:"Orders__price"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("div",{className:"Orders__time"},"~ 15 \u041c"),c.a.createElement(u.b,{className:"Orders__change",to:"/place/".concat(e.placeId,"/").concat(e.shopId)},"\u0418\u0437\u043c"),c.a.createElement("button",{className:"Orders__cancel",onClick:function(){o({itemId:e.shopId})}},"\u041e\u0442\u043c."))}))),c.a.createElement("ul",{className:"Orders__finished-orders"},l.map((function(e){return c.a.createElement("li",{className:"Orders__finished-order",key:e.link},c.a.createElement("div",{className:"Orders__left"},c.a.createElement("h3",{className:"Orders__header Orders__dark"},e.placeName),c.a.createElement("p",{className:"Orders__shop-name Orders__pink"},e.shopName),c.a.createElement("p",{className:"Orders__price Orders__pink"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),c.a.createElement("button",{className:"Orders__repeat",onClick:function(){i({itemId:e.shopId})}},c.a.createElement("img",{className:"Orders__refresh",alt:"repeat order",src:x.a})))}))))});T.defaultProps={setFinishedOrder:function(){},setActiveOrder:function(){}};var C=T,w=(t(177),t(89)),H=t.n(w),J=t(90),z=t.n(J),F=t(91),D=t.n(F),V=t(92),M=t.n(V),B=t(37),K=t.n(B),W=t(55),L=t.n(W),q=t(38),G=t.n(q),Q=t(56),R=t.n(Q),U=[{id:"pizikiva-gallery",name:'\u0422\u0420\u0426 "\u0418\u043c.\u041f\u044b\u0436\u0438\u043a\u043e\u0432\u0430"',items:[{id:"kfc",name:"KFC",link:"/place/pizikiva-gallery/kfc",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:H.a,foods:[{id:"classic",image:R.a,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",price:150},{id:"bigmac",image:K.a,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:50}]},{id:"burger-king",name:"Burger King",link:"/place/pizikiva-gallery/burger-king",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:z.a,foods:[{id:"OneTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 1",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:630,image:K.a},{id:"TwoTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 2",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:450,image:L.a},{id:"ThreeTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 3",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:800,image:G.a},{id:"FourthTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 4",composition:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:600,image:R.a}]},{id:"macdac",name:"McDonal's",link:"/place/pizikiva-gallery/macdac",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:D.a,foods:[{id:"hamburger",image:L.a,name:"\u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",price:50},{id:"bigmac",image:G.a,name:"\u0411\u0438\u0433 \u043c\u0430\u043a",price:200}]},{id:"subway",name:"SubWay",link:"/place/pizikiva-gallery/subway",image:M.a,description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",foods:[{id:"melt-sub",image:G.a,name:"\u0421\u0430\u0431\u0432\u0435\u0439 \u043c\u0435\u043b\u0442",price:300},{id:"day-sub",image:K.a,name:"\u0421\u0430\u0431 \u0434\u043d\u044f",price:200}]}]}],X=U.reduce((function(e,a){return a.items.forEach((function(a){e[a.link]=a})),e}),{}),Y=U.reduce((function(e,a){return a.items.forEach((function(a){a.foods.forEach((function(t){e["".concat(a.id,"-").concat(t.id)]=t}))})),e}),{}),Z=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("orderStatuses")||"null")||{}),a=Object(d.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(JSON.parse(localStorage.getItem("orders")||"null")||{}),i=Object(d.a)(o,2),s=i[0],_=i[1],p=Object(r.useState)(JSON.parse(localStorage.getItem("orderParams")||"null")||{}),E=Object(d.a)(p,2),N=E[0],h=E[1];return c.a.createElement(u.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/",exact:!0},c.a.createElement(g,{foodAreas:U,order:s})),c.a.createElement(f.a,{path:"/order/:areaId/:itemId",exact:!0},c.a.createElement(y,{foodAreas:U,order:s,setActiveOrder:function(e){var a=e.itemId,r=Object(m.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(f.a,{path:"/basket/:areaId/:itemId",exact:!0},c.a.createElement(S,{foodAreas:U,order:s,orderParams:N,setFaster:function(e){var a=e.id,t=e.faster,r=Object(m.a)(Object(m.a)({},N),{},Object(l.a)({},a,Object(m.a)(Object(m.a)({},N[a]),{},{faster:t})));h(r),localStorage.setItem("orderParams",JSON.stringify(r))},setTime:function(e){var a=e.id,t=e.time,r=Object(m.a)(Object(m.a)({},N),{},Object(l.a)({},a,Object(m.a)(Object(m.a)({},N[a]),{},{time:t})));h(r),localStorage.setItem("orderParams",JSON.stringify(r))},setSelfService:function(e){var a=e.id,t=e.selfService,r=Object(m.a)(Object(m.a)({},N),{},Object(l.a)({},a,Object(m.a)(Object(m.a)({},N[a]),{},{selfService:t})));h(r),localStorage.setItem("orderParams",JSON.stringify(r))}})),c.a.createElement(f.a,{path:"/orders",exact:!0},c.a.createElement(C,{order:s,orderStatuses:t,foodAreas:U,setFinishedOrder:function(e){var a=e.itemId,r=Object(m.a)({},t);r[a]="CANCELED",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))},setActiveOrder:function(e){var a=e.itemId,r=Object(m.a)({},t);r[a]="ACTIVE",n(r),localStorage.setItem("orderStatuses",JSON.stringify(r))}})),c.a.createElement(f.a,{path:"/place/:area/:place",render:function(e){return c.a.createElement(v,Object.assign({},e,{item:X[e.location.pathname],area:U[0],order:s,onIncrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(m.a)({},s));a in c?c[a].count++:c[a]={item:Y["".concat(r,"-").concat(a)],count:1};var o=Object(m.a)({},t);0===Object.keys(o).length&&U.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in s){var t=e.id===r?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var i=JSON.stringify(c);localStorage.setItem("orders",i),localStorage.setItem("orderStatuses",JSON.stringify(o)),_(c),n(o)},onDecrementPosition:function(e){var a=e.id,r=e.itemId,c=(e.areaId,Object(m.a)({},s));a in c&&(1===c[a].count?delete c[a]:c[a].count--);var o=Object(m.a)({},t);0===Object.keys(o).length&&U.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in s){var t=e.id===r?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var i=JSON.stringify(c);localStorage.setItem("orders",i),localStorage.setItem("orderStatuses",JSON.stringify(o)),_(c),n(o)}}))}})))};s.a.send("VKWebAppInit"),o.a.render(c.a.createElement(Z,null),document.getElementById("root"))},23:function(e,a,t){e.exports=t.p+"static/media/edit.751f84c2.svg"},37:function(e,a,t){e.exports=t.p+"static/media/1.dfc54362.png"},38:function(e,a,t){e.exports=t.p+"static/media/3.dbf82c38.png"},52:function(e,a,t){},55:function(e,a,t){e.exports=t.p+"static/media/2.20489759.png"},56:function(e,a,t){e.exports=t.p+"static/media/4.e671d539.png"},87:function(e,a,t){e.exports=t.p+"static/media/check-symbol.06277842.svg"},88:function(e,a,t){e.exports=t.p+"static/media/refresh-button.1198ed41.svg"},89:function(e,a,t){e.exports=t.p+"static/media/kfc.4fd2ba47.png"},90:function(e,a,t){e.exports=t.p+"static/media/burger.35bcd067.png"},91:function(e,a,t){e.exports=t.p+"static/media/mcdac.60464810.png"},92:function(e,a,t){e.exports=t.p+"static/media/sub.4eb05fdd.png"},93:function(e,a,t){e.exports=t(178)}},[[93,1,2]]]);
//# sourceMappingURL=main.5cb2c966.chunk.js.map