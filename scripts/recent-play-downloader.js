(()=>{var e={9306:function(e){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,r;return(n="application/font-woff",r="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[t(e).toLowerCase()]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){return c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var o=new FileReader;o.onloadend=function(){var e=o.result.split(/,/)[1];t(e)},o.readAsDataURL(r.response)}else n?t(n):i("cannot fetch resource: "+e+", status: "+r.status)},r.ontimeout=function(){n?t(n):i("timeout of 30000ms occured while fetching resource: "+e)},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),c.impl.options.imagePlaceholder){var o=c.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function i(e){console.error(e),t("")}}))},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return t(e)?Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r})):Promise.resolve(e)},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){return o instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o)},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:s,toPng:function(e,t){return l(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return l(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return l(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return l(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function s(e,t){return function(e){void 0===e.imagePlaceholder?c.impl.options.imagePlaceholder=a.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?c.impl.options.cacheBust=a.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return u(e,t.filter,!0)})).then(f).then(d).then((function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function l(e,t){return s(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function u(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return u(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}(t,n.asArray(o),r).then((function(){return t}))}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then((function(){r=window.getComputedStyle(e),o=t.style,r.cssText?o.cssText=r.cssText:function(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}(r,o);var r,o})).then((function(){[":before",":after"].forEach((function(r){!function(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var c=document.createElement("style");c.appendChild(function(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):c(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}(a,r,o)),t.appendChild(c)}}(r)}))})).then((function(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)})).then((function(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))})).then((function(){return t})):t}(e,t)})):Promise.resolve()}function f(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return i.inlineAll(e).then((function(){return e}))}e.exports=c}()},9099:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STANDARD"}},8642:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"];function r(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.DIFFICULTY_CLASSNAME_MAP=new Map([[0,"basic"],[1,"advanced"],[2,"expert"],[3,"master"],[4,"remaster"]]),t.getDifficultyName=function(e){return n[e]},t.getDifficultyByName=r,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return r(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},271:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function r(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=r,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[o,i]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=o/i,c=r(a),s=`✦${c} (${(100*a).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),c}},2347:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const r=n(8642),o=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,r.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const o=n(9099),i=n(2347),a=n(9268),c=n(6991),s=n(87);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n,l){return r(this,void 0,void 0,(function*(){let r=n.get(e);if(!r){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;r=yield(0,c.fetchPage)(o),n.set(e,r)}const u=r.querySelectorAll(".main_wrapper.t_c .m_15"),f={genre:""},d=Array.from(u).map((t=>function(e,t,n,r){const c=e.classList.contains("screw_block"),l=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(c)return r.genre=e.innerText,null;if(l){const c=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!c)return;const l=(0,i.getSongName)(e),u=(0,o.getChartType)(e),f=(0,s.getSongProperties)(n,l,r.genre,u);let d=f?f.lv[t]:0;const g=d>0;return d||(d=(0,a.getDefaultLevel)((0,i.getChartLevel)(e))),{songName:l,genre:r.genre,difficulty:t,level:d,levelIsPrecise:g,chartType:u,achievement:parseFloat(c)}}}(t,e,l,f)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.LATEST_VERSION=20,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],t.validateGameVersion=function(e,n,r=t.LATEST_VERSION){const o="string"==typeof e?parseInt(e):e;return!e||isNaN(o)?r:o>=n&&o<=r?o:r},t.getVersionName=function(e){return n[e]}},8080:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const r=n(5990);t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"],t.saveLanguage=function(e){(0,r.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch((0,r.loadUserPreference)("MaiToolsLang")){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},9268:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e){if(!(e<0))return e.toFixed(1);const t=Math.abs(e),n=Math.floor(t);return n===t?n.toFixed(0):n.toFixed(0)+"+"}},6991:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};function r(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}Object.defineProperty(t,"__esModule",{value:!0}),t.removeScrollControl=t.fetchGameVersion=t.fetchPage=void 0,t.fetchPage=r,t.fetchGameVersion=function e(t){return n(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?parseInt(n.value):e(t=yield r("/maimai-mobile/record/musicVersion/"))}))},t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()}},6689:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4313:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const r=n(6162),o="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return o},t.getMaiToolsBaseUrl=function(){return(0,r.isMaimaiNetOrigin)(window.location.origin)?o:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const o=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,r){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===r?e+t.DX_SONG_NAME_SUFFIX:e};let i={};t.isNicoNicoLink=function(e){return r(this,void 0,void 0,(function*(){if(i.nico===e)return!0;if(i.original===e)return!1;const t=(yield(0,o.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?i.nico=e:i.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSongsByVersion=t.filterSongsByVersion=t.getSongProperties=t.buildSongPropsMap=void 0;const o=n(8642),i=n(134),a=n(6689),c=n(4313),s=n(472),l=/\bdx\s*:\s*([0-9]+)/,u=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,d=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,g=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function m(e){return r(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}function p(e){const t=e.match(l),n=e.match(u),r=e.match(f),i=e.match(d),a=e.match(g);if(t&&n&&r&&i){let e=JSON.parse(n[1]);if(e.length>o.DIFFICULTIES.length){const t=e.pop();e[o.DIFFICULTIES.length-1]=t}return{dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(r[1])),name:(0,s.normalizeSongName)(i[1]),nickname:a&&a[1]}}}function h(e,t){if(!e.has(t.name))return!1;const n=e.get(t.name),r=n.findIndex((e=>t.dx===e.dx));return!(r<0||n[r].nickname!=t.nickname||(n[r]=function(e,t){let n=e.lv;return t.lv instanceof Array&&(n=e.lv.map(((e,n)=>isNaN(t.lv[n])?e:t.lv[n]))),Object.assign(Object.assign(Object.assign({},e),t),{lv:n})}(n[r],t),0))}function y(e,t,n){h(e,t)||(t.debut||0===t.debut||(t.debut=n),e.has(t.name)||e.set(t.name,[]),e.get(t.name).push(t))}t.buildSongPropsMap=function(e,t,n){return r(this,void 0,void 0,(function*(){const o=n.split("\n"),s=new Map;for(const t of o){const n=p(t);n&&y(s,n,e)}const l=yield function(e){return r(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield m(t),r=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const o of Object.keys(n[e]))r.push({name:o,dx:t,lv:n[e][o]})})),r}))}(e);console.log("chartLevelOverrides",l);for(const t of l)y(s,t,e);if("https://maimaidx-eng.com"===t){const e=yield function(){return r(this,void 0,void 0,(function*(){const e=(0,c.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",t=yield m(e),n=[];return["standard","dx"].forEach(((e,r)=>{if(t[e])for(const o of Object.keys(t[e])){const i=t[e][o],a=parseInt(o);for(const e of i)n.push({name:e,dx:r,debut:a})}})),n}))}();console.log("debutVersionOverrides",e);for(const t of e)h(s,t)}const u=(0,a.getRemovedSongs)(t);for(const e of u)s.delete(e);return s.forEach((e=>{for(const t of e)console.assert(null!=t.debut),console.assert(t.debut>=0&&t.debut<=i.LATEST_VERSION),console.assert(t.lv.length>=4)})),s}))},t.getSongProperties=function(e,t,n,r){let o=e.get(t);if(o&&o.length>0){if(o.length>1&&(o=o.filter((e=>e.dx===r)),o.length>1)){const e=(0,s.getSongNickname)(t,n,r);o=o.filter((t=>t.nickname===e))}if(o.length)return o.length>1&&(console.warn(`Found multiple song properties for ${t} ${r}`),console.warn(o)),o[0]}console.warn(`Could not find song properties for ${t} ${r}`)},t.filterSongsByVersion=function(e,t,n,r){const o=[];for(const i of e){const{dx:e,name:a,nickname:c}=i;let s=t.get(a);s&&s.length>0&&(s.length>1&&(s=s.filter((t=>t.dx===e)),s.length>1&&(s=s.filter((e=>e.nickname===c)))),s.length)?(s.length>1&&(console.warn(`Found multiple song properties for ${a} ${e?"[DX]":""}`),console.warn(s)),(0===r&&s[0].debut===n||1===r&&s[0].debut<n)&&o.push(s[0])):console.warn(`Could not find song properties for ${a} ${e?"[DX]":""}`)}return o},t.getSongsByVersion=function(e,t){const n=[];return e.forEach((e=>e.forEach((e=>{e.debut===t&&n.push(e)})))),n}},5990:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const o=n(9099),i=n(2347),a=n(6510),c=n(6991),s=n(472);function l(e){return r(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),r=(0,i.getSongName)(e),a=(0,o.getChartType)(e);let c;"Link"===r&&(c=(yield(0,s.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:r,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return r(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield(0,c.fetchPage)(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return r(this,void 0,void 0,(function*(){const t=yield(0,c.fetchPage)(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return r(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,r)=>{const o={action:n,payload:r};e.postMessage(o,t)}}},396:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(9306)),a=n(8642),c=n(271),s=n(8080),l=n(6991),u=n(4313),f=n(472);!function(e){const t={zh_TW:{date:"日期",songName:"歌曲",difficulty:"難度",achievement:"達成率",stamps:"成就",playDate:"遊玩日期：",newRecordToggleHeading:"顯示：",sortBy:"排序方式：",newRecordsOnly:"只顯示新高分紀錄",allRecords:"全部",olderFirst:"由舊到新",newerFirst:"由新到舊",copy:"複製",copied:"已複製到剪貼簿",downloadAsImage:"存成圖片"},en_US:{date:"Date",songName:"Song",difficulty:"Difficulty",achievement:"Achv",stamps:"Grade",playDate:"Play date:",newRecordToggleHeading:"Display:",sortBy:"Sort by:",newRecordsOnly:"New records only",allRecords:"All",olderFirst:"Older first",newerFirst:"Newer first",copy:"Copy",copied:"Copied to clipboard",downloadAsImage:"Save as image"},ko_KR:{date:"날짜",songName:"노래",difficulty:"난이도",achievement:"정확도",stamps:"등급",playDate:"플레이 일:",newRecordToggleHeading:"표시:",sortBy:"정렬 순서:",newRecordsOnly:"새 기록만",allRecords:"전부",olderFirst:"옛날 기록부터",newerFirst:"최근 기록부터",copy:"복사",copied:"클립보드에 복사되었습니다",downloadAsImage:"이미지로 저장하기"}}[(0,s.getInitialLanguage)()],n=new Map([["fc","FC"],["fcplus","FC+"],["ap","AP"],["applus","AP+"]]),o=new Map([["fs","FS"],["fsplus","FS+"],["fsd","FSD"],["fsdplus","FSD+"]]),d="dateCheckbox",g="newRecordRadio",m="sortByRadio",p="recordRow",h="recordCell",y=["dateCell","songTitleCell","achievementCell","stampsCell"],v=(0,u.getScriptHost)("recent-play-downloader"),_=e.createElement.bind(e),S=6e4*(540+(new Date).getTimezoneOffset());function w(e,t){return t=t||2,e.toString().padStart(t,"0")}function b(e){const t=e.querySelector(".sub_title").children[1].innerText.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return new Date(n.valueOf()-S)}function N(e){try{return e.querySelector(".m_5.p_5.f_13").textContent}catch(t){return console.log(t),console.log(e),""}}function P(e){const t=e.querySelector(".music_img");return t?t.src:""}function E(e){return e.querySelector(".playlog_music_kind_icon").src.endsWith("music_dx.png")?1:0}function x(e){const t=e.children[1].className;let n=t.substring(t.indexOf("_")+1,t.lastIndexOf("_"));return(0,a.getDifficultyByName)(n)}function L(e){return parseFloat(e.querySelector(".playlog_achievement_txt").innerText)}function T(e){const t=e.querySelector("img.playlog_scorerank").src.replace(/\?ver=.*$/,"");return t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")).replace("plus","+").toUpperCase()}function A(e){const t=[],r=e.querySelectorAll(".playlog_result_innerblock > img"),i=r[0].src.replace(/\?ver=.*$/,""),a=i.substring(i.lastIndexOf("/")+1,i.lastIndexOf("."));n.has(a)&&t.push(n.get(a));const s=r[1].src.replace(/\?ver=.*$/,""),l=s.substring(s.lastIndexOf("/")+1,s.lastIndexOf("."));o.has(l)&&t.push(o.get(l));const u=function(e){const t=(0,c.calculateDetailedDxStar)(e);return(0,c.getDxStarText)(t)}(e);return u&&t.push(u),t.join(" / ")}function I(e){return!!e.querySelector(".playlog_achievement_label_block + img.playlog_achievement_newrecord")}function R(e){return e.getFullYear()+"-"+w(e.getMonth()+1)+"-"+w(e.getDate())+" "+w(e.getHours())+":"+w(e.getMinutes())}function O(e,t,n){const r=_("tr");for(const e of t)r.classList.add(e);return e.forEach(((e,t)=>{const o=_(n?"th":"td");"string"==typeof e?o.append(e):(e[1]&&(o.classList.add("songImg"),o.style.backgroundImage=`url("${e[1]}")`),o.append(e[0])),o.classList.add(h),o.classList.add(y[t]),r.append(o)})),r}function C(e,n,r,o){r.innerHTML="",o.innerHTML="",r.append(O([t.date,t.songName,t.achievement,t.stamps],[p],!0)),e.forEach((e=>{o.append(function(e){const t=(0,f.isNiconicoLinkImg)(e.songImgSrc)?"niconico":"",n=(0,f.getSongNickname)(e.songName,t,e.chartType);return O([R(e.date),[n,e.songImgSrc],e.rank+" "+e.achievement.toFixed(4)+"%",e.stamps],[p,a.DIFFICULTY_CLASSNAME_MAP.get(e.difficulty)],!1)}(e))})),n.style.paddingBottom=Math.floor(e.length/2)+2+"px"}function D(){const t=e.querySelectorAll("input."+d),n=new Set;return t.forEach((e=>{e.checked&&n.add(e.value)})),n}function M(e,t){let n=[].concat(e);if(console.log(t),t.dates&&(n=n.filter((e=>t.dates.has(R(e.date).split(" ")[0])))),!t.showAll){const e=new Map;n.forEach((t=>{if(t.isNewRecord){const n=t.difficulty+" "+t.songName;e.delete(n),e.set(n,t)}})),n=[],e.forEach((e=>{n.push(e)}))}return t.olderFirst||n.reverse(),n}function k(n,r){const o=n.reduce(((e,t)=>(e.add(R(t.date).split(" ")[0]),e)),new Set);let a=e.getElementById("recordSummary");a?a.innerHTML="":(a=_("div"),a.id="recordSummary");const c=_("div");c.className="playRecordContainer";const s=_("table"),l=_("thead"),u=_("tbody");s.className="playRecordTable",s.append(l,u),c.append(s);const f=()=>{C(M(n,function(){const t=D();let n=!1;e.getElementsByName(g).forEach((e=>{e.checked&&(n="allRecords"===e.value)}));let r=!0;return e.getElementsByName(m).forEach((e=>{e.checked&&(r="olderFirst"===e.value)})),{dates:t,showAll:n,olderFirst:r}}()),c,l,u)};a.append(function(e,n){const r=_("div");r.className="m_b_10 dateOptionsContainer";const o=_("div");return o.className="t_c m_5",o.append(t.playDate),r.append(o),e.forEach((e=>{const t=_("label");t.className="f_14 dateOptionLabel";const o=_("input");o.type="checkbox",o.className=d,o.value=e,o.checked=!0,o.addEventListener("change",n),t.append(o,e),r.append(t)})),r}(o,f)),a.append(function(e){const n=_("div");n.className="m_b_10 newRecordToggleContainer";const r=_("div");return r.className="t_c m_5",r.append(t.newRecordToggleHeading),n.append(r),["newRecordsOnly","allRecords"].forEach(((r,o)=>{const i=_("label");i.className="f_14 newRecordLabel";const a=_("input");a.type="radio",a.name=g,a.className=g,a.value=r,a.checked=0===o,a.addEventListener("change",e),i.append(a,t[r]),n.append(i)})),n}(f)),a.append(function(e){const n=_("div");n.className="m_b_10 sortByRadioContainer";const r=_("div");return r.className="t_c m_5",r.append(t.sortBy),n.append(r),["newerFirst","olderFirst"].forEach(((r,o)=>{const i=_("label");i.className="f_14 sortByLabel";const a=_("input");a.type="radio",a.name=m,a.className=m,a.value=r,a.checked=0===o,a.addEventListener("change",e),i.append(a,t[r]),n.append(i)})),n}(f));const p=function(n){const r=_("div");r.className="copyBtnContainer";const o=_("button");o.className="copyBtn",o.append(t.copy),r.append(o);let a=e.querySelector(".snackbarContainer"),c=e.querySelector(".snackbar");a||(a=_("div"),a.className="snackbarContainer",a.style.display="none",e.body.append(a)),c||(c=_("div"),c.className="wrapper snackbar",c.innerText=t.copied,a.append(c)),o.addEventListener("click",(t=>{(()=>{const t=window.getSelection(),n=e.createRange();n.selectNodeContents(u),t.removeAllRanges(),t.addRange(n)})(),e.execCommand("copy"),a.style.display="block",c.style.opacity="1",setTimeout((()=>{c.style.opacity="0",setTimeout((()=>{a.style.display="none"}),500)}),4e3)}));const s=_("button");return s.className="downloadImgBtn",s.append(t.downloadAsImage),s.addEventListener("click",(()=>{const t=e.querySelector(".playRecordContainer");i.default.toPng(t).then((e=>{const t="record_"+Array.from(D()).join(",")+".png",n=_("a");n.href=e,n.download=t,n.click()}))})),r.append(s),r}();a.append(p),C(M(n,{olderFirst:!1}),c,l,u),a.append(c),r.insertAdjacentElement("beforebegin",a)}const U=e.querySelector(".main_wrapper > img.title");if(U){const t="recentPlayStyles";if(!e.getElementById(t)){const n=_("link");n.id=t,n.rel="stylesheet",n.href=v+"/scripts/recent-play-downloader.css",n.addEventListener("load",(()=>{(0,l.removeScrollControl)(e),function(){return r(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".main_wrapper .p_10.t_l.f_0.v_b")),n=[];for(const e of t)n.push({date:b(e),songName:N(e),songImgSrc:P(e),chartType:E(e),difficulty:x(e),achievement:L(e),rank:T(e),stamps:A(e),isNewRecord:I(e)});return n.reverse(),n}))}().then((e=>{k(e,U)})).catch((t=>{const n=e.getElementsByTagName("footer")[0],r=_("textarea");n.append(r),r.value=t.message+"\n"+t.stack}))})),e.head.append(n)}}}(document)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(396)})();