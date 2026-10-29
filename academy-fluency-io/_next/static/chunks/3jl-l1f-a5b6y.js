(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,927977,t=>{"use strict";let e;var r,a,n,i,s=t.i(843476),o=t.i(672464),l=t.i(639372),f=t.i(750214),h=t.i(831360);function c({user:t,children:e}){let r=(0,l.createStore)();return(0,f.useHydrateAtoms)([[h.currentUserAtom,t]],{store:r}),(0,s.jsx)(o.Provider,{store:r,children:e})}var u=t.i(916112),d=t.i(261163),p=t.i(859200),m=t.i(361503);let g={brand:{primary:{pure:"#6A48ED",hover:"#734ffb","01":"#EDE5FC","02":"#8D6BF6","03":"#332173","04":"#CFC2FF","05":"#A68FFF","06":"#F5F2FF"},secondary:{dark:"#150D31","01":"#392379","02":"#543CA8","03":"#320361","04":"#521DC2","05":"#563AC5","06":"#311D6D"}},extended:t.i(155319).default,highlight:{pure:"#FF377D","02":"#55FF7B",blood:"#D31B23",done:"#9AFFCF",gold:"#F7BD30",pinky:"#F59EA3",alert:"#FF6341",cloud:"#75C9ED"},basic:m.default,system:{support:{light:"#E6E9ED"}},transparency:{transparent:"transparent",black:{25:"rgba(0, 0, 0, 0.25)",50:"rgba(0, 0, 0, 0.5)"},linear:{0:"linear-gradient(180deg, rgba(240, 243, 255, 0.58) 0%, rgba(255, 255, 255, 0) 100%)","03":"rgba(253, 252, 255, 0.15)",25:"linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",30:"linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",40:"linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"},card:"linear-gradient(359.76deg, #6B47ED 37.7%, rgba(107, 71, 237, 0.835294) 45.68%, rgba(107, 71, 237, 0) 59.18%)"},background:{global:{default:"#FFFFFF",5:"#FCFDFF",7:"#F9FBFF"}},neutral:{pure:{dark:"#EDF1F2"}}};var y=t.i(40064),_=t.i(831487);let b={radii:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","4xl":"1.75rem",full:"9999px"},breakpoints:p.breakpoints,fonts:_.fonts,colors:g,shadows:{md:"0 0.25rem 1rem rgba(0, 0, 0, 0.12)",lg:"0 0.5rem 2.25rem rgba(0, 0, 0, 0.17)",xl:"0 1rem 3rem rgba(0, 0, 0, 0.22)",blue:"0px 0.25rem 2.5rem rgba(85, 123, 255, 0.24)",black:"0px 4px 40px rgba(0, 0, 0, 0.25)"},textStyles:{h1:{fontFamily:"heading",fontSize:"5rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"5rem"},h2:{fontFamily:"heading",fontSize:"4.25rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"4.375rem"},h3:{fontFamily:"heading",fontSize:"3rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"3.5rem"},h4:{fontFamily:"heading",fontSize:"2rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"2.375rem"},h5:{fontFamily:"heading",fontSize:"1.5rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.75rem"},h6:{fontFamily:"heading",fontSize:"1rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},h7:{fontFamily:"heading",fontSize:"1.125rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.5rem"},h8:{fontFamily:"heading",fontSize:"1.125rem",fontStyle:"normal",fontWeight:"400",letterSpacing:"0",lineHeight:"1.625rem"},h9:{fontFamily:"heading",fontSize:"0.75rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},"heading-highlight":{fontFamily:"fluencyFont",fontSize:"2.75rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"3.5rem"},"body-01-400":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"400",letterSpacing:"0",lineHeight:"1.375rem"},"body-01-500":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.375rem"},"body-02":{fontFamily:"body",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"400",letterSpacing:"0",lineHeight:"1.375rem"},"body-link-01":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"700",letterSpacing:"0",lineHeight:"1.375rem"},"body-link-02":{fontFamily:"body",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"700",letterSpacing:"0",lineHeight:"1.375rem"},"support-subtitle":{fontFamily:"body",fontSize:"1.25rem",fontStyle:"normal",fontWeight:"400",letterSpacing:"0",lineHeight:"1.375rem"},"support-button-primary":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"2rem"},"support-label-primary":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},"support-label-secondary":{fontFamily:"body",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},"support-caption-01":{fontFamily:"body",fontSize:"1rem",fontStyle:"normal",fontWeight:"700",letterSpacing:"0",lineHeight:"1.125rem"},"support-caption-02-500":{fontFamily:"body",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},"support-caption-02-700":{fontFamily:"body",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"700",letterSpacing:"0",lineHeight:"1.125rem"},"support-caption-03":{fontFamily:"body",fontSize:"0.75rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.125rem"},"support-caption-04-500":{fontFamily:"body",fontSize:"0.625rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1rem"},"support-caption-04-700":{fontFamily:"body",fontSize:"0.625rem",fontStyle:"normal",fontWeight:"700",letterSpacing:"0",lineHeight:"1rem"},"support-highlight":{fontFamily:"GT Walsheim Pro",fontSize:"3.5rem",fontStyle:"normal",fontWeight:"600",letterSpacing:"0",lineHeight:"3.5rem"},"support-tag":{fontFamily:"GT Walsheim Pro",fontSize:"1.5rem",fontStyle:"normal",fontWeight:"500",letterSpacing:"0",lineHeight:"1.75rem"}},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},components:y.default,config:{cssVarPrefix:"fa",initialColorMode:"light",useSystemColorMode:!1}};var w=t.i(861745);function v({locale:t,...e}){if(!t)throw Error(void 0);return(0,s.jsx)(w.IntlProvider,{locale:t,...e})}var k={},x=function(){let t;if(r)return k;r=1,Object.defineProperty(k,"__esModule",{value:!0}),k.parseCookie=f,k.parse=f,k.stringifyCookie=function(t,r){let n=r?.encode||encodeURIComponent,i=[];for(let r of Object.keys(t)){let s=t[r];if(void 0===s)continue;if(!e.test(r))throw TypeError(`cookie name is invalid: ${r}`);let o=n(s);if(!a.test(o))throw TypeError(`cookie val is invalid: ${s}`);i.push(`${r}=${o}`)}return i.join("; ")},k.stringifySetCookie=h,k.serialize=h,k.parseSetCookie=function(t,e){let r=e?.decode||p,a=t.length,n=c(t,0,a),i=u(t,0,n),o=-1===i?{name:"",value:r(d(t,0,n))}:{name:d(t,0,i),value:r(d(t,i+1,n))},l=n+1;for(;l<a;){let e=c(t,l,a),r=u(t,l,e),n=-1===r?d(t,l,e):d(t,l,r),i=-1===r?void 0:d(t,r+1,e);switch(n.toLowerCase()){case"httponly":o.httpOnly=!0;break;case"secure":o.secure=!0;break;case"partitioned":o.partitioned=!0;break;case"domain":o.domain=i;break;case"path":o.path=i;break;case"max-age":i&&s.test(i)&&(o.maxAge=Number(i));break;case"expires":if(!i)break;let f=new Date(i);Number.isFinite(f.valueOf())&&(o.expires=f);break;case"priority":if(!i)break;let h=i.toLowerCase();("low"===h||"medium"===h||"high"===h)&&(o.priority=h);break;case"samesite":if(!i)break;let p=i.toLowerCase();("lax"===p||"strict"===p||"none"===p)&&(o.sameSite=p)}l=e+1}return o},k.stringifySetCookie=h,k.serialize=h;let e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=/^-?\d+$/,o=Object.prototype.toString,l=((t=function(){}).prototype=Object.create(null),t);function f(t,e){let r=new l,a=t.length;if(a<2)return r;let n=e?.decode||p,i=0;do{let e=u(t,i,a);if(-1===e)break;let s=c(t,i,a);if(e>s){i=t.lastIndexOf(";",e-1)+1;continue}let o=d(t,i,e);void 0===r[o]&&(r[o]=n(d(t,e+1,s))),i=s+1}while(i<a)return r}function h(t,r,s){let l="object"==typeof t?t:{...s,name:t,value:String(r)},f=("object"==typeof r?r:s)?.encode||encodeURIComponent;if(!e.test(l.name))throw TypeError(`argument name is invalid: ${l.name}`);let h=l.value?f(l.value):"";if(!a.test(h))throw TypeError(`argument val is invalid: ${l.value}`);let c=l.name+"="+h;if(void 0!==l.maxAge){if(!Number.isInteger(l.maxAge))throw TypeError(`option maxAge is invalid: ${l.maxAge}`);c+="; Max-Age="+l.maxAge}if(l.domain){if(!n.test(l.domain))throw TypeError(`option domain is invalid: ${l.domain}`);c+="; Domain="+l.domain}if(l.path){if(!i.test(l.path))throw TypeError(`option path is invalid: ${l.path}`);c+="; Path="+l.path}if(l.expires){var u;if(u=l.expires,"[object Date]"!==o.call(u)||!Number.isFinite(l.expires.valueOf()))throw TypeError(`option expires is invalid: ${l.expires}`);c+="; Expires="+l.expires.toUTCString()}if(l.httpOnly&&(c+="; HttpOnly"),l.secure&&(c+="; Secure"),l.partitioned&&(c+="; Partitioned"),l.priority)switch("string"==typeof l.priority?l.priority.toLowerCase():void 0){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError(`option priority is invalid: ${l.priority}`)}if(l.sameSite)switch("string"==typeof l.sameSite?l.sameSite.toLowerCase():l.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError(`option sameSite is invalid: ${l.sameSite}`)}return c}function c(t,e,r){let a=t.indexOf(";",e);return -1===a?r:a}function u(t,e,r){let a=t.indexOf("=",e);return a<r?a:-1}function d(t,e,r){let a=e,n=r;do{let e=t.charCodeAt(a);if(32!==e&&9!==e)break}while(++a<n)for(;n>a;){let e=t.charCodeAt(n-1);if(32!==e&&9!==e)break;n--}return t.slice(a,n)}function p(t){if(-1===t.indexOf("%"))return t;try{return decodeURIComponent(t)}catch(e){return t}}return k}();function S(t,e={}){var r;let a=(r=t)&&"j"===r[0]&&":"===r[1]?r.substr(2):r;if(!e.doNotParse)try{return JSON.parse(a)}catch(t){}return t}class U{constructor(t,e={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;let t=this.cookies;this.cookies=x.parse(document.cookie),this._checkChanges(t)};const r="u"<typeof document?"":document.cookie;this.cookies=function(t){return"string"==typeof t?x.parse(t):"object"==typeof t&&null!==t?t:{}}(t||r),this.defaultSetOptions=e,this.HAS_DOCUMENT_COOKIE=function(){let t="u"<typeof globalThis?void 0:globalThis.TEST_HAS_DOCUMENT_COOKIE;return"boolean"==typeof t?t:"object"==typeof document&&"string"==typeof document.cookie}()}_emitChange(t){for(let e=0;e<this.changeListeners.length;++e)this.changeListeners[e](t)}_checkChanges(t){new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach(e=>{t[e]!==this.cookies[e]&&this._emitChange({name:e,value:S(this.cookies[e])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(t,e={}){return e.doNotUpdate||this.update(),S(this.cookies[t],e)}getAll(t={}){t.doNotUpdate||this.update();let e={};for(let r in this.cookies)e[r]=S(this.cookies[r],t);return e}set(t,e,r){r=r?Object.assign(Object.assign({},this.defaultSetOptions),r):this.defaultSetOptions;let a="string"==typeof e?e:JSON.stringify(e);this.cookies=Object.assign(Object.assign({},this.cookies),{[t]:a}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=x.serialize(t,a,r)),this._emitChange({name:t,value:e,options:r})}remove(t,e){let r=e=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),e),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=x.serialize(t,"",r)),this._emitChange({name:t,value:void 0,options:e})}addChangeListener(t){this.changeListeners.push(t),this.HAS_DOCUMENT_COOKIE&&1===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(t){let e=this.changeListeners.indexOf(t);e>=0&&this.changeListeners.splice(e,1),this.HAS_DOCUMENT_COOKIE&&0===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}removeAllChangeListeners(){for(;this.changeListeners.length>0;)this.removeChangeListener(this.changeListeners[0])}}var F=t.i(271645);let{Provider:C,Consumer:A}=F.createContext(null),E=t=>{let e=F.useMemo(()=>t.cookies?t.cookies:new U(void 0,t.defaultSetOptions),[t.cookies,t.defaultSetOptions]);return F.createElement(C,{value:e},t.children)};"function"==typeof SuppressedError&&SuppressedError;var z={exports:{}},O={};!function(){if(!i){i=1;var t=(n||(n=1,z.exports=function(){if(a)return O;a=1;var t="function"==typeof Symbol&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,o=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,c=t?Symbol.for("react.forward_ref"):60112,u=t?Symbol.for("react.suspense"):60113,d=t?Symbol.for("react.suspense_list"):60120,p=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,g=t?Symbol.for("react.block"):60121,y=t?Symbol.for("react.fundamental"):60117,_=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var a=t.$$typeof;switch(a){case e:switch(t=t.type){case f:case h:case n:case s:case i:case u:return t;default:switch(t=t&&t.$$typeof){case l:case c:case m:case p:case o:return t;default:return a}}case r:return a}}}function v(t){return w(t)===h}return O.AsyncMode=f,O.ConcurrentMode=h,O.ContextConsumer=l,O.ContextProvider=o,O.Element=e,O.ForwardRef=c,O.Fragment=n,O.Lazy=m,O.Memo=p,O.Portal=r,O.Profiler=s,O.StrictMode=i,O.Suspense=u,O.isAsyncMode=function(t){return v(t)||w(t)===f},O.isConcurrentMode=v,O.isContextConsumer=function(t){return w(t)===l},O.isContextProvider=function(t){return w(t)===o},O.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===e},O.isForwardRef=function(t){return w(t)===c},O.isFragment=function(t){return w(t)===n},O.isLazy=function(t){return w(t)===m},O.isMemo=function(t){return w(t)===p},O.isPortal=function(t){return w(t)===r},O.isProfiler=function(t){return w(t)===s},O.isStrictMode=function(t){return w(t)===i},O.isSuspense=function(t){return w(t)===u},O.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===n||t===h||t===s||t===i||t===u||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===p||t.$$typeof===o||t.$$typeof===l||t.$$typeof===c||t.$$typeof===y||t.$$typeof===_||t.$$typeof===b||t.$$typeof===g)},O.typeOf=w,O}()),z.exports),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[t.Memo]=s;Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype}}(),"u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?F.useLayoutEffect:F.useEffect;var D=t.i(884364);let M=()=>(0,s.jsx)(D.Global,{styles:`
         @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('/fonts/GTWalsheimPro-Regular.woff2') format('woff2'),
            url('/fonts/GTWalsheimPro-Regular.woff') format('woff'),
            url('/fonts/GTWalsheimPro-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('/fonts/GTWalsheimPro-Medium.eot');
          src: url('/fonts/GTWalsheimPro-Medium.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/GTWalsheimPro-Medium.woff2') format('woff2'),
            url('/fonts/GTWalsheimPro-Medium.woff') format('woff'),
            url('/fonts/GTWalsheimPro-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('/fonts/GTWalsheimPro-Bold.woff2') format('woff2'),
            url('/fonts/GTWalsheimPro-Bold.woff') format('woff'),
            url('/fonts/GTWalsheimPro-Bold.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('/fonts/GTWalsheimPro-UltraBold.eot');
          src: url('/fonts/GTWalsheimPro-UltraBold.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/GTWalsheimPro-UltraBold.woff2') format('woff2'),
            url('/fonts/GTWalsheimPro-UltraBold.woff') format('woff'),
            url('/fonts/GTWalsheimPro-UltraBold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdzeFb5N.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdXeFb5N.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdLeFb5N.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd7eFb5N.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd_eFb5N.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdHeFQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIxsdO_q.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIVsdO_q.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIJsdO_q.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI5sdO_q.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI9sdO_q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIxsdO_q.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIVsdO_q.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIJsdO_q.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI5sdO_q.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AI9sdO_q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdO_q.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdO_q.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdO_q.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdO_q.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdO_q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}),P=()=>(0,s.jsx)(D.Global,{styles:`
    html {
      overscroll-behavior: none;
      overflow-y: auto;
      -webkit-overflow-scrolling: auto;
      overflow: hidden;
      height: 100%;
  
    }
    body {
      overflow: hidden;
      overscroll-behavior: none;
      height: 100%;
      background: transparent
    }
    #root {
      overscroll-behavior: none;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box
    }
    
    .hide-scrollbar::-webkit-scrollbar {}

    ::-moz-selection: {
      background-color: var(--fa-colors-brand-primary-pure);
      color: #ffffff;
    }

    ::selection {
      background-color: var(--fa-colors-brand-primary-pure);
      color: #ffffff;
    }


    /* width */
    .custom-notifications-scroll::-webkit-scrollbar {
      width: 12px;
      height: 30px;
    }

    .custom-notifications-scroll::-webkit-scrollbar:vertical {
      width: 14px;
    }


    /* Track */
    .custom-notifications-scroll::-webkit-scrollbar-track {
      background: transparent;
      margin: 30px;
    }

    .custom-notifications-scroll::-webkit-scrollbar-thumb {
      background: var(--fa-colors-brand-secondary-02);
      border-radius: 20px;
      border: 8px solid transparent;
      background-clip: content-box;
      box-shadow: 0px 4px 40px #0000002a;
      height: 68px
    }

    .custom-notifications-scroll::-webkit-scrollbar-thumb:vertical {
      background: var(--fa-colors-brand-primary-04);
      background-clip: content-box;
      border: 4px solid white;
    }


   /*Custom scroll*/

    /* width */
    .custom-scroll {
      scrollbar-color: var(--fa-colors-brand-primary-pure) var(--fa-colors-brand-primary-02)
    }


    .custom-scroll::-webkit-scrollbar {
      width: 12px;
      height: 100%;
    }


    .custom-scroll::-webkit-scrollbar:vertical {
      width: 14px;
    }


    .custom-scroll::-webkit-scrollbar-button {
      background: pink;
      height: 0;
    }


    /* Track */
    .custom-scroll::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    .custom-scroll::-webkit-scrollbar-thumb {
      background: var(--fa-colors-brand-secondary-02);
      border-radius: 20px;
      border: 8px solid transparent;
      background-clip: content-box;
      box-shadow: 0px 4px 40px #0000002a;
      height: 68px;
      width: 12px
    }

    .custom-scroll::-webkit-scrollbar-thumb:vertical {
      background: var(--fa-colors-brand-primary-04);
      background-clip: content-box;
      border: 4px solid transparent;
    }


    /* Chakra button focus */

    button.chakra-button:focus {
      box-shadow: none;
    }


    /*  Custom scroll horizontal */

    /* width */

    .custom-scroll-horizontal::-webkit-scrollbar {
      margin: 10px;
    }

    .custom-scroll-horizontal::-webkit-scrollbar {
      width: 100%;
      height: 10px;
    }


    /* Handle */
    .custom-scroll-horizontal::-webkit-scrollbar-thumb {
      background: var(--fa-colors-brand-secondary-01);
      border-radius: 30px;
      box-shadow: 0px 4px 40px #0000002a;
      height: 10px;
    }

   /* Custom scroll hidden */

    /* width */
    .custom-scroll-hidden::-webkit-scrollbar {
      display: none;
    }

    /* Shimmer */
    .shimmer {
      background: linear-gradient(
        90deg,
        var(--fa-colors-brand-primary-02) 30%,
        var(--fa-colors-brand-primary-hover) 50%,
        var(--fa-colors-brand-primary-02) 70%);
      background-size: 300%;
      background-position-x: 0%;
      animation: shimmer 2s infinite linear;
      animation-direction: reverse;
    }

    @keyframes shimmer {
      to {
         background-position-x: 100%
      }
    }

    /* Rich content */
   .rich-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
   }

   .rich-content img {
    border-radius: 4px;
   }
`});var T=t.i(276359),I=t.i(987998);t.i(642262);var B=t.i(291477),L=t.i(105624),j=t.i(819069),Y=t.i(317808),H=t.i(466245),K=t.i(401968);function R(t,e,r){let a,n=0,i=[],s=!0,o=0,l=[],{stop:f}=(0,H.addEventListener)(t,e,"message",({data:t})=>{if("wrote"!==t.type||t.streamId!==r)return;let e=l[0];e&&(e.id===t.id?(l.shift(),n+=t.additionalBytesCount,i.push(t.result),a=t.trailer,e.writeCallback?e.writeCallback(t.result.byteLength):e.finishCallback&&e.finishCallback()):e.id<t.id&&f())});function h(){let t=0===i.length?new Uint8Array(0):(0,K.concatBuffers)(i.concat(a)),e={rawBytesCount:n,output:t,outputBytesCount:t.byteLength,encoding:"deflate"};return n=0,i=[],e}function c(){s||(e.postMessage({action:"reset",streamId:r}),s=!0)}return{isAsync:!0,get isEmpty(){return s},write(t,a){e.postMessage({action:"write",id:o,data:t,streamId:r}),l.push({id:o,writeCallback:a,data:t}),s=!1,o+=1},finish(t){c(),l.length?(l.forEach(t=>{delete t.writeCallback}),l[l.length-1].finishCallback=()=>t(h())):t(h())},finishSync(){c();let t=l.map(t=>t.data).join("");return l.length=0,{...h(),pendingData:t}},estimateEncodedBytesCount:t=>t.length/8,stop(){f()}}}var q=t.i(949316),W=t.i(283632),$=t.i(570797),Q=t.i(660536),N=t.i(773827);function V({configuredUrl:t,error:e,source:r,scriptType:a}){var n;if(W.display.error(`${r} failed to start: an error occurred while initializing the ${a}:`,e),e instanceof Event||e instanceof Error&&((n=e.message).includes("Content Security Policy")||n.includes("requires 'TrustedScriptURL'"))){let e;e=t?`Please make sure the ${a} URL ${t} is correct and CSP is correctly configured.`:"Please make sure CSP is correctly configured.",W.display.error(`${e} See documentation at ${W.DOCS_ORIGIN}/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay`)}else"worker"===a&&(0,q.addTelemetryError)(e)}let G=30*Q.ONE_SECOND;function J(t){return new Worker(t.workerUrl||URL.createObjectURL(new Blob(['(()=>{function t(t){if(1===t.length)return t[0];const e=t.reduce((t,e)=>t+e.length,0),a=new Uint8Array(e);let n=0;for(const e of t)a.set(e,n),n+=e.length;return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),n=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),r=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),i=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=Array(576);e(s);var h=Array(60);e(h);var l=Array(512);e(l);var _=Array(256);e(_);var o=Array(29);e(o);var d,u,f,c=Array(30);function p(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function g(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(c);var v=function(t){return t<256?l[t]:l[256+(t>>>7)]},w=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},m=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,w(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},b=function(t,e,a){m(t,a[2*e],a[2*e+1])},y=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},z=function(t,e,a){var n,r,i=Array(16),s=0;for(n=1;n<=15;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=y(i[h]++,h))}},k=function(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},x=function(t){t.bi_valid>8?w(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},A=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},U=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&A(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!A(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},B=function(t,e,r){var i,s,h,l,d=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],s=t.pending_buf[t.l_buf+d],d++,0===i?b(t,s,e):(h=_[s],b(t,h+256+1,e),0!==(l=a[h])&&(s-=o[h],m(t,s,l)),i--,h=v(i),b(t,h,r),0!==(l=n[h])&&(i-=c[h],m(t,i,l)))}while(d<t.last_lit);b(t,256,e)},I=function(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,_=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<l;a++)0!==i[2*a]?(t.heap[++t.heap_len]=_=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=_<2?++_:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=_,a=t.heap_len>>1;a>=1;a--)U(t,i,a);r=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],U(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,U(t,i,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,i,s,h,l=e.dyn_tree,_=e.max_code,o=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=15;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(i=l[2*l[2*(n=t.heap[a])+1]+1]+1)>c&&(i=c,p++),l[2*n+1]=i,n>_||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(o[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(p>0);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--a])>_||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}(t,e),z(i,_,t.bl_count)},E=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},C=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{b(t,r,t.bl_tree)}while(0!==--h);else 0!==r?(r!==i&&(b(t,r,t.bl_tree),h--),b(t,16,t.bl_tree),m(t,h-3,2)):h<=10?(b(t,17,t.bl_tree),m(t,h-3,3)):(b(t,18,t.bl_tree),m(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},D=!1,M=function(t,e,a,n){m(t,0+(n?1:0),3),function(t,e,a){x(t),w(t,a),w(t,~a),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a)},j=M,L=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},S=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),T=function(t,e,a,n){var r=S,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t},O={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},q=j,F=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(_[a]+256+1)]++,t.dyn_dtree[2*v(e)]++),t.last_lit===t.lit_bufsize-1},G=-2,H=258,J=262,K=103,N=113,P=666,Q=function(t,e){return t.msg=O[e],e},R=function(t){return(t<<1)-(t>4?9:0)},V=function(t){for(var e=t.length;--e>=0;)t[e]=0},W=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},X=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Y=function(t,e){(function(t,e,a,n){var r,l,_=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),I(t,t.l_desc),I(t,t.d_desc),_=function(t){var e;for(E(t,t.dyn_ltree,t.l_desc.max_code),E(t,t.dyn_dtree,t.d_desc.max_code),I(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*i[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),r=t.opt_len+3+7>>>3,(l=t.static_len+3+7>>>3)<=r&&(r=l)):r=l=a+5,a+4<=r&&-1!==e?M(t,e,a,n):4===t.strategy||l===r?(m(t,2+(n?1:0),3),B(t,s,h)):(m(t,4+(n?1:0),3),function(t,e,a,n){var r;for(m(t,e-257,5),m(t,a-1,5),m(t,n-4,4),r=0;r<n;r++)m(t,t.bl_tree[2*i[r]+1],3);C(t,t.dyn_ltree,e-1),C(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,_+1),B(t,t.dyn_ltree,t.dyn_dtree)),k(t),n&&x(t)})(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,X(t.strm)},Z=function(t,e){t.pending_buf[t.pending++]=e},$=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},tt=function(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,e.set(t.input.subarray(t.next_in,t.next_in+r),a),1===t.state.wrap?t.adler=L(t.adler,e,r,a):2===t.state.wrap&&(t.adler=T(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)},et=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-J?t.strstart-(t.w_size-J):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+H,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=H-(u-i),i=u-H,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!==--r);return s<=t.lookahead?s:t.lookahead},at=function(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-J)){t.window.set(t.window.subarray(s,s+s),0),t.match_start-=s,t.strstart-=s,t.block_start-=s,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=s?n-s:0}while(--a);e=a=s;do{n=t.prev[--e],t.prev[e]=n>=s?n-s:0}while(--a);r+=s}if(0===t.strm.avail_in)break;if(a=tt(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=W(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=W(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<J&&0!==t.strm.avail_in)},nt=function(t,e){for(var a,n;;){if(t.lookahead<J){if(at(t),t.lookahead<J&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-J&&(t.match_length=et(t,a)),t.match_length>=3)if(n=F(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=W(t,t.ins_h,t.window[t.strstart+1]);else n=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2},rt=function(t,e){for(var a,n,r;;){if(t.lookahead<J){if(at(t),t.lookahead<J&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-J&&(t.match_length=et(t,a),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=F(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!==--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Y(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=F(t,0,t.window[t.strstart-1]))&&Y(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=F(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2};function it(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var st=[new it(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(at(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Y(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-J&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Y(t,!1),t.strm.avail_out),1)}),new it(4,4,8,4,nt),new it(4,5,16,8,nt),new it(4,6,32,32,nt),new it(4,4,16,16,rt),new it(8,16,32,32,rt),new it(8,16,128,128,rt),new it(8,32,128,256,rt),new it(32,128,258,1024,rt),new it(32,258,258,4096,rt)];function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),V(this.dyn_ltree),V(this.dyn_dtree),V(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),V(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),V(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}for(var lt=function(t){var e,i=function(t){if(!t||!t.state)return Q(t,G);t.total_in=t.total_out=0,t.data_type=2;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:N,t.adler=2===e.wrap?0:1,e.last_flush=0,function(t){D||(function(){var t,e,i,g,v,w=Array(16);for(i=0,g=0;g<28;g++)for(o[g]=i,t=0;t<1<<a[g];t++)_[i++]=g;for(_[i-1]=g,v=0,g=0;g<16;g++)for(c[g]=v,t=0;t<1<<n[g];t++)l[v++]=g;for(v>>=7;g<30;g++)for(c[g]=v<<7,t=0;t<1<<n[g]-7;t++)l[256+v++]=g;for(e=0;e<=15;e++)w[e]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,w[8]++;for(;t<=255;)s[2*t+1]=9,t++,w[9]++;for(;t<=279;)s[2*t+1]=7,t++,w[7]++;for(;t<=287;)s[2*t+1]=8,t++,w[8]++;for(z(s,287,w),t=0;t<30;t++)h[2*t+1]=5,h[2*t]=y(t,5);d=new p(s,a,257,286,15),u=new p(h,n,0,30,15),f=new p([],r,0,19,7)}(),D=!0),t.l_desc=new g(t.dyn_ltree,d),t.d_desc=new g(t.dyn_dtree,u),t.bl_desc=new g(t.bl_tree,f),t.bi_buf=0,t.bi_valid=0,k(t)}(e),0}(t);return 0===i&&((e=t.state).window_size=2*e.w_size,V(e.head),e.max_lazy_match=st[e.level].max_lazy,e.good_match=st[e.level].good_length,e.nice_match=st[e.level].nice_length,e.max_chain_length=st[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),i},_t=function(t,e){var a,n;if(!t||!t.state||e>5||e<0)return t?Q(t,G):G;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===P&&4!==e)return Q(t,0===t.avail_out?-5:G);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Z(r,31),Z(r,139),Z(r,8),r.gzhead?(Z(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Z(r,255&r.gzhead.time),Z(r,r.gzhead.time>>8&255),Z(r,r.gzhead.time>>16&255),Z(r,r.gzhead.time>>24&255),Z(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Z(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Z(r,255&r.gzhead.extra.length),Z(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=T(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Z(r,0),Z(r,0),Z(r,0),Z(r,0),Z(r,0),Z(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Z(r,3),r.status=N);else{var h=8+(r.w_bits-8<<4)<<8;h|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(h|=32),h+=31-h%31,r.status=N,$(r,h),0!==r.strstart&&($(r,t.adler>>>16),$(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending!==r.pending_buf_size));)Z(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Z(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Z(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=K)}else r.status=K;if(r.status===K&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&X(t),r.pending+2<=r.pending_buf_size&&(Z(r,255&t.adler),Z(r,t.adler>>8&255),t.adler=0,r.status=N)):r.status=N),0!==r.pending){if(X(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&R(e)<=R(i)&&4!==e)return Q(t,-5);if(r.status===P&&0!==t.avail_in)return Q(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&r.status!==P){var l=2===r.strategy?function(t,e){for(var a;;){if(0===t.lookahead&&(at(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,a=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=H){if(at(t),t.lookahead<=H&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+H;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=H-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=F(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2}(r,e):st[r.level].func(r,e);if(3!==l&&4!==l||(r.status=P),1===l||3===l)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===l&&(1===e?function(t){m(t,2,3),b(t,256,s),function(t){16===t.bi_valid?(w(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}(r):5!==e&&(q(r,0,0,!1),3===e&&(V(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),X(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(Z(r,255&t.adler),Z(r,t.adler>>8&255),Z(r,t.adler>>16&255),Z(r,t.adler>>24&255),Z(r,255&t.total_in),Z(r,t.total_in>>8&255),Z(r,t.total_in>>16&255),Z(r,t.total_in>>24&255)):($(r,t.adler>>>16),$(r,65535&t.adler)),X(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},ot=function(t){if(!t||!t.state)return G;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==K&&e!==N&&e!==P?Q(t,G):(t.state=null,e===N?Q(t,-3):0)},dt=new Uint8Array(256),ut=0;ut<256;ut++)dt[ut]=ut>=252?6:ut>=248?5:ut>=240?4:ut>=224?3:ut>=192?2:1;dt[254]=dt[254]=1;var ft=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},ct=Object.prototype.toString;function pt(){this.options={level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ft,this.strm.avail_out=0;var e,a,n=function(t,e,a,n,r,i){if(!t)return G;var s=1;if(-1===e&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||8!==a||n<8||n>15||e<0||e>9||i<0||i>4)return Q(t,G);8===n&&(n=9);var h=new ht;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,lt(t)}(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==n)throw Error(O[n]);if(t.header&&(e=this.strm,a=t.header,e&&e.state&&(2!==e.state.wrap||(e.state.gzhead=a))),t.dictionary){var r;if(r="[object ArrayBuffer]"===ct.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(n=function(t,e){var a=e.length;if(!t||!t.state)return G;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return G;if(1===r&&(t.adler=L(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(V(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,at(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=W(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,at(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,0}(this.strm,r)))throw Error(O[n]);this._dict_set=!0}}function gt(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:e+"",streamId:a})}}function vt(t){const e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}pt.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?4:0,"[object ArrayBuffer]"===ct.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(2===n||3===n)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if(1===(a=_t(r,n)))return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=ot(this.strm),this.onEnd(a),this.ended=!0,0===a;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},pt.prototype.onData=function(t){this.chunks.push(t)},pt.prototype.onEnd=function(t){0===t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e=self){try{const a=new Map;e.addEventListener("message",n=>{try{const r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"6.33.0"};case"write":{let n=e.get(a.streamId);n||(n=new pt,e.set(a.streamId,n));const r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,2),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:vt(n),additionalBytesCount:i.length}}case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){gt(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}})}catch(t){gt(e,t)}}()})();'])))}let X={status:0};function Z(t,e,r){switch(0===X.status&&function(t,e){try{let r=(0,N.mockable)(J)(t),{stop:a}=(0,H.addEventListener)(t,r,"error",r=>{tt(t,e,r)}),{stop:n}=(0,H.addEventListener)(t,r,"message",({data:r})=>{var a;"errored"===r.type?tt(t,e,r.error,r.streamId):"initialized"===r.type&&(a=r.version,1===X.status&&(X={status:3,worker:X.worker,stop:X.stop,version:a}))});r.postMessage({action:"init"}),(0,$.setTimeout)(()=>{var t;return t=e,void(1===X.status&&(W.display.error(`${t} failed to start: a timeout occurred while initializing the Worker`),X.initializationFailureCallbacks.forEach(t=>t()),X={status:2}))},G),X={status:1,worker:r,stop:()=>{a(),n()},initializationFailureCallbacks:[]}}catch(r){tt(t,e,r)}}(t,e),X.status){case 1:return X.initializationFailureCallbacks.push(r),X.worker;case 3:return X.worker}}function tt(t,e,r,a){1===X.status||0===X.status?(V({configuredUrl:t.workerUrl,error:r,source:e,scriptType:"worker"}),1===X.status&&X.initializationFailureCallbacks.forEach(t=>t()),X={status:2}):(0,q.addTelemetryError)(r,{worker_version:3===X.status&&X.version,stream_id:a})}function te(){return"function"==typeof Array.from&&"function"==typeof CSSSupportsRule&&"function"==typeof URL.createObjectURL&&"forEach"in NodeList.prototype}var tr=t.i(359680),ta=t.i(670997),tn=t.i(582207),ti=t.i(889642);async function ts(){try{return await (0,N.mockable)(to)()}catch(t){V({error:t,source:"Recorder",scriptType:"module"})}}async function to(){return(await t.A(283518)).startRecording}async function tl(t,e,r){try{return await r}finally{t.notify(e)}}var tf=t.i(461348),th=t.i(869587),tc=t.i(68922);async function tu(){try{return await (0,N.mockable)(td)()}catch(t){V({error:t,source:"Profiler",scriptType:"module"})}}async function td(){return(await t.A(757169)).createRumProfiler}let tp=function(){let t;if((0,L.canUseEventBridge)()&&!(0,L.bridgeSupports)("records")||!te())return{start:j.noop,stop:j.noop,getReplayStats:()=>void 0,onRumStart:j.noop,isRecording:()=>!1,getSessionReplayLink:()=>void 0};let{strategy:e,shouldStartImmediately:r}=(t=0,{strategy:{start(){t=1},stop(){t=2},isRecording:()=>!1,getSessionReplayLink:j.noop},shouldStartImmediately:e=>1===t||0===t&&!e.startSessionReplayRecordingManually});return{start:t=>e.start(t),stop:()=>e.stop(),getSessionReplayLink:()=>e.getSessionReplayLink(),onRumStart:function(t,a,n,i,s,o){let l;e=function(t,e,r,a,n,i){let s,o=0;e.subscribe(9,()=>{(2===o||3===o)&&(c(),o=1)}),e.subscribe(10,()=>{1===o&&h()});let l=new tn.Observable;!function(t,e){let r,a,n;if(!t.metricsEnabled)return j.noop;let{unsubscribe:i}=e.subscribe(t=>{switch(t.type){case"start":r={forced:t.forced,timestamp:(0,Q.timeStampNow)()},a=void 0,n=void 0;break;case"document-ready":r&&(a=(0,Q.elapsed)(r.timestamp,(0,Q.timeStampNow)()));break;case"recorder-settled":r&&(n=(0,Q.elapsed)(r.timestamp,(0,Q.timeStampNow)()));break;case"aborted":case"deflate-encoder-load-failed":case"recorder-load-failed":case"succeeded":var e,s,o,l;i(),r&&(0,q.addTelemetryMetrics)("Recorder init metrics",{metrics:(e=r.forced,s=n,o=(0,Q.elapsed)(r.timestamp,(0,Q.timeStampNow)()),l=t.type,{forced:e,loadRecorderModuleDuration:s,recorderInitDuration:o,result:l,waitForDocReadyDuration:a})})}})}(i,l);let f=async f=>{l.notify({type:"start",forced:f});let[h]=await Promise.all([tl(l,{type:"recorder-settled"},ts()),tl(l,{type:"document-ready"},(0,tr.asyncRunOnReadyState)(t,"interactive"))]);if(2!==o)return void l.notify({type:"aborted"});if(!h){o=0,l.notify({type:"recorder-load-failed"});return}let c=n();if(!c){o=0,l.notify({type:"deflate-encoder-load-failed"});return}({stop:s}=h(e,t,r,a,c,i)),o=3,l.notify({type:"succeeded"})};function h(t){var e,a,n,i,s;let l=r.findTrackedSession();if(e=l,a=t,!e||0===e.sessionReplay&&(!a||!a.force)){o=1;return}if(2===(n=o)||3===n)return;o=2;let h=(i=l,(s=t)&&s.force&&0===i.sessionReplay||!1);f(h).catch(ta.monitorError),h&&r.setForcedReplay()}function c(){3===o&&(null==s||s()),o=0}return{start:h,stop:c,getSessionReplayLink:()=>{var e,n,i;let s,l;return e=0!==o,n=s=r.findTrackedSession(),i=e,l=te()?n?0===n.sessionReplay?"incorrect-session-plan":i?void 0:"replay-not-started":"rum-not-tracked":"browser-not-supported",function(t,{session:e,viewContext:r,errorType:a}){var n;let i,s,o=e?e.id:"no-session-id",l=[];void 0!==a&&l.push(`error-type=${a}`),r&&(l.push(`seed=${r.id}`),l.push(`from=${r.startClocks.timeStamp}`));let f=(i=(n=t).site,s=n.subdomain||function(t){switch(t.site){case ti.INTAKE_SITE_US1:case ti.INTAKE_SITE_EU1:return"app";case ti.INTAKE_SITE_STAGING:return"dd";default:return}}(n),`https://${s?`${s}.`:""}${i}`),h=`/rum/replay/sessions/${o}`;return`${f}${h}?${l.join("&")}`}(t,{viewContext:a.findView(),errorType:l,session:s})},isRecording:()=>3===o}}(a,t,n,i,function(){return!l&&(null!=s||(s=Z(a,"Datadog Session Replay",()=>e.stop())),s&&(l=R(a,s,1))),l},o),r(a)&&e.start()},isRecording:()=>3===X.status&&e.isRecording(),getReplayStats:t=>3===X.status?(0,Y.getReplayStats)(t):void 0}}(),tm=(0,B.makeRumPublicApi)(tp,{onRumStart:function(t,r,a,n,i,s){let o,l=n.findTrackedSession();if(!l||!(0,tf.isSampled)(l.id,a.profilingSampleRate))return;let f=(o={status:"starting"},r.register(0,({eventType:t})=>t!==tc.RumEventType.VIEW&&t!==tc.RumEventType.LONG_TASK&&t!==tc.RumEventType.ACTION&&t!==tc.RumEventType.VITAL?th.SKIPPED:{type:t,_dd:{profiling:o}}),{get:()=>o,set:t=>{o=t}});void 0===(0,I.getGlobalObject)().Profiler?f.set({status:"error",error_reason:"not-supported-by-browser"}):tu().then(r=>{r?(e=r(a,t,n,f,s,i,void 0)).start():f.set({status:"error",error_reason:"failed-to-lazy-load"})}).catch(ta.monitorError)},stop:()=>{null==e||e.stop()}},{startDeflateWorker:Z,createDeflateEncoder:R,sdkName:"rum"});(0,T.defineGlobal)((0,I.getGlobalObject)(),"DD_RUM",tm);var tg=t.i(914732);function ty({user:t,children:e}){return(0,F.useEffect)(()=>{var e;(0,tg.initHotjar)(t),e=t,window.DD_RUM||window.__DATADOG_INITIALIZED__||(window.__DATADOG_INITIALIZED__=!0,tm.init({applicationId:"79f387c8-f0b4-4f16-873e-bcf21dd7b035",clientToken:"pub4a4f5037e8d0cde299571bda741e4270",site:"datadoghq.com",service:"lms-web",env:"prod",sessionSampleRate:10,traceSampleRate:0,sessionReplaySampleRate:0,defaultPrivacyLevel:"mask-user-input"}),tm.setUser({id:e.id}))},[]),e}var t_=t.i(338493);let tb=(0,l.atom)(!1),tw=(0,l.atom)(null);var tv=t.i(889125),tk=t.i(453402),tx=t.i(415544),tS=t.i(824358);function tU({children:t}){return!function(){let[t,e]=(0,o.useAtom)(tb),[r,a]=(0,o.useAtom)(tw),[n,i]=(0,o.useAtom)(tv.memhackUserAtom);async function s(){try{let t,r;e(!0),(t=(0,t_.getCookieValue)(tx.MemhackCookies.SESSION_TOKEN))||(t=await (0,tk.getSessionToken)()),null!=t&&(a(t),(0,t_.setClientCookie)(tx.MemhackCookies.SESSION_TOKEN,t),r=await (0,tk.getUser)(),i(r))}catch(t){t instanceof tS.AppException&&console.error("Handled Error",{error:{message:t.message,stack:t.stack,name:t.name,cause:t.cause},context:"memhack-session",action:"getSession",userAgent:window.navigator.userAgent})}finally{e(!1)}}(0,F.useEffect)(()=>{s()},[])}(),t}var tF=t.i(64626);function tC({children:t}){return(0,F.useEffect)(()=>{(async()=>{if(!(0,t_.getCookieValue)("student-region"))try{await (0,tF.getStudentProfile)()}catch(t){console.error("Error loading student region:",t)}})()},[]),t}t.i(707572);var tA=t.i(835072),tE=t.i(144124);function tz({children:t,profile:e,locale:r,messages:a}){let n=(0,d.extendTheme)(b);return(0,s.jsx)(E,{children:(0,s.jsx)(c,{user:e,children:(0,s.jsx)(ty,{user:e,children:(0,s.jsx)(tC,{children:(0,s.jsx)(tE.TimezoneProvider,{children:(0,s.jsx)(tU,{children:(0,s.jsx)(tA.OnboardingProvider,{children:(0,s.jsxs)(u.ChakraProvider,{theme:n,resetCSS:!0,children:[(0,s.jsx)(M,{}),(0,s.jsx)(P,{}),(0,s.jsx)(v,{messages:a,locale:r,timeZone:(0,tE.getTimezone)(),children:t})]})})})})})})})})}var tO=t.i(659085),tD=t.i(474232),tD=tD,tM=t.i(270283);function tP({locale:t}){let e=(0,F.useRef)(!1);return(0,F.useEffect)(()=>{e.current||(e.current=!0,(async()=>{if(!(0,t_.getCookieValue)("NEXT_LOCALE")){(0,t_.setClientCookie)("NEXT_LOCALE",t,{maxAge:2592e3,path:"/",sameSite:"lax"});try{let e=new tM.PreferencesApi((0,t_.getClientCookies)(),(0,t_.getClientHeaders)()),r=await e.getStudentProfile();if(r?.display_language)return;await e.updateDisplayLanguage(t)}catch(t){}}})())},[t]),null}t.s(["default",0,function({children:t,locale:e,messages:r,profile:a}){return a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(tO.ReduxProfileScript,{profile:a}),(0,s.jsx)(tP,{locale:e}),(0,s.jsx)(tO.GTMScript,{}),(0,s.jsx)(tO.AmplitudeScript,{userId:a.id}),(0,s.jsx)(tz,{profile:a,locale:e,messages:r,children:t}),(0,s.jsx)(tO.GAScript,{})]}):(0,s.jsx)(tD.default,{})}],927977)},970976,t=>{"use strict";var e=t.i(843476),r=t.i(619273),a=t.i(175555),n=t.i(540143),i=t.i(814448),s=t.i(915823),o=t.i(114272),l=class extends s.Subscribable{#t;#e;#r;constructor(t={}){super(),this.config=t,this.#t=new Set,this.#e=new Map,this.#r=0}build(t,e,r){let a=new o.Mutation({client:t,mutationCache:this,mutationId:++this.#r,options:t.defaultMutationOptions(e),state:r});return this.add(a),a}add(t){this.#t.add(t);let e=f(t);if("string"==typeof e){let r=this.#e.get(e);r?r.push(t):this.#e.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#t.delete(t)){let e=f(t);if("string"==typeof e){let r=this.#e.get(e);if(r)if(r.length>1){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}else r[0]===t&&this.#e.delete(e)}}this.notify({type:"removed",mutation:t})}canRun(t){let e=f(t);if("string"!=typeof e)return!0;{let r=this.#e.get(e)?.find(t=>"pending"===t.state.status);return!r||r===t}}runNext(t){let e=f(t);return"string"==typeof e?this.#e.get(e)?.find(e=>e!==t&&e.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){n.notifyManager.batch(()=>{this.#t.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,r.matchMutation)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,r.matchMutation)(t,e))}notify(t){n.notifyManager.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return n.notifyManager.batch(()=>Promise.all(t.map(t=>t.continue().catch(r.noop))))}};function f(t){return t.options.scope?.id}var h=s,c=t.i(286491),u=class extends h.Subscribable{#a;constructor(t={}){super(),this.config=t,this.#a=new Map}build(t,e,a){let n=e.queryKey,i=e.queryHash??(0,r.hashQueryKeyByOptions)(n,e),s=this.get(i);return s||(s=new c.Query({client:t,queryKey:n,queryHash:i,options:t.defaultQueryOptions(e),state:a,defaultOptions:t.getQueryDefaults(n)}),this.add(s)),s}add(t){this.#a.has(t.queryHash)||(this.#a.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){this.#a.get(t.queryHash)===t&&(t.destroy(),this.#a.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.notifyManager.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#a.get(t)}getAll(){return[...this.#a.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,r.matchQuery)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,r.matchQuery)(t,e)):e}notify(t){n.notifyManager.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.notifyManager.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.notifyManager.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},d=class{#n;#i;#s;#o;#l;#f;#h;#c;constructor(t={}){this.#n=t.queryCache||new u,this.#i=t.mutationCache||new l,this.#s=t.defaultOptions||{},this.#o=new Map,this.#l=new Map,this.#f=0}mount(){this.#f++,1===this.#f&&(this.#h=a.focusManager.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#n.onFocus())}),this.#c=i.onlineManager.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#n.onOnline())}))}unmount(){this.#f--,0===this.#f&&(this.#h?.(),this.#h=void 0,this.#c?.(),this.#c=void 0)}isFetching(t){return this.#n.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#i.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#n.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),a=this.#n.build(this,e),n=a.state.data;return void 0===n?this.fetchQuery(t):(t.revalidateIfStale&&a.isStaleByTime((0,r.resolveQueryValue)(e.staleTime,a))&&this.prefetchQuery(e),Promise.resolve(n))}getQueriesData(t){return this.#n.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,a){let n=this.defaultQueryOptions({queryKey:t}),i=this.#n.get(n.queryHash)?.state.data,s=(0,r.functionalUpdate)(e,i);if(void 0!==s)return this.#n.build(this,n).setData(s,{...a,manual:!0})}setQueriesData(t,e,r){return n.notifyManager.batch(()=>this.#n.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,r)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#n.get(e.queryHash)?.state}removeQueries(t){let e=this.#n;n.notifyManager.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let r=this.#n;return n.notifyManager.batch(()=>{let a=r.findAll(t),n=new Set(a);return a.forEach(t=>{t.reset()}),this.refetchQueries({type:"active",predicate:t=>n.has(t)},e)})}cancelQueries(t,e={}){let a={revert:!0,...e};return Promise.all(n.notifyManager.batch(()=>this.#n.findAll(t).map(t=>t.cancel(a)))).then(r.noop).catch(r.noop)}invalidateQueries(t,e={}){return n.notifyManager.batch(()=>(this.#n.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},e))}refetchQueries(t,e={}){let a={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(n.notifyManager.batch(()=>this.#n.findAll(t).filter(t=>!t.isDisabled()&&!t.isStatic()).map(t=>{let e=t.fetch(void 0,a);return a.throwOnError||(e=e.catch(r.noop)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(r.noop)}async query(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let a=this.#n.build(this,e),n=a.isStaleByTime((0,r.resolveQueryValue)(e.staleTime,a))?await a.fetch(e):a.state.data,i=e.select;return i?i(n):n}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let a=this.#n.build(this,e);return a.isStaleByTime((0,r.resolveQueryValue)(e.staleTime,a))?a.fetch(e):Promise.resolve(a.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(r.noop).catch(r.noop)}infiniteQuery(t){return t._type="infinite",this.query(t)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(r.noop).catch(r.noop)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return i.onlineManager.isOnline()?this.#i.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#n}getMutationCache(){return this.#i}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#o.set((0,r.hashKey)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#o.values()],a={};return e.forEach(e=>{(0,r.partialMatchKey)(t,e.queryKey)&&Object.assign(a,e.defaultOptions)}),a}setMutationDefaults(t,e){this.#l.set((0,r.hashKey)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#l.values()],a={};return e.forEach(e=>{(0,r.partialMatchKey)(t,e.mutationKey)&&Object.assign(a,e.defaultOptions)}),a}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#s.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,r.hashQueryKeyByOptions)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===r.skipToken&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#s.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#n.clear(),this.#i.clear()}},p=t.i(912598);let m=function(){return null},g=new d;t.s(["QueryProvider",0,function({children:t}){return(0,e.jsxs)(p.QueryClientProvider,{client:g,children:[t,(0,e.jsx)(m,{initialIsOpen:!1})]})}],970976)}]);

//# sourceMappingURL=3m_-5ui5waqqw.js.map