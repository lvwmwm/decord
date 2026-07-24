// Module ID: 1073
// Function ID: 12310
// Name: setActiveSpanInBrowser
// Dependencies: [794]

// Module 1073 (setActiveSpanInBrowser)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
  let obj = activeSpan(currentScope[0]);
  activeSpan = obj.getActiveSpan();
  if (activeSpan !== end) {
    currentScope = activeSpan(currentScope[0]).getCurrentScope();
    const _Proxy = Proxy;
    obj = {
      apply(arg0, arg1, arg2) {
          const result = activeSpan(currentScope[0])._INTERNAL_setSpanForScope(currentScope, activeSpan);
          return Reflect.apply(arg0, arg1, arg2);
        }
    };
    const proxy = new Proxy(end.end, obj);
    end.end = proxy;
    const obj2 = activeSpan(currentScope[0]);
    let result = activeSpan(currentScope[0])._INTERNAL_setSpanForScope(currentScope, end);
    const obj4 = activeSpan(currentScope[0]);
  }
};
