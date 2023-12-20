import{r as _,o as v,k as w,w as e,b as s,a as t,d as i,O as g}from"./app.587cfedd.js";import{u as h}from"./useNotifications.e3b66c27.js";import{_ as V}from"./Panel.30ee1f7d.js";import{_ as u}from"./Input.b6cedb4b.js";import{T as x}from"./Facebook.afbc5b5e.js";import{_ as y}from"./PrimaryButton.2f15e706.js";import{H as m}from"./HorizontalGroup.913bc707.js";import{_ as c}from"./Error.3b7ea2f5.js";import{_ as k}from"./ReadDocHelp.d12e69a3.js";import{_ as T}from"./Select.bd5ddd82.js";const $={class:"flex items-center"},b={class:"mr-xs"},O=s("span",null,"Twitter",-1),P=s("a",{href:"https://developer.twitter.com/en/portal/projects-and-apps",class:"link",target:"_blank"},"Create an App on Twitter",-1),S=s("option",{value:"legacy"},"Legacy",-1),A=s("option",{value:"free"},"Free",-1),B=s("option",{value:"basic"},"Basic",-1),G={__name:"TwitterServiceForm",props:{form:{required:!0,type:Object}},setup(r){const d=r,{notify:f}=h(),o=_({}),p=()=>{o.value={},g.put(route("mixpost.services.update",{service:"twitter"}),d.form,{preserveScroll:!0,onSuccess(){f("success","Twitter credentials have been saved")},onError:n=>{o.value=n}})};return(n,a)=>(v(),w(V,null,{title:e(()=>[s("div",$,[s("span",b,[t(x,{class:"text-twitter"})]),O])]),description:e(()=>[P,i('. You will need to edit the App Permissions and allow "Read and Write". '),t(k,{href:`${n.$page.props.mixpost.docs_link}/books/services-configuration-mixpost/page/twitter`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(m,{class:"mt-lg"},{title:e(()=>[i("API Key")]),footer:e(()=>[t(c,{message:o.value.client_id},null,8,["message"])]),default:e(()=>[t(u,{modelValue:r.form.client_id,"onUpdate:modelValue":a[0]||(a[0]=l=>r.form.client_id=l),error:o.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[i("API Secret")]),footer:e(()=>[t(c,{message:o.value.client_secret},null,8,["message"])]),default:e(()=>[t(u,{modelValue:r.form.client_secret,"onUpdate:modelValue":a[1]||(a[1]=l=>r.form.client_secret=l),error:o.value.hasOwnProperty("client_secret"),type:"password",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[i("Tier")]),footer:e(()=>[t(c,{message:o.value.environment},null,8,["message"])]),default:e(()=>[t(T,{modelValue:r.form.tier,"onUpdate:modelValue":a[2]||(a[2]=l=>r.form.tier=l),error:o.value.hasOwnProperty("tier"),class:"w-full"},{default:e(()=>[S,A,B]),_:1},8,["modelValue","error"])]),_:1}),t(y,{onClick:p,class:"mt-lg"},{default:e(()=>[i("Save")]),_:1})]),_:1}))}};export{G as default};