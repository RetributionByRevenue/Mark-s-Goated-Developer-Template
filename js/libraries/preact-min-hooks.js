/* esm.sh - esbuild bundle(preact@10.4.7/hooks) es2022 production */
import{options as e}from"./preact-min.js";var c,r,l,i=0,h=[],H=e.__r,p=e.diffed,d=e.__c,y=e.unmount;function a(_,n){e.__h&&e.__h(r,_,i||n),i=0;var u=r.__H||(r.__H={__:[],__h:[]});return _>=u.__.length&&u.__.push({}),u.__[_]}function A(_){return i=1,F(g,_)}function F(_,n,u){var t=a(c++,2);return t.t=_,t.__c||(t.__c=r,t.__=[u?u(n):g(void 0,n),function(o){var f=t.t(t.__[0],o);t.__[0]!==f&&(t.__=[f,t.__[1]],t.__c.setState({}))}]),t.__}function C(_,n){var u=a(c++,3);!e.__s&&v(u.__H,n)&&(u.__=_,u.__H=n,r.__H.__h.push(u))}function q(_,n){var u=a(c++,4);!e.__s&&v(u.__H,n)&&(u.__=_,u.__H=n,r.__h.push(u))}function T(_){return i=5,b(function(){return{current:_===void 0?null:_}},[])}function V(_,n,u){i=6,q(function(){typeof _=="function"?_(n()):_&&(_.current=n())},u==null?u:u.concat(_))}function b(_,n){var u=a(c++,7);return v(u.__H,n)?(u.__H=n,u.__h=_,u.__=_()):u.__}function k(_,n){return i=8,b(function(){return _},n)}function R(_){var n=r.context[_.__c],u=a(c++,9);return u.__c=_,n?(u.__==null&&(u.__=!0,n.sub(r)),n.props.value):_.__}function S(_,n){e.useDebugValue&&e.useDebugValue(n?n(_):_)}function j(_){var n=a(c++,10),u=A();return n.__=_,r.componentDidCatch||(r.componentDidCatch=function(t){n.__&&n.__(t),u[1](t)}),[u[0],function(){u[1](void 0)}]}function D(){h.some(function(_){if(_.__P)try{_.__H.__h.forEach(s),_.__H.__h.forEach(m),_.__H.__h=[]}catch(n){return _.__H.__h=[],e.__e(n,_.__v),!0}}),h=[]}e.__r=function(_){H&&H(_),c=0;var n=(r=_.__c).__H;n&&(n.__h.forEach(s),n.__h.forEach(m),n.__h=[])},e.diffed=function(_){p&&p(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(h.push(n)!==1&&l===e.requestAnimationFrame||((l=e.requestAnimationFrame)||function(u){var t,o=function(){clearTimeout(f),E&&cancelAnimationFrame(t),setTimeout(u)},f=setTimeout(o,100);E&&(t=requestAnimationFrame(o))})(D))},e.__c=function(_,n){n.some(function(u){try{u.__h.forEach(s),u.__h=u.__h.filter(function(t){return!t.__||m(t)})}catch(t){n.some(function(o){o.__h&&(o.__h=[])}),n=[],e.__e(t,u.__v)}}),d&&d(_,n)},e.unmount=function(_){y&&y(_);var n=_.__c;if(n&&n.__H)try{n.__H.__.forEach(s)}catch(u){e.__e(u,n.__v)}};var E=typeof requestAnimationFrame=="function";function s(_){typeof _.u=="function"&&_.u()}function m(_){_.u=_.__()}function v(_,n){return!_||n.some(function(u,t){return u!==_[t]})}function g(_,n){return typeof n=="function"?n(_):n}export{k as useCallback,R as useContext,S as useDebugValue,C as useEffect,j as useErrorBoundary,V as useImperativeHandle,q as useLayoutEffect,b as useMemo,F as useReducer,T as useRef,A as useState};
//# sourceMappingURL=hooks.js.map