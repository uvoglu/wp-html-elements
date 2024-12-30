(()=>{"use strict";var e,t={694:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.blockEditor,l=window.wp.components,o=window.wp.element,r=window.wp.i18n;function a({content:e,onChangeContent:o}){return(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,r.__)("Settings","html-elements"),initialOpen:!0},(0,t.createElement)(l.TextareaControl,{label:(0,r.__)("Text Content","html-elements"),help:(0,r.__)("The text content of the element","html-elements"),value:e,onChange:o})))}const i=window.wp.primitives,c=(0,t.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(i.Path,{d:"M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z"})),s=JSON.parse('{"UU":"html/text-content","DD":"HTML Text Content"}');(0,e.registerBlockType)(s.UU,{...function({defaultBlockLabel:e}){return{icon:c,__experimentalLabel:({content:t})=>t?.substring(0,60)||e}}({defaultBlockLabel:s.DD}),edit:function({attributes:e,setAttributes:n}){const{content:l}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{content:l,onChangeContent:e=>n({content:e||null})}),(0,t.createElement)(o.RawHTML,null,l))},save:function({attributes:e}){const{content:n}=e;return(0,t.createElement)(o.RawHTML,null,n)}})}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,n,o,r)=>{if(!n){var a=1/0;for(h=0;h<e.length;h++){for(var[n,o,r]=e[h],i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(h--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[n,o,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={89:0,614:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var h=c(l)}for(t&&t(n);s<a.length;s++)r=a[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(h)},n=globalThis.webpackChunkhtml_elements=globalThis.webpackChunkhtml_elements||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=l.O(void 0,[614],(()=>l(694)));o=l.O(o)})();