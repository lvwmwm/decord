// Module ID: 962
// Function ID: 963
// Dependencies: [682]
// Exports: setActiveSpanInBrowser

// Module 962
import _mod682 from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
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
          const obj = _mod682;
          const result = obj._INTERNAL_setSpanForScope(currentScope, activeSpan);
          return Reflect.apply(arg0, arg1, arg2);
        }
    };
    const proxy = new Proxy(end.end, obj2);
    end.end = proxy;
    const tmpResult2 = activeSpan(currentScope[0]);
    let result = tmpResult2._INTERNAL_setSpanForScope(currentScope, end);
  }
};
