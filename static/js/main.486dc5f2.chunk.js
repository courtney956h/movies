(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{37:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),i=c.n(n),r=c(27),a=c.n(r),j=c(10),l=c(2),o=c(6),h=c(7),b=c(9),d=c(8),O=(c(37),function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h2",{children:"Download YTS YIFY movies: HD smallest size"}),Object(s.jsx)("h5",{children:"Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents."}),Object(s.jsx)("strong",{children:Object(s.jsx)("a",{href:"#",children:"IMPORTANT - YTS.MX is the only new official domain for YIFY Movies"})})]})}),x=c(14),u=c.n(x),m=c(28),p=c(29),f=c.n(p);c(56);var v=function(e){var t=e.year,c=e.title,n=e.summary,i=e.poster,r=e.genres;return Object(s.jsx)(j.b,{to:{pathname:"/detail",state:{year:t,title:c,summary:n,poster:i,genres:r}},children:Object(s.jsxs)("div",{className:"movies",children:[Object(s.jsx)("img",{src:i,alt:c}),Object(s.jsxs)("div",{className:"movies_data",children:[Object(s.jsx)("h3",{className:"movies_title",children:c}),Object(s.jsx)("h5",{className:"movies_year",children:t}),Object(s.jsx)("ul",{children:r.map((function(e,t){return Object(s.jsxs)("li",{children:["/ ",e]},t)}))}),Object(s.jsxs)("p",{className:"movies_summary",children:[n.slice(0,50),"..."]})]})]})})},y=(c(62),c(31)),g=function(){return Object(s.jsx)("div",{className:"loadWrap",children:Object(s.jsx)(y.a,{size:"50",color:"#fff"})})},N=(c(63),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={kim:[],isLoading:!0},e.getMovies=Object(m.a)(u.a.mark((function t(){var c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json");case 2:c=t.sent,s=c.data.data.movies,e.setState({kim:s});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),5e3),this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.kim,c=e.isLoading;return Object(s.jsx)(s.Fragment,{children:c?Object(s.jsx)(g,{}):Object(s.jsxs)("section",{className:"container",children:[" ",t.map((function(e){return Object(s.jsx)(v,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))]})})}}]),c}(n.Component)),w=(c(64),function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("ul",{class:"text-center",children:[Object(s.jsx)("li",{children:"YTS \xa9 2011 - 2020"}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/blog",children:"Blog"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/dmca",children:"DMCA"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/api",children:"API"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/rss-guide",children:"RSS"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/contact",children:"Contact"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/browse-movies",children:"Browse Movies"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/requests",children:"Requests"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://yts.mx/login",children:"Login"})})]}),Object(s.jsxs)("ul",{class:"text-center",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://eztv.re",children:"EZTV"})}),Object(s.jsx)("li",{children:"-"}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://vpn.ht/yts",children:"YTS VPN"})})]}),Object(s.jsxs)("p",{children:["By using this site you agree to and accept our ",Object(s.jsx)("a",{href:"#",children:"User Agreement"}),", which can be read ",Object(s.jsx)("a",{href:"#",children:"here"}),"."]})]})}),T=(c(65),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrap",children:[Object(s.jsx)(O,{}),Object(s.jsx)(N,{}),Object(s.jsx)(w,{})]})}}]),c}(n.Component)),k=(c(66),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrap",children:[Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"about",children:"This is About Page."}),Object(s.jsx)(w,{})]})}}]),c}(n.Component)),M=(c(67),function(){return Object(s.jsxs)("div",{className:"navi",children:[Object(s.jsx)(j.b,{to:"/",className:"lnk",children:"HOME"}),Object(s.jsx)(j.b,{to:"/about",className:"lnk",children:"ABOUT"})]})}),S=(c(68),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var e=this.props.location;return Object(s.jsxs)("div",{className:"wrap",children:[Object(s.jsx)(O,{}),Object(s.jsxs)("div",{className:"locate",children:[Object(s.jsx)("p",{children:e.state.title}),Object(s.jsx)("p",{children:e.state.year}),Object(s.jsx)("p",{children:e.state.genres}),Object(s.jsx)("p",{children:e.state.summary})]}),Object(s.jsx)(w,{})]})}}]),c}(n.Component)),Y=function(){return Object(s.jsxs)(j.a,{children:[Object(s.jsx)(M,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:T}),Object(s.jsx)(l.a,{path:"/about",component:k}),Object(s.jsx)(l.a,{path:"/detail",component:S})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Y,{})}),document.getElementById("root")),C()}},[[69,1,2]]]);
//# sourceMappingURL=main.486dc5f2.chunk.js.map