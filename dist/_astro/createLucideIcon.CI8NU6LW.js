import{r as c}from"./index.RH_Wq4ov.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function C(){if(p)return u;p=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(a,o,t){var i=null;if(t!==void 0&&(i=""+t),o.key!==void 0&&(i=""+o.key),"key"in o){t={};for(var n in o)n!=="key"&&(t[n]=o[n])}else t=o;return o=t.ref,{$$typeof:e,type:a,key:i,ref:o!==void 0?o:null,props:t}}return u.Fragment=r,u.jsx=s,u.jsxs=s,u}var d;function E(){return d||(d=1,l.exports=C()),l.exports}var L=E();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase()),x=e=>{const r=w(e);return r.charAt(0).toUpperCase()+r.slice(1)},m=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim(),k=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:t,iconNode:i,...n},f)=>c.createElement("svg",{ref:f,...A,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:m("lucide",o),...!t&&!k(n)&&{"aria-hidden":"true"},...n},[...i.map(([R,v])=>c.createElement(R,v)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,r)=>{const s=c.forwardRef(({className:a,...o},t)=>c.createElement(j,{ref:t,iconNode:r,className:m(`lucide-${h(x(e))}`,`lucide-${e}`,a),...o}));return s.displayName=x(e),s};export{T as c,L as j};
