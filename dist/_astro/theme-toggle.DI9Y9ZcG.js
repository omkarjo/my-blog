import{c as n,j as t}from"./createLucideIcon.CI8NU6LW.js";import"./index.RH_Wq4ov.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],c=n("moon",s);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],d=n("sun",m);function l(){const a=()=>{const e=document.documentElement.classList.contains("dark");localStorage.setItem("theme",e?"dark":"light"),document.documentElement.setAttribute("data-theme",e?"material-theme-darker":"material-theme-lighter")},o=()=>{const e=document.documentElement;if(!document.startViewTransition){e.classList.toggle("dark"),a();return}document.startViewTransition(()=>{e.classList.toggle("dark"),a()})};return t.jsxs("button",{onClick:o,"aria-label":"Toggle theme",title:"Toggle theme",className:"cursor-pointer",children:[t.jsx(d,{className:"dark:hidden"}),t.jsx(c,{className:"hidden dark:block"})]})}export{l as ThemeToggle};
