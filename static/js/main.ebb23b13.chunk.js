(this["webpackJsonptrial-app"]=this["webpackJsonptrial-app"]||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),s=a(16),i=a.n(s),r=(a(14),a(10)),o=(a(23),a(18).a.initializeApp({apiKey:"AIzaSyBmPGwmLH7hcpb-OjfiDJbDajKsuiSfVRU",authDomain:"login-628eb.firebaseapp.com",projectId:"login-628eb",storageBucket:"login-628eb.appspot.com",messagingSenderId:"914542739667",appId:"1:914542739667:web:6d8b8c77f917b5209f5426",measurementId:"G-EBY6WK3FSP"})),u=a(3),l=function(e){var t=e.email,a=e.setEmail,n=e.password,c=e.setPassword,s=e.handleLogin,i=e.handleSignup,r=e.hasAccount,o=e.setHasAccount,l=e.emailError,d=e.passwordError;return Object(u.jsx)("section",{className:"login",children:Object(u.jsxs)("div",{className:"loginContainer",children:[Object(u.jsx)("h1",{children:"Speak, Friend, and Enter."}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:l}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:d}),Object(u.jsx)("div",{classname:"btnContainer",children:r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:s,children:"Sign in"}),Object(u.jsxs)("p",{children:["Don't have an account? ",Object(u.jsx)("span",{onClick:function(){return o(!r)},children:"Sign up"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:i,children:"Sign up"}),Object(u.jsxs)("p",{children:["Have an account?",Object(u.jsx)("span",{onClick:function(){return o(!r)},children:"Sign in "})]})]})})]})})},d="4700226f7d16902197ee185303540eca",j="https://api.openweathermap.org/data/2.5/",h=function(e){var t=e.handleLogout,a=Object(n.useState)(""),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)({}),l=Object(r.a)(o,2),h=l[0],b=l[1];return Object(u.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>16?"Appwarm":"App",children:Object(u.jsxs)("main",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:"bla",children:"Weather App."}),Object(u.jsx)("button",{className:"button1",onClick:t,children:"Logout"})]}),Object(u.jsx)("div",{className:"search-box",children:Object(u.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return i(e.target.value)},value:s,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(j,"weather?q=").concat(s,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){b(e),i(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"location-box",children:[Object(u.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(u.jsxs)("div",{className:"date",children:[function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)," "]})]}),Object(u.jsxs)("div",{className:"weather-box",children:[Object(u.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xb0C"]}),Object(u.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})},b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),d=i[0],j=i[1],b=Object(n.useState)(""),p=Object(r.a)(b,2),m=p[0],O=p[1],g=Object(n.useState)(""),x=Object(r.a)(g,2),f=x[0],v=x[1],w=Object(n.useState)(""),S=Object(r.a)(w,2),y=S[0],N=S[1],A=Object(n.useState)(!1),C=Object(r.a)(A,2),k=C[0],E=C[1],F=function(){v(""),N("")},P=function(){o.auth().onAuthStateChanged((function(e){e?(j(""),O(""),c(e)):c("")}))};return Object(n.useEffect)((function(){P()}),[]),Object(u.jsx)("div",{className:"App",children:a?Object(u.jsx)(h,{handleLogout:function(){o.auth().signOut()}}):Object(u.jsx)(l,{email:d,setEmail:j,password:m,setPassword:O,handleLogin:function(){F(),o.auth().signInWithEmailAndPassword(d,m).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":v(e.message);break;case"auth/wrong-password":N(e.message)}}))},handleSignup:function(){F(),o.auth().createUserWithEmailAndPassword(d,m).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":v(e.message);break;case"auth/weak-password":N(e.message)}}))},hasAccount:k,setHasAccount:E,emailError:f,passwordError:y})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.ebb23b13.chunk.js.map