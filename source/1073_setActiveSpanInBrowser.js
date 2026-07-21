// Module ID: 1073
// Function ID: 12308
// Name: setActiveSpanInBrowser
// Dependencies: []

// Module 1073 (setActiveSpanInBrowser)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.setActiveSpanInBrowser = function setActiveSpanInBrowser(end) {
  let obj = arg1(arg6[0]);
  const activeSpan = obj.getActiveSpan();
  const arg1 = activeSpan;
  if (activeSpan !== end) {
    const currentScope = arg1(arg6[0]).getCurrentScope();
    const arg6 = currentScope;
    const _Proxy = Proxy;
    obj = {
      apply(arg0, arg1, arg2) {
          const result = activeSpan(currentScope[0])._INTERNAL_setSpanForScope(currentScope, activeSpan);
          return Reflect.apply(arg0, arg1, arg2);
        }
    };
    const proxy = new Proxy(end.end, obj);
    end.end = proxy;
    const obj2 = arg1(arg6[0]);
    const result = arg1(arg6[0])._INTERNAL_setSpanForScope(currentScope, end);
    const obj4 = arg1(arg6[0]);
  }
};
