(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{8366:function(e,t,n){"use strict";var r=n(7294),a=n(1664),i=n(1163);var o=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(r),c=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(a),l=function(e){var t=e.children,n=e.size,r=(void 0===n?24:n)+"px";return o.createElement("svg",{"aria-hidden":"true",className:"mgd-icon",focusable:"false",height:r,viewBox:"0 0 24 24",width:r},t)},u=function(e){var t=e.size,n=void 0===t?16:t;return o.createElement(l,{size:n},o.createElement("path",{d:"M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043L23.541,5.627"}))},s=function(e){var t=e.size,n=void 0===t?16:t;return o.createElement(l,{size:n},o.createElement("path",{d:"M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8L0.535,18.373"}))},f=function(e){var t=[];return Object.keys(e).forEach((function(n){n&&e[n]&&t.push(n)})),t.join(" ")},d=function(){return o.createElement("div",{className:"mgd-divider"})},m=function(e){return(e.endsWith("/")?e.slice(0,-1):e)+"/"},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e){var t=e.children,n=e.level,r=void 0===n?1:n,a={className:"mgd-heading mgd-heading--"+r};switch(r){case 2:return o.createElement("h2",v({},a),t);case 3:return o.createElement("h3",v({},a),t);case 4:return o.createElement("h4",v({},a),t);case 5:return o.createElement("h5",v({},a),t);case 1:default:return o.createElement("h1",v({},a),t)}},g=function(e){var t=e.size,n=void 0===t?16:t;return o.createElement(l,{size:n},o.createElement("path",{d:"M18.5 7.497L23.5 12.497 18.5 17.497"}),o.createElement("path",{d:"M23.5 12.497L0.5 12.497"}))},h=function(e){var t=e.size,n=void 0===t?16:t;return o.createElement(l,{size:n},o.createElement("path",{d:"M5.5 17.497L0.5 12.497 5.5 7.497"}),o.createElement("path",{d:"M0.5 12.497L23.5 12.497"}))},E="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;t.Divider=d,t.Footer=function(e){var t=e.children;return o.createElement("div",{className:"mgd-footer"},t)},t.FooterGroup=function(e){var t=e.children,n=e.title;return o.createElement("div",{className:"mgd-footer__group"},n&&o.createElement("div",{className:"mgd-footer__title"},n),o.createElement("ul",{className:"mgd-footer__nav"},t))},t.FooterLink=function(e){var t=e.children,n=e.href,r=m(n);return o.createElement("li",{className:"mgd-footer__item"},o.createElement(c.default,{href:r},o.createElement("a",{className:"mgd-footer__link"},t)))},t.Heading=p,t.Logo=function(e){var t=e.brand;return o.createElement("div",{className:"mgd-logo"},t)},t.NextPagination=function(e){var t=e.children,n=e.href,r=m(n);return o.createElement(c.default,{href:r},o.createElement("a",{className:"mgd-pagination__item mgd-pagination__item--next"},o.createElement("span",{className:"mgd-pagination__label"},t),o.createElement("span",{className:"mgd-pagination__icon"},o.createElement(g,{size:24}))))},t.Pagination=function(e){var t=e.children;return o.createElement("div",{className:"mgd-pagination"},t)},t.PrevPagination=function(e){var t=e.children,n=e.href,r=m(n);return o.createElement(c.default,{href:r},o.createElement("a",{className:"mgd-pagination__item mgd-pagination__item--prev"},o.createElement("span",{className:"mgd-pagination__icon"},o.createElement(h,{size:24})),o.createElement("span",{className:"mgd-pagination__label"},t)))},t.Spacer=function(e){var t=e.direction,n=void 0===t?"vertical":t,r=e.size,a=void 0===r?"medium":r;return o.createElement("div",{"aria-hidden":!0,className:"mgd-spacer mgd-spacer--"+{horizontal:"hor",vertical:"ver"}[n]+" mgd-spacer--"+{small:"sm",medium:"md",large:"lg",extraLarge:"xl"}[a]})},t.Spinner=function(e){var t,n=e.size,r=void 0===n?"medium":n,a=o.useState(!1),i=a[0],c=a[1],l=function(e){var t=o.useRef(null),n=e.threshold,r=e.onVisibilityChanged;return E((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio;r({isVisible:t,ratio:n})}))}),{threshold:n||0}),a=t.current;if(a)return e.observe(a),function(){e.unobserve(a)}}),[]),t}({onVisibilityChanged:function(e){c(e.isVisible)}});return o.createElement("div",{className:f((t={"mgd-spinner":!0,"mgd-spinner--animating":i},t["mgd-spinner--"+{small:"sm",medium:"md",large:"lg",extraLarge:"xl"}[r]]=!0,t)),ref:l})},t.Window=function(e){var t=e.children,n=e.title;return o.createElement("div",{className:"mgd-window"},o.createElement("div",{className:"mgd-window__head"},o.createElement("div",{className:"mgd-window__buttons"},o.createElement("div",{className:"mgd-window__button mgd-window__button--close"}),o.createElement("div",{className:"mgd-window__button mgd-window__button--min"}),o.createElement("div",{className:"mgd-window__button mgd-window__button--full"})),n&&o.createElement("div",{className:"mgd-window__title"},n)),t)}},3145:function(e,t,n){"use strict";e.exports=n(8366)},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),c=n(387),l=n(7190);var u={};function s(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=c.useRouter(),f=i.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):i||n}}),[a,e.href,e.as]),d=f.href,m=f.as,v=e.children,p=e.replace,g=e.shallow,h=e.scroll,E=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var _=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,b=r(l.useIntersection({rootMargin:"200px"}),2),y=b[0],w=b[1],N=i.default.useCallback((function(e){y(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,y]);i.default.useEffect((function(){var e=w&&n&&o.isLocalURL(d),t="undefined"!==typeof E?E:a&&a.locale,r=u[d+"%"+m+(t?"%"+t:"")];e&&!r&&s(a,d,m,{locale:t})}),[m,d,w,E,n,a]);var L={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,a,d,m,p,g,h,E)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof E?E:a&&a.locale,z=a&&a.isLocaleDomain&&o.getDomainLocale(m,M,a&&a.locales,a&&a.domainLocales);L.href=z||o.addBasePath(o.addLocale(m,M,a&&a.defaultLocale))}return i.default.cloneElement(t,L)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),u=r(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||s||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!o&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}}]);