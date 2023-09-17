import{_ as T,o as n,c as h,b as t,aQ as c,bX as V,r as g,a as o,u as s,w as r,k as i,f as _,F as y,Z as F,d as S,bZ as u}from"./app.728ed408.js";import{_ as $}from"./PageHeader.2dd5b2f1.js";import{T as E,_ as v}from"./Tab.46f71713.js";import{F as C,T as I}from"./Facebook.c8b1b43d.js";const P={},O={class:"fill-current h-6 w-6",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A=t("path",{d:"M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"},null,-1),B=[A];function D(m,p){return n(),h("svg",O,B)}const L=T(P,[["render",D]]),N={class:"row-py mb-2xl w-full max-w-3xl mx-auto"},R={class:"w-full row-px mb-lg"},U={class:"mr-xs"},z=t("span",null,"Facebook",-1),j={class:"mr-xs"},H=t("span",null,"Twitter",-1),M={class:"mr-xs"},Z=t("span",null,"Unsplash",-1),Q=t("span",null,"Tenor",-1),X={class:"row-px"},d="Third Party Services",q={__name:"Services",props:["services"],setup(m){const p=m,w=c(()=>u(()=>import("./TwitterServiceForm.ab42644e.js"),["assets/TwitterServiceForm.ab42644e.js","assets/app.728ed408.js","assets/app.9cafd788.css","assets/useNotifications.c2b16cb7.js","assets/Panel.0c8ee20c.js","assets/Input.1db4f859.js","assets/Facebook.c8b1b43d.js","assets/PrimaryButton.bd184003.js","assets/HorizontalGroup.f1a1e32b.js","assets/Error.e6659205.js","assets/ReadDocHelp.d92daf3c.js","assets/Select.7832c5cc.js"])),x=c(()=>u(()=>import("./FacebookServiceForm.f3b37657.js"),["assets/FacebookServiceForm.f3b37657.js","assets/app.728ed408.js","assets/app.9cafd788.css","assets/useNotifications.c2b16cb7.js","assets/Panel.0c8ee20c.js","assets/Input.1db4f859.js","assets/Facebook.c8b1b43d.js","assets/PrimaryButton.bd184003.js","assets/HorizontalGroup.f1a1e32b.js","assets/Error.e6659205.js","assets/ReadDocHelp.d92daf3c.js"])),k=c(()=>u(()=>import("./UnsplashServiceForm.8f2b1821.js"),["assets/UnsplashServiceForm.8f2b1821.js","assets/app.728ed408.js","assets/app.9cafd788.css","assets/useNotifications.c2b16cb7.js","assets/Panel.0c8ee20c.js","assets/Input.1db4f859.js","assets/PrimaryButton.bd184003.js","assets/HorizontalGroup.f1a1e32b.js","assets/Error.e6659205.js","assets/ReadDocHelp.d92daf3c.js","assets/PageHeader.2dd5b2f1.js","assets/Tab.46f71713.js","assets/Facebook.c8b1b43d.js"])),b=c(()=>u(()=>import("./TenorServiceForm.5e43cac1.js"),["assets/TenorServiceForm.5e43cac1.js","assets/app.728ed408.js","assets/app.9cafd788.css","assets/useNotifications.c2b16cb7.js","assets/Panel.0c8ee20c.js","assets/Input.1db4f859.js","assets/PrimaryButton.bd184003.js","assets/HorizontalGroup.f1a1e32b.js","assets/Error.e6659205.js","assets/ReadDocHelp.d92daf3c.js"])),l=V(p.services),e=g("facebook");return(G,a)=>(n(),h(y,null,[o(s(F),{title:d}),t("div",N,[o($,{title:d},{description:r(()=>[S(" This page is for storing the credentials for third party services. ")]),_:1}),t("div",R,[o(E,{class:"overflow-x-auto !flex-nowrap max-w-full w-full"},{default:r(()=>[o(v,{onClick:a[0]||(a[0]=f=>e.value="facebook"),active:e.value==="facebook"},{default:r(()=>[t("span",U,[o(C,{class:"text-facebook !h-5 !w-5"})]),z]),_:1},8,["active"]),o(v,{onClick:a[1]||(a[1]=f=>e.value="twitter"),active:e.value==="twitter"},{default:r(()=>[t("span",j,[o(I,{class:"text-twitter !h-5 !w-5"})]),H]),_:1},8,["active"]),o(v,{onClick:a[2]||(a[2]=f=>e.value="unsplash"),active:e.value==="unsplash"},{default:r(()=>[t("span",M,[o(L,{class:"text-black !h-5 !w-5"})]),Z]),_:1},8,["active"]),o(v,{onClick:a[3]||(a[3]=f=>e.value="tenor"),active:e.value==="tenor"},{default:r(()=>[Q]),_:1},8,["active"])]),_:1})]),t("div",X,[e.value==="facebook"?(n(),i(s(x),{key:0,form:s(l).facebook},null,8,["form"])):_("",!0),e.value==="twitter"?(n(),i(s(w),{key:1,form:s(l).twitter},null,8,["form"])):_("",!0),e.value==="unsplash"?(n(),i(s(k),{key:2,form:s(l).unsplash},null,8,["form"])):_("",!0),e.value==="tenor"?(n(),i(s(b),{key:3,form:s(l).tenor},null,8,["form"])):_("",!0)])])],64))}},ee=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{ee as S,L as U};