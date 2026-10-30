// Module ID: 959
// Function ID: 960
// Dependencies: [681]
// Exports: setActiveSpanInBrowser

// Module 959
import _mod681 from "module_681" /* 681 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function setActiveSpanInBrowser(end) {
  let activeSpan;
  let currentScope;
  let obj = activeSpan(currentScope[0]);
  activeSpan = obj.getActiveSpan();
  if (activeSpan !== end) {
    const tmpResult = activeSpan(currentScope[0]);
    currentScope = tmpResult.getCurrentScope();
    const _Proxy = Proxy;
    const self = this;
    const self2 = this;
    const obj2 = {
      apply(arg0, arg1, arg2) {
          const obj = _mod681;
          const result = obj._INTERNAL_setSpanForScope(currentScope, activeSpan);
          return Reflect.apply(arg0, arg1, arg2);
        }
    };
    const proxy = new Proxy(end.end, obj2);
    end.end = proxy;
    const tmpResult2 = activeSpan(currentScope[0]);
    let result = tmpResult2._INTERNAL_setSpanForScope(currentScope, end);
  }
}
