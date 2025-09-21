import{r as l}from"./index.RH_Wq4ov.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function C(){if(m)return c;m=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(s,n,o){var i=null;if(o!==void 0&&(i=""+o),n.key!==void 0&&(i=""+n.key),"key"in n){o={};for(var a in n)a!=="key"&&(o[a]=n[a])}else o=n;return n=o.ref,{$$typeof:t,type:s,key:i,ref:n!==void 0?n:null,props:o}}return c.Fragment=e,c.jsx=r,c.jsxs=r,c}var h;function E(){return h||(h=1,u.exports=C()),u.exports}var d=E();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,s)=>s?s.toUpperCase():r.toLowerCase()),p=t=>{const e=w(t);return e.charAt(0).toUpperCase()+e.slice(1)},k=(...t)=>t.filter((e,r,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===r).join(" ").trim(),T=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:o,iconNode:i,...a},f)=>l.createElement("svg",{ref:f,...y,width:e,height:e,stroke:t,strokeWidth:s?Number(r)*24/Number(e):r,className:k("lucide",n),...!o&&!T(a)&&{"aria-hidden":"true"},...a},[...i.map(([g,v])=>l.createElement(g,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,e)=>{const r=l.forwardRef(({className:s,...n},o)=>l.createElement(j,{ref:o,iconNode:e,className:k(`lucide-${R(p(t))}`,`lucide-${t}`,s),...n}));return r.displayName=p(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],A=x("moon",_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],M=x("sun",L);function b(){const t=()=>{const r=document.documentElement.classList.contains("dark");localStorage.setItem("theme",r?"dark":"light"),document.documentElement.setAttribute("data-theme",r?"material-theme-darker":"material-theme-lighter")},e=()=>{const r=document.documentElement;if(!document.startViewTransition){r.classList.toggle("dark"),t();return}document.startViewTransition(()=>{r.classList.toggle("dark"),t()})};return d.jsxs("button",{onClick:e,"aria-label":"Toggle theme",title:"Toggle theme",className:"cursor-pointer",children:[d.jsx(M,{className:"dark:hidden"}),d.jsx(A,{className:"hidden dark:block"})]})}export{b as ThemeToggle};
