(this.webpackJsonpread_infra_front=this.webpackJsonpread_infra_front||[]).push([[0],{254:function(e,t,a){e.exports=a(574)},259:function(e,t,a){},574:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),c=a.n(l),o=(a(259),a(74)),u=a(48),m=a(13),i=a(17),s=a.n(i),d=a(36),p=a.n(d),f=a(75);function b(e){return r.a.createElement(f.a,{style:{width:"18rem"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,e.name),r.a.createElement(f.a.Text,null,e.data.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name),r.a.createElement("br",null))})))))}var E=a(101),h=a(222),g=a(43),v=a(143);function O(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),i=u[0],s=u[1],d=Object(n.useState)(!1),p=Object(m.a)(d,2),f=p[0],b=p[1],E=(null!=="44.232.253.221"?"44.232.253.221":"127.0.0.1")+":"+("538","538");return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"primary",onClick:function(){console.log("click"),b(!0)}},e.title),r.a.createElement(h.a,{title:e.title,show:f},r.a.createElement(g.a,{onSubmit:function(t){var a=new FormData;a.append("name",l),a.append("url",i),fetch("http://".concat(E,"/").concat(e.source),{method:"POST",body:a})}},r.a.createElement(g.a.Group,{controlId:"name"},r.a.createElement(g.a.Label,null,"source name"),r.a.createElement(g.a.Control,{type:"name",placeholder:"",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(g.a.Group,{controlId:"url"},r.a.createElement(g.a.Label,null,"source name"),r.a.createElement(g.a.Control,{type:"text",placeholder:"",value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement("input",{value:"Submit",type:"submit"}))))}var j=a(70),k=a(40);function y(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),u=o[0],i=o[1],d=Object(n.useState)([]),f=Object(m.a)(d,2),h=f[0],g=f[1],v=Object(n.useState)(0),y=Object(m.a)(v,1)[0],_=(null!=="44.232.253.221"?"44.232.253.221":"127.0.0.1")+":"+("538","538");Object(n.useEffect)((function(){s.a.get("http://".concat(_,"/general_news")).then((function(e){g(e.data.data.map((function(e,t){return e.name})))}))}),[y]),Object(n.useEffect)((function(){var e=h.map((function(e){return s.a.get("http://".concat(_,"/rss?name=").concat(e))}));Promise.all(e).then((function(e){i(e.map((function(e,t){var a=e.data.data.map((function(e,t){return{name:e.name,url:e.url}}));return{name:h[t],rs:a}})))}))}),[y,h]),Object(n.useEffect)((function(){var e=h.map((function(e){return s.a.get("http://".concat(_,"/rss?name=").concat(e))}));Promise.all(e).then((function(e){i(e.map((function(e,t){var a=e.data.data.map((function(e,t){return{name:e.name,url:e.url}}));return{name:h[t],rs:a}})))}))}),[y,h]),Object(n.useEffect)((function(){s.a.get("http://".concat(_,"/daily_read")).then((function(e){l(e.data.data.map((function(e){return{name:e.name,url:e.url,up:e.up,published:e.published}})))}))}),[y]);var w=[{dataField:"name",text:"Name",formatter:function(e,t){return r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name)}},{dataField:"published",text:"DATE",formatter:function(e,t){return new Date(1e3*t.published).toDateString()}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{title:"new general news",source:"general_news"}),r.a.createElement(E.a,null,r.a.createElement(j.a,null,u.map((function(e){return r.a.createElement(k.a,{key:e.name},r.a.createElement(b,{data:e.rs,name:e.name}))}))),r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(O,{title:"new daily news",source:"daily_news"}),r.a.createElement(p.a,{keyField:"id",data:a.sort((function(e,t){return t.published-e.published})),columns:w})))))}function _(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=(null!=="44.232.253.221"?"44.232.253.221":"127.0.0.1")+":"+("538","538"),o=Object(n.useState)(0),u=Object(m.a)(o,1)[0];Object(n.useEffect)((function(){s.a.get("http://".concat(c,"/video")).then((function(e){l(e.data.data.map((function(e){return{name:e.name,url:e.url,up:e.up,published:e.published}})))}))}),[u]);var i=[{dataField:"up",text:"Up"},{dataField:"name",text:"Name",formatter:function(e,t){return r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name)}},{dataField:"published",text:"Date",formatter:function(e,t){return new Date(1e3*t.published).toDateString()}}];return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(O,{title:"new bilibili",source:"video"}),r.a.createElement(p.a,{keyField:"published",data:a.sort((function(e,t){return t.published-e.published})),columns:i}))}a(317);var w=a(47),F=a(220);function x(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),u=o[0],i=o[1],d=Object(n.useState)(!0),f=Object(m.a)(d,2),b=f[0],E=f[1],h=Object(n.useState)(0),g=Object(m.a)(h,1)[0],v=(null!=="44.232.253.221"?"44.232.253.221":"127.0.0.1")+":"+("538","538");Object(n.useEffect)((function(){s.a.get("http://".concat(v,"/stock?stock_type=all")).then((function(e){l(e.data.data.map((function(e,t){return{name:e.name,buy:e.buy,stock_type:e.stock_type}})))}))}),[g]),Object(n.useEffect)((function(){var e=a.map((function(e){return s.a.get("http://".concat(v,"/stock_data?name=").concat(e.name,"&stock_date=30"))}));Promise.all(e).then((function(e){var t=[];e.map((function(e){var a=e.data.data,n=[];a.map((function(e){n.push({close_price:e.close_price,date:e.date,ma20:e.ma20,ma5:e.ma5,name:e.name,max_price:Math.max(e.close_price)+10,min_price:Math.min(e.close_price)-10})})),t.push(n.sort((function(e,t){return e.date.localeCompare(t.date)})))})),E(!1),i(t),console.log(t)}))}),[a]);var O=[{dataField:"name",text:"Name",formatter:function(e,t){return t[0].name}},{dataField:"close_price",text:"Picture",formatter:function(e,t){return r.a.createElement(w.b,{width:500,height:100,data:t},r.a.createElement(w.a,{type:"monotone",dataKey:"ma5",stroke:"#de1d10"}),r.a.createElement(w.a,{type:"monotone",dataKey:"ma20",stroke:"#0b91de"}),r.a.createElement(w.a,{type:"monotone",dataKey:"close_price",stroke:"#232224"}),r.a.createElement(w.c,{dataKey:"date"}),r.a.createElement(w.d,{domain:[t.min_price,t.max_price]}))}},{dataField:"ma5",text:"MA5",formatter:function(e,t){return t[t.length-1].ma5.toFixed(2)}},{dataField:"ma20",text:"MA20",formatter:function(e,t){return t[t.length-1].ma20.toFixed(2)}},{dataField:"close price",text:"Close price",formatter:function(e,t){return t[t.length-1].close_price}},{dataField:"suggestion",text:"\u5efa\u8bae",formatter:function(e,t){return t[t.length-1].ma5>t[t.length-1].ma20?"\u4e70":"\u5356"}}];return!0===b?r.a.createElement(F.a,{animation:"border"}):r.a.createElement(p.a,{keyField:"id",data:u,columns:O})}function S(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=(null!=="44.232.253.221"?"44.232.253.221":"127.0.0.1")+":"+("538","538"),o=Object(n.useState)(0),u=Object(m.a)(o,1)[0];Object(n.useEffect)((function(){s.a.get("http://".concat(c,"/blog")).then((function(e){l(e.data.data.map((function(e){return{name:e.name,url:e.url,up:e.up,published:e.published}})))}))}),[u]);var i=[{dataField:"up",text:"Up"},{dataField:"name",text:"Name",formatter:function(e,t){return r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name)}},{dataField:"published",text:"Date",formatter:function(e,t){return new Date(1e3*t.published).toDateString()}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{title:"new blog",source:"blog"}),r.a.createElement(p.a,{keyField:"published",data:a.sort((function(e,t){return t.published-e.published})),columns:i}))}var D=a(46),C=a(14);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.a,{bg:"light",expand:"lg"},r.a.createElement(o.a.Brand,{href:"/"},"Daily Read"),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{as:D.b,to:"/"},"Home"),r.a.createElement(u.a.Link,{as:D.b,to:"/news"},"News"),r.a.createElement(u.a.Link,{as:D.b,to:"/video"},"Video"),r.a.createElement(u.a.Link,{as:D.b,to:"/stock"},"Stock"),r.a.createElement(u.a.Link,{as:D.b,to:"/blog"},"Blog"))))),r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(C.a,{path:"/news"},r.a.createElement(y,null)),r.a.createElement(C.a,{path:"/video"},r.a.createElement(_,null)),r.a.createElement(C.a,{path:"/stock"},r.a.createElement(x,null)),r.a.createElement(C.a,{path:"/blog"},r.a.createElement(S,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(573);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[254,1,2]]]);
//# sourceMappingURL=main.24673626.chunk.js.map