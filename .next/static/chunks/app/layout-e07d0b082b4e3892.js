(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{69905:function(e,t,n){Promise.resolve().then(n.t.bind(n,83015,23)),Promise.resolve().then(n.bind(n,68091)),Promise.resolve().then(n.bind(n,75344)),Promise.resolve().then(n.bind(n,56586)),Promise.resolve().then(n.bind(n,11287)),Promise.resolve().then(n.bind(n,14592)),Promise.resolve().then(n.bind(n,5380)),Promise.resolve().then(n.bind(n,26261)),Promise.resolve().then(n.t.bind(n,94531,23)),Promise.resolve().then(n.t.bind(n,33177,23))},56586:function(e,t,n){"use strict";n.r(t);var r=n(57437),s=n(82749);t.default=function(){let{data:e}=(0,s.useSession)();return e?(0,r.jsx)("df-messenger",{"user-id":null==e?void 0:e.authToken,intent:"WELCOME","chat-title":"workspace-bot","agent-id":"64aa82c8-b1b7-49f2-9d7b-7d40fad0d251","language-code":"en"}):null}},68091:function(e,t,n){"use strict";n.r(t),n.d(t,{SessProvider:function(){return i}});var r=n(57437);n(2265);var s=n(82749);function i(e){return(0,r.jsx)(s.SessionProvider,{children:e.children})}},26261:function(e,t,n){"use strict";n.r(t),n.d(t,{SocketContext:function(){return a},SocketProvider:function(){return l}});var r=n(57437),s=n(82749),i=n(2265),o=n(63388);let a=(0,i.createContext)(null),c=[{url:"stun:global.stun.twilio.com:3478"},{url:"turn:global.turn.twilio.com:3478?transport=udp",username:"a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",credential:"ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="},{url:"turn:global.turn.twilio.com:3478?transport=tcp",username:"a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",credential:"ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="},{url:"turn:global.turn.twilio.com:443?transport=tcp",username:"a939e485500fe0ea3ed2f216929f5a3f9bcb71b7ae47c0d70d3178eb61a47aaf",credential:"ZQStZHd9+N0rq5pjVxRmO0UaycAbbA/m+/XerXQ3RRY="}];function l(e){let{children:t}=e,[l,u]=(0,i.useState)(null),[d,f]=(0,i.useState)(null),{data:m}=(0,s.useSession)();return(0,i.useEffect)(()=>{if(m){let e=(0,o.io)("".concat("https://workspace-api-f8rx.onrender.com"),{transportOptions:{polling:{extraHeaders:{Authorization:"Bearer ".concat(null==m?void 0:m.authToken)}}}});new Promise(t=>{e.on("connect",()=>{t(e),n.e(42).then(n.bind(n,67900)).then(t=>{let{default:n}=t,r=new n(e.id,{config:{iceServers:c}});u(e),f(r)})})})}},[null==m?void 0:m.authToken]),(0,r.jsx)(a.Provider,{value:{socket:l,peer:d},children:t})}},11287:function(e,t,n){"use strict";n.r(t),n.d(t,{SpinnerContext:function(){return o},default:function(){return a}});var r=n(57437),s=n(2265);function i(e){let{}=e;return(0,r.jsx)("div",{className:"z-50",children:(0,r.jsx)("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-gray-200 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:(0,r.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})}let o=(0,s.createContext)(null);function a(e){let{children:t}=e,[n,a]=(0,s.useState)(!1);return(0,r.jsx)(o.Provider,{value:{setLoading:a},children:(0,r.jsxs)("div",{className:"relative",children:[n&&(0,r.jsx)("div",{className:"absolute fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-40",children:(0,r.jsx)(i,{})}),(0,r.jsx)("div",{className:"",children:t})]})})}},14592:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return i}});var r=n(57437);n(2265);var s=n(6435);function i(e){let{children:t,...n}=e;return(0,r.jsx)(s.f,{...n,children:t})}},75344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(57437),s=n(2265),i=n(26261);n(22932);var o=n(82749),a=n(6435),c=n(16691),l=n.n(c),u=n(61396),d=n.n(u),f=n(63014);function m(e){let{children:t}=e,{socket:n}=(0,s.useContext)(i.SocketContext),[c,u]=(0,s.useState)(null),{theme:m,setTheme:h}=(0,a.F)(),{data:b}=(0,o.useSession)();return(0,s.useEffect)(()=>{u(m)},[m]),(0,s.useEffect)(()=>{setTimeout(()=>{try{document.querySelector("df-messenger").shadowRoot.querySelector(".df-messenger-wrapper").querySelector("#widgetIcon").style.bottom="10vh"}catch(e){}},3e3)},[]),(0,s.useEffect)(()=>{n&&(null==n||n.emit("join",e=>{console.log(e)}),null==n||n.on("message",e=>(console.log("message rec",e),f.Am.info("Message from ".concat(e.senderName," : ").concat(e.text," : ").concat(""!=e.image?" image":""," : ").concat(""!=e.video?" video ":"")),e)),console.log("joined again"))},[n]),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(f.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:c}),(0,r.jsxs)("div",{className:"my-3 mx-2 sm:m-1 h-10 flex items-center justify-between",children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("h5",{className:" font-bold",children:"Workspace"})}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("button",{onClick:()=>h("dark"==m?"light":"dark"),children:(0,r.jsx)(l(),{style:{filter:"dark"==c?"brightness(0) invert(1)":"brightness(100%) invert(0)"},className:"".concat("light"==c?"filter-invert":""),src:"".concat("light"==c?"/light-mode.png":"/dark-mode.png"),height:"30",width:"30",alt:"light-mode"})}),(null==b?void 0:b.authToken)&&(0,r.jsxs)("button",{onClick:()=>(0,o.signOut)(),className:"BtnLogout w-10 mb-2 mt-2",children:[(0,r.jsx)("div",{className:"signLogout",children:(0,r.jsx)("svg",{viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})})}),(0,r.jsx)("div",{className:"textLogout",children:"Logout"})]})]})]}),t]})}n(66518)},5380:function(e,t,n){"use strict";n.r(t),n.d(t,{ReduxProvider:function(){return u}});var r=n(57437);n(2265);var s=n(20064);let i=(0,s.oM)({name:"user",initialState:{user:{_id:"",name:"",email:"",groups:[]}},reducers:{setUser:(e,t)=>{e.user=t.payload}}}),{setUser:o}=i.actions;var a=i.reducer,c=n(8587);let l=(0,s.xC)({reducer:{userReducer:a}});function u(e){let{children:t}=e;return(0,r.jsxs)(c.zt,{store:l,children:[" ",t]})}},22932:function(){},33177:function(){}},function(e){e.O(0,[996,685,691,388,837,971,361,744],function(){return e(e.s=69905)}),_N_E=e.O()}]);