import{ag as Z,p as y,ah as x,C as d,ai as z,aj as we,ak as ce,al as at,am as st,an as rt,b as c,X as Le,J as de,q as L,ao as it,u as ot,N as h,P as lt,m as E,n as Pe,r as ne,s as xe,ap as ut,v as Y,x as W,aq as ct,ar as dt,as as R,at as ae,h as Ee,g as q,au as se,E as ft,av as fe,aw as vt,ax as $e,ay as mt,D as ve,y as Ne,az as me,H as gt,aA as ht,aB as ge,aC as K,T as re,W as ie,L as Te,aD as yt,aE as bt,O as Ct,Q as he,Y as St,aF as _t}from"./fMgo6S-z.js";const pt=["top","bottom"],kt=["start","end","left","right"];function wt(e,t){let[n,a]=e.split(" ");return a||(a=Z(pt,n)?"start":Z(kt,n)?"top":"center"),{side:ye(n,t),align:ye(a,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const on=y({border:[Boolean,Number,String]},"border");function ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{borderClasses:d(()=>{const a=z(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`border-${r}`);return s})}}const Lt=[null,"default","comfortable","compact"],un=y({density:{type:String,default:"default",validator:e=>Lt.includes(e)}},"density");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const dn=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function fn(e){return{elevationClasses:d(()=>{const n=z(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Ve=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{roundedClasses:d(()=>{const a=z(e)?e.value:e.rounded,s=z(e)?e.value:e.tile,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const o of String(a).split(" "))r.push(`rounded-${o}`);else(s||a===!1)&&r.push("rounded-0");return r})}}const H=y({tag:{type:String,default:"div"}},"tag");function oe(e){return we(()=>{const t=[],n={};if(e.value.background)if(ce(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&at(e.value.background)){const a=st(e.value.background);if(a.a==null||a.a===1){const s=rt(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ce(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Re(e,t){const n=d(()=>({text:z(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=oe(n);return{textColorClasses:a,textColorStyles:s}}function X(e,t){const n=d(()=>({background:z(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=oe(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const Pt=["elevated","flat","tonal","outlined","text","plain"];function vn(e,t){return c(Le,null,[e&&c("span",{key:"overlay",class:`${t}__overlay`},null),c("span",{key:"underlay",class:`${t}__underlay`},null)])}const mn=y({color:String,variant:{type:String,default:"elevated",validator:e=>Pt.includes(e)}},"variant");function gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();const n=d(()=>{const{variant:r}=de(e);return`${t}--variant-${r}`}),{colorClasses:a,colorStyles:s}=oe(d(()=>{const{variant:r,color:o}=de(e);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const xt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),hn=L(!1)({name:"VDefaultsProvider",props:xt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:r,root:o,scoped:i}=it(e);return ot(a,{reset:r,root:o,scoped:i,disabled:s}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Et=["x-small","small","default","large","x-large"],$t=y({size:{type:[String,Number],default:"default"}},"size");function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return we(()=>{let n,a;return Z(Et,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Tt=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:lt,...E(),...$t(),...H({tag:"i"}),...Pe()},"VIcon"),yn=L()({name:"VIcon",props:Tt(),setup(e,t){let{attrs:n,slots:a}=t;const s=ne(),{themeClasses:r}=xe(e),{iconData:o}=ut(d(()=>s.value||e.icon)),{sizeClasses:i}=Nt(e),{textColorClasses:l,textColorStyles:u}=Re(Y(e,"color"));return W(()=>{var b,v;const f=(b=a.default)==null?void 0:b.call(a);f&&(s.value=(v=ct(f).filter(S=>S.type===dt&&S.children&&typeof S.children=="string")[0])==null?void 0:v.children);const g=!!(n.onClick||n.onClickOnce);return c(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,i.value,l.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[i.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},u.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});function Vt(e,t){const n=ne(),a=R(!1);if(ae){const s=new IntersectionObserver(r=>{a.value=!!r.find(o=>o.isIntersecting)},t);Ee(()=>{s.disconnect()}),q(n,(r,o)=>{o&&(s.unobserve(o),a.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const ze=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ie(e){return{dimensionStyles:d(()=>{const n={},a=h(e.height),s=h(e.maxHeight),r=h(e.maxWidth),o=h(e.minHeight),i=h(e.minWidth),l=h(e.width);return a!=null&&(n.height=a),s!=null&&(n.maxHeight=s),r!=null&&(n.maxWidth=r),o!=null&&(n.minHeight=o),i!=null&&(n.minWidth=i),l!=null&&(n.width=l),n})}}const be={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Bt=y({location:String},"location");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=se();return{locationStyles:d(()=>{if(!e.location)return{};const{side:r,align:o}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function i(u){return n?n(u):0}const l={};return r!=="center"&&(t?l[be[r]]=`calc(100% - ${i(r)}px)`:l[r]=0),o!=="center"?t?l[be[o]]=`calc(100% - ${i(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const zt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...E(),...Bt({location:"top"}),...Ve(),...H(),...Pe()},"VProgressLinear"),It=L()({name:"VProgressLinear",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,t){var j;let{slots:n}=t;const a=ft(e,"modelValue"),{isRtl:s,rtlClasses:r}=se(),{themeClasses:o}=xe(e),{locationStyles:i}=Rt(e),{textColorClasses:l,textColorStyles:u}=Re(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:g}=X(d(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:v}=X(d(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:S,backgroundColorStyles:w}=X(e,"color"),{roundedClasses:D}=Be(e),{intersectionRef:$,isIntersecting:F}=Vt(),P=d(()=>parseFloat(e.max)),p=d(()=>parseFloat(e.height)),N=d(()=>fe(parseFloat(e.bufferValue)/P.value*100,0,100)),I=d(()=>fe(parseFloat(a.value)/P.value*100,0,100)),T=d(()=>s.value!==e.reverse),J=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),V=vt&&((j=window.matchMedia)==null?void 0:j.call(window,"(forced-colors: active)").matches);function Q(m){if(!$.value)return;const{left:C,right:k,width:B}=$.value.getBoundingClientRect(),M=T.value?B-m.clientX+(k-B):m.clientX-C;a.value=Math.round(M/B*P.value)}return W(()=>c(e.tag,{ref:$,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&F.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},D.value,o.value,r.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?i.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&Q},{default:()=>[e.stream&&c("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...u.value,[T.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-N.value,"%"),"--v-progress-linear-stream-to":h(p.value*(T.value?1:-1))}},null),c("div",{class:["v-progress-linear__background",V?void 0:f.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),c("div",{class:["v-progress-linear__buffer",V?void 0:b.value],style:[v.value,{opacity:parseFloat(e.bufferOpacity),width:h(N.value,"%")}]},null),c($e,{name:J.value},{default:()=>[e.indeterminate?c("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>c("div",{key:m,class:["v-progress-linear__indeterminate",m,V?void 0:S.value],style:w.value},null))]):c("div",{class:["v-progress-linear__determinate",V?void 0:S.value],style:[w.value,{width:h(I.value,"%")}]},null)]}),n.default&&c("div",{class:"v-progress-linear__content"},[n.default({value:I.value,buffer:N.value})])]})),{}}}),bn=y({loading:[Boolean,String]},"loader");function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Sn(e,t){var a;let{slots:n}=t;return c("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||c(It,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const jt=["static","relative","fixed","absolute","sticky"],_n=y({position:{type:String,validator:e=>jt.includes(e)}},"position");function pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function Ot(){const e=Ne("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function kn(e,t){var g,b;const n=mt("RouterLink"),a=d(()=>!!(e.href||e.to)),s=d(()=>(a==null?void 0:a.value)||me(t,"click")||me(e,"click"));if(typeof n=="string"||!("useLink"in n)){const v=Y(e,"href");return{isLink:a,isClickable:s,href:v,linkProps:ve({href:v})}}const r=d(()=>({...e,to:Y(()=>e.to||"")})),o=n.useLink(r.value),i=d(()=>e.to?o:void 0),l=Ot(),u=d(()=>{var v,S,w;return i.value?e.exact?l.value?((w=i.value.isExactActive)==null?void 0:w.value)&&gt(i.value.route.value.query,l.value.query):((S=i.value.isExactActive)==null?void 0:S.value)??!1:((v=i.value.isActive)==null?void 0:v.value)??!1:!1}),f=d(()=>{var v;return e.to?(v=i.value)==null?void 0:v.route.value.href:e.href});return{isLink:a,isClickable:s,isActive:u,route:(g=i.value)==null?void 0:g.route,navigate:(b=i.value)==null?void 0:b.navigate,href:f,linkProps:ve({href:f,"aria-current":d(()=>u.value?"page":void 0)})}}const wn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),ee=Symbol("rippleStop"),At=80;function Ce(e,t){e.style.transform=t,e.style.webkitTransform=t}function te(e){return e.constructor.name==="TouchEvent"}function je(e){return e.constructor.name==="KeyboardEvent"}const Wt=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!je(e)){const b=t.getBoundingClientRect(),v=te(e)?e.touches[e.touches.length-1]:e;a=v.clientX-b.left,s=v.clientY-b.top}let r=0,o=.3;(g=t._ripple)!=null&&g.circle?(o=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((a-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const i=`${(t.clientWidth-r*2)/2}px`,l=`${(t.clientHeight-r*2)/2}px`,u=n.center?i:`${a-r}px`,f=n.center?l:`${s-r}px`;return{radius:r,scale:o,x:u,y:f,centerX:i,centerY:l}},G={show(e,t){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=t==null?void 0:t._ripple)!=null&&v.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:r,scale:o,x:i,y:l,centerX:u,centerY:f}=Wt(e,t,n),g=`${r*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ce(s,`translate(${i}, ${l}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ce(s,`translate(${u}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var i;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((i=n.parentNode)==null?void 0:i.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Oe(e){return typeof e>"u"||!!e}function O(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ee])){if(e[ee]=!0,te(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||je(e),n._ripple.class&&(t.class=n._ripple.class),te(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{G.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},At)}else G.show(e,n,t)}}function Se(e){e[ee]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),G.hide(t)}}function Ae(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let A=!1;function We(e){!A&&(e.keyCode===ge.enter||e.keyCode===ge.space)&&(A=!0,O(e))}function He(e){A=!1,_(e)}function De(e){A&&(A=!1,_(e))}function Fe(e,t,n){const{value:a,modifiers:s}=t,r=Oe(a);if(r||G.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=s.center,e._ripple.circle=s.circle,ht(a)&&a.class&&(e._ripple.class=a.class),r&&!n){if(s.stop){e.addEventListener("touchstart",Se,{passive:!0}),e.addEventListener("mousedown",Se);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Ae,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",O),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",We),e.addEventListener("keyup",He),e.addEventListener("blur",De),e.addEventListener("dragstart",_,{passive:!0})}else!r&&n&&Me(e)}function Me(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Ae),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",We),e.removeEventListener("keyup",He),e.removeEventListener("dragstart",_),e.removeEventListener("blur",De)}function Ht(e,t){Fe(e,t,!1)}function Dt(e){delete e._ripple,Me(e)}function Ft(e,t){if(t.value===t.oldValue)return;const n=Oe(t.oldValue);Fe(e,t,n)}const Ln={mounted:Ht,unmounted:Dt,updated:Ft},Mt=y({fluid:{type:Boolean,default:!1},...E(),...ze(),...H()},"VContainer"),Pn=L()({name:"VContainer",props:Mt(),setup(e,t){let{slots:n}=t;const{rtlClasses:a}=se(),{dimensionStyles:s}=Ie(e);return W(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[s.value,e.style]},n)),{}}}),Ue=K.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}),qe=K.reduce((e,t)=>{const n="offset"+re(t);return e[n]={type:[String,Number],default:null},e},{}),Xe=K.reduce((e,t)=>{const n="order"+re(t);return e[n]={type:[String,Number],default:null},e},{}),_e={col:Object.keys(Ue),offset:Object.keys(qe),order:Object.keys(Xe)};function Ut(e,t,n){let a=e;if(!(n==null||n===!1)){if(t){const s=t.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const qt=["auto","start","end","center","baseline","stretch"],Xt=y({cols:{type:[Boolean,String,Number],default:!1},...Ue,offset:{type:[String,Number],default:null},...qe,order:{type:[String,Number],default:null},...Xe,alignSelf:{type:String,default:null,validator:e=>qt.includes(e)},...E(),...H()},"VCol"),xn=L()({name:"VCol",props:Xt(),setup(e,t){let{slots:n}=t;const a=d(()=>{const s=[];let r;for(r in _e)_e[r].forEach(i=>{const l=e[i],u=Ut(r,i,l);u&&s.push(u)});const o=s.some(i=>i.startsWith("v-col-"));return s.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return ie(e.tag,{class:[a.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}}),le=["start","end","center"],Ye=["space-between","space-around","space-evenly"];function ue(e,t){return K.reduce((n,a)=>{const s=e+re(a);return n[s]=t(),n},{})}const Yt=[...le,"baseline","stretch"],Ge=e=>Yt.includes(e),Ke=ue("align",()=>({type:String,default:null,validator:Ge})),Gt=[...le,...Ye],Je=e=>Gt.includes(e),Qe=ue("justify",()=>({type:String,default:null,validator:Je})),Kt=[...le,...Ye,"stretch"],Ze=e=>Kt.includes(e),et=ue("alignContent",()=>({type:String,default:null,validator:Ze})),pe={align:Object.keys(Ke),justify:Object.keys(Qe),alignContent:Object.keys(et)},Jt={align:"align",justify:"justify",alignContent:"align-content"};function Qt(e,t,n){let a=Jt[e];if(n!=null){if(t){const s=t.replace(e,"");a+=`-${s}`}return a+=`-${n}`,a.toLowerCase()}}const Zt=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ge},...Ke,justify:{type:String,default:null,validator:Je},...Qe,alignContent:{type:String,default:null,validator:Ze},...et,...E(),...H()},"VRow"),En=L()({name:"VRow",props:Zt(),setup(e,t){let{slots:n}=t;const a=d(()=>{const s=[];let r;for(r in pe)pe[r].forEach(o=>{const i=e[o],l=Qt(r,o,i);l&&s.push(l)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return ie(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}});function en(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const tt=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...E(),...ze()},"VResponsive"),ke=L()({name:"VResponsive",props:tt(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=en(e),{dimensionStyles:s}=Ie(e);return W(()=>{var r;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[c("div",{class:"v-responsive__sizer",style:a.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&c("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),tn=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),U=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,group:r,...o}=e,{component:i=r?yt:$e,...l}=typeof a=="object"?a:{};return ie(i,Te(typeof a=="string"?{name:s?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:r}).filter(u=>{let[f,g]=u;return g!==void 0})),o),n)};function nn(e,t){if(!ae)return;const n=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},o=new IntersectionObserver(function(){var g;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const u=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!u)return;const f=i.some(b=>b.isIntersecting);s&&(!n.quiet||u.init)&&(!n.once||f||u.init)&&s(f,i,l),f&&n.once?nt(e,t):u.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function nt(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const an={mounted:nn,unmounted:nt},sn=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...tt(),...E(),...Ve(),...tn()},"VImg"),$n=L()({name:"VImg",directives:{intersect:an},props:sn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:r}=X(Y(e,"color")),{roundedClasses:o}=Be(e),i=Ne("VImg"),l=R(""),u=ne(),f=R(e.eager?"loading":"idle"),g=R(),b=R(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=d(()=>v.value.aspect||g.value/b.value||0);q(()=>e.src,()=>{w(f.value!=="idle")}),q(S,(m,C)=>{!m&&C&&u.value&&p(u.value)}),bt(()=>w());function w(m){if(!(e.eager&&m)&&!(ae&&!m&&!e.eager)){if(f.value="loading",v.value.lazySrc){const C=new Image;C.src=v.value.lazySrc,p(C,null)}v.value.src&&Ct(()=>{var C;n("loadstart",((C=u.value)==null?void 0:C.currentSrc)||v.value.src),setTimeout(()=>{var k;if(!i.isUnmounted)if((k=u.value)!=null&&k.complete){if(u.value.naturalWidth||$(),f.value==="error")return;S.value||p(u.value,null),f.value==="loading"&&D()}else S.value||p(u.value),F()})})}}function D(){var m;i.isUnmounted||(F(),p(u.value),f.value="loaded",n("load",((m=u.value)==null?void 0:m.currentSrc)||v.value.src))}function $(){var m;i.isUnmounted||(f.value="error",n("error",((m=u.value)==null?void 0:m.currentSrc)||v.value.src))}function F(){const m=u.value;m&&(l.value=m.currentSrc||m.src)}let P=-1;Ee(()=>{clearTimeout(P)});function p(m){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(P),i.isUnmounted)return;const{naturalHeight:B,naturalWidth:M}=m;B||M?(g.value=M,b.value=B):!m.complete&&f.value==="loading"&&C!=null?P=window.setTimeout(k,C):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const N=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),I=()=>{var k;if(!v.value.src||f.value==="idle")return null;const m=c("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:D,onError:$},null),C=(k=a.sources)==null?void 0:k.call(a);return c(U,{transition:e.transition,appear:!0},{default:()=>[he(C?c("picture",{class:"v-img__picture"},[C,m]):m,[[_t,f.value==="loaded"]])]})},T=()=>c(U,{transition:e.transition},{default:()=>[v.value.lazySrc&&f.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>a.placeholder?c(U,{transition:e.transition,appear:!0},{default:()=>[(f.value==="loading"||f.value==="error"&&!a.error)&&c("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,V=()=>a.error?c(U,{transition:e.transition,appear:!0},{default:()=>[f.value==="error"&&c("div",{class:"v-img__error"},[a.error()])]}):null,Q=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=R(!1);{const m=q(S,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),m())})}return W(()=>{const m=ke.filterProps(e);return he(c(ke,Te({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!j.value},s.value,o.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},r.value,e.style]},m,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(Le,null,[c(I,null,null),c(T,null,null),c(Q,null,null),c(J,null,null),c(V,null,null)]),default:a.default}),[[St("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:u,state:f,naturalWidth:g,naturalHeight:b}}});export{hn as A,En as B,xn as C,$n as D,Pn as E,Sn as L,Ln as R,yn as V,un as a,dn as b,Ve as c,H as d,mn as e,ln as f,fn as g,Be as h,$t as i,Nt as j,Re as k,Vt as l,on as m,ze as n,bn as o,Bt as p,_n as q,wn as r,Ie as s,Cn as t,cn as u,Rt as v,pn as w,kn as x,gn as y,vn as z};
