(this.webpackJsonpsandboxr=this.webpackJsonpsandboxr||[]).push([[0],{20:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e(1),o=e.n(r),a=e(9),c=e.n(a),s=e(2),d=e(3);function l(){var n=Object(s.a)(['\n  /* cardTitle */\n\n  position: static;\n  width: 280px;\n  height: 49px;\n  left: 12px;\n  top: 12px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0;\n\n  font-family: "Lora", serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 36px;\n\n  color: #fcfcfc;\n']);return l=function(){return n},n}var h=d.a.div(l());function u(n){var t=n.title;return Object(i.jsx)(h,{children:t})}function f(){var n=Object(s.a)(['\n  /* body */\n\n  position: static;\n  width: 280px;\n  height: 34px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 0px 0px;\n\n  font-family: "Lato", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  //   line-height: 13px;\n\n  color: #fcfcfc;\n']);return f=function(){return n},n}var p=d.a.div(f());function m(n){var t=n.description;return Object(i.jsx)(p,{children:t})}function x(){var n=Object(s.a)(["\n  /* CardBody */\n\n  /* Auto Layout */\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.75em;\n\n  position: relative;\n  width: 299px;\n  height: 125px;\n  margin: 0;\n"]);return x=function(){return n},n}var b=d.a.div(x());function j(n){var t=n.title,e=n.description;return Object(i.jsxs)(b,{children:[Object(i.jsx)(m,{description:e}),Object(i.jsx)(u,{title:t})]})}function g(){var n=Object(s.a)(["\n  position: relative;\n  width: 300px;\n  height: 287px;\n  left: 0px;\n  top: 0px;\n\n  background: url(.jpg);\n  border-radius: 1.25em;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0px 0px;\n"]);return g=function(){return n},n}var v=d.a.div(g());function w(n){var t=n.imgURL;return Object(i.jsx)(v,{children:Object(i.jsx)("img",{src:t})})}function O(){var n=Object(s.a)(["\n  // padding-bottom: 3%; /* Same as width, sets height */\n  // padding-top: 3%; /* Same as width, sets height */\n  // margin-bottom: 2%; /* (100-32*3)/2 */\n\n  display: flex;\n  flex-direction: column;\n  align-items: middle;\n  padding: 0px;\n\n  position: relative;\n  width: 18.75em;\n  height: 25.8125em;\n  // left: calc(50% - 18.75em / 2);\n  // top: calc(50% - 25.8125em / 2 - 0.5px);\n\n  background: #333333;\n  border: 10px solid #000000;\n  box-shadow: 1.25em 1.25em 0.25em #623cea;\n  border-radius: 1.25em;\n\n  &:hover {\n    box-shadow: 2em 2em 0.25em #623cea;\n  }\n"]);return O=function(){return n},n}var y=d.a.div(O());function L(n){var t=n.cardInfo;return Object(i.jsx)(y,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{imgURL:t.imgURL}),Object(i.jsx)(j,{title:t.title,description:t.description})]})})}e(8);var k=Object.freeze([{title:"{{Lothian, Skyline}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/LothianSky.gif",description:"360 degree memory of a sunrise over a beautiful horse farm in Lothian, MD.",link:"https://lothian-memory.glitch.me"},{title:"{{Sandbox}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/ogsandboxsky.gif",description:"An early project for testing our asset deployment and aframe sky. Featuring Annapolis, MD.",link:"https://angellxr.github.io/oldsandbox/"},{title:"{{Dove Hill}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/dovehill.gif",description:"360 degree memory over a beautiful horse farm in Edgewater, MD.",link:"https://edgewater-dream.glitch.me/"},{title:"{{ChessVR}}",imgURL:"http://www.fillmurray.com/300/280",description:"aframe Chess, because we can.",link:"https://chessvr.glitch.me/"},{title:"{{Hounds, Sunset}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/houndwalk.gif",description:"Aerial view of a Marlboro Hunt Club hound walk, Fall 2020",link:"https://marlboro-hounds.glitch.me/"}]);function R(){var n=Object(s.a)(["\n  position: center;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  // max-width: 140vmin;\n  }\n"]);return R=function(){return n},n}var U=d.a.div(R());function A(n){return Object(i.jsx)(U,{children:Object(i.jsx)("div",{class:"cardgrid",children:k.map((function(n){return Object(i.jsx)("a",{href:n.link,children:Object(i.jsxs)("div",{className:"item",children:[" ",Object(i.jsx)(L,{cardInfo:n})," "]})})}))})})}function S(){var n=Object(s.a)(["\n  position: relative;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  // bottom: 1.28%;\n\n  font-family: Lora; serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12vmin;\n  line-height: 12vmin;\n  /* identical to box height */\n\n  color: #030303;\n"]);return S=function(){return n},n}var I=d.a.div(S());function M(n){n.props;return Object(i.jsx)(I,{children:"XR Collective"})}var C="375px",z="425px",D="768px",B="1024px",E="1440px",H="2560px";"(min-width: ".concat("320px",")"),"(min-width: ".concat(C,")"),"(min-width: ".concat(z,")"),"(min-width: ".concat(D,")"),"(min-width: ".concat(B,")"),"(min-width: ".concat(E,")"),"(min-width: ".concat(H,")"),"(min-width: ".concat(H,")");var X=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("body",{children:[Object(i.jsx)(M,{}),Object(i.jsx)("h3",{children:"Each card contains a VR or AR experience. Browse Worlds, memories, sites, and assets on any device."}),Object(i.jsxs)("p",{children:["We believe in an open and collaborative Metaverse. Submit your project ",Object(i.jsx)("a",{href:"https://forms.gle/UfpUuKmvXQGjuX737",children:"with this form"})," to be featured."]}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://angellxr.com/",children:"back to angellxr.com"})}),Object(i.jsx)("div",{children:Object(i.jsx)(A,{})})]})})};e(20);c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root"))},8:function(n,t,e){}},[[21,1,2]]]);
//# sourceMappingURL=main.7a3e72f7.chunk.js.map