(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var n,a,r=i(1),c=i.n(r),s=i(32),l=i.n(s),o=i(15),p=i(16),b=i(17),m=i(19),d=i(18),h=(i(38),i(13)),u=i(14),g=(i(39),i(40),i(5)),j=i(2),O=Object(g.f)((function(e){var t=e.title,i=e.imageUrl,n=e.size,a=e.history,r=e.match,c=e.linkUrl;return Object(j.jsxs)("div",{className:"".concat(n," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(c))},children:[Object(j.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(i,")")}}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(j.jsx)("span",{className:"sub-title",children:"SHOP NOW"})]})]})})),f=function(e){Object(m.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(p.a)(this,i),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(b.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,i=Object(u.a)(e,["id"]);return Object(j.jsx)(O,Object(h.a)({},i),t)}))})}}]),i}(c.a.Component),v=function(){return Object(j.jsx)("div",{className:"homepage",children:Object(j.jsx)(f,{})})},k=(i(46),function(e){e.id;var t=e.name,i=e.price,n=e.imageUrl;return Object(j.jsxs)("div",{className:"collection-item",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(j.jsxs)("div",{className:"collection-footer",children:[Object(j.jsx)("span",{className:"name",children:t}),Object(j.jsxs)("span",{className:"price",children:[i,"$"]})]})]})}),x=(i(47),function(e){var t=e.title,i=e.items;return Object(j.jsxs)("div",{className:"collection-preview",children:[Object(j.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(j.jsx)("div",{className:"preview",children:i.filter((function(e,t){return t<4})).map((function(e){var t=e.id,i=Object(u.a)(e,["id"]);return Object(j.jsx)(k,Object(h.a)({},i),t)}))})]})}),w=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],U=function(e){Object(m.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).state={collections:w},n}return Object(b.a)(i,[{key:"render",value:function(){var e=this.state.collections;return Object(j.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,i=Object(u.a)(e,["id"]);return Object(j.jsx)(x,Object(h.a)({},i),t)}))})}}]),i}(c.a.Component);i(48),i(49);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function S(e,t){var i=e.title,c=e.titleId,s=N(e,["title","titleId"]);return r.createElement("svg",y({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},s),void 0===i?r.createElement("title",{id:c},"Group"):i?r.createElement("title",{id:c},i):null,n||(n=r.createElement("desc",null,"Created with Sketch.")),a||(a=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var B=r.forwardRef(S),C=(i.p,i(22));i(58),i(51);C.a.initializeApp({apiKey:"AIzaSyBE5JwaqDONO0cgp5A6zwPbXSAN7W19y2s",authDomain:"crws-db.firebaseapp.com",projectId:"crws-db",storageBucket:"crws-db.appspot.com",messagingSenderId:"809053061518",appId:"1:809053061518:web:6af154d222c922cf5524df",measurementId:"G-Q84HEM5LER"});var E=C.a.auth(),T=(C.a.firestore(),new C.a.auth.GoogleAuthProvider);T.setCustomParameters({prompt:"select_account"});var I=function(){return E.signInWithPopup(T)},J=(C.a,function(e){var t=e.currentUser;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(o.b,{to:"/",className:"logo-container",children:Object(j.jsx)(B,{className:"logo"})}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsx)(o.b,{className:"option",to:"/shop",children:"SHOP"}),Object(j.jsx)(o.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(j.jsx)("div",{className:"option",onClick:function(){return E.signOut()},children:"SIGN OUT"}):Object(j.jsx)(o.b,{className:"option",to:"/signin",children:"SIGN IN"})]})]})}),W=i(25),A=(i(53),function(e){var t=e.children,i=e.isGoogleSignIn,n=Object(u.a)(e,["children","isGoogleSignIn"]);return Object(j.jsx)("button",Object(h.a)(Object(h.a)({className:"".concat(i?"google-sign-in":""," custom-button ")},n),{},{children:t}))}),P=(i(54),function(e){var t=e.handleChange,i=e.label,n=Object(u.a)(e,["handleChange","label"]);return Object(j.jsxs)("div",{className:"group",children:[Object(j.jsx)("input",Object(h.a)({className:"form-input",onChange:t},n)),i?Object(j.jsx)("label",{className:"".concat(n.value.length?"shrink":""," form-input-label"),children:i}):null]})}),G=(i(55),function(e){Object(m.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,i=t.value,a=t.name;n.setState(Object(W.a)({},a,i))},n.state={email:"",password:""},n}return Object(b.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"sign-in",children:[Object(j.jsx)("h2",{children:"I already have an account"}),Object(j.jsx)("span",{children:"Sign in with your email and password"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)(P,{type:"email",name:"email",required:!0,label:"email",value:this.state.email,handleChange:this.handleChange}),Object(j.jsx)(P,{type:"password",name:"password",label:"password",required:!0,value:this.state.password,handleChange:this.handleChange}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(A,{type:"submit",children:"Sign in"}),Object(j.jsx)(A,{onClick:I,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),i}(c.a.Component)),M=(i(56),function(){return Object(j.jsx)("div",{className:"sign-in-and-sign-up",children:Object(j.jsx)(G,{})})}),z=function(e){Object(m.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(p.a)(this,i),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(b.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=E.onAuthStateChanged((function(t){e.setState({currentUser:t}),console.log(t)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(J,{currentUser:this.state.currentUser}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{exact:!0,path:"/",component:v}),Object(j.jsx)(g.a,{path:"/shop",component:U}),Object(j.jsx)(g.a,{path:"/signin",component:M})]})]})}}]),i}(c.a.Component);l.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.bcc23b82.chunk.js.map