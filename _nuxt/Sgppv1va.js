import m from"./M5x-tosP.js";import c from"./DPQjeih8.js";import{u as i,Q as u,G as p,d as l,r as d,K as e,a8 as f,k as y}from"./C0SHh4Ly.js";import{u as g}from"./BrK68esS.js";import"./m1hLjOYf.js";import"./CCiC7lhS.js";import"./kkH78BtT.js";import"./CarwykoW.js";import"./C8_7vXVs.js";import"./CkgZdgXm.js";import"./76o_WpOd.js";import"./bg8CYtfH.js";import"./CaijSqbQ.js";import"./Av3aILkF.js";import"./CIPANtk7.js";async function h(o){i();const t=u(o);{const{data:n}=await g(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=l({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>f(o.component)),n=d({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(m,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(c,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=y(_,[["__scopeId","data-v-9ca9b996"]]);export{E as default};