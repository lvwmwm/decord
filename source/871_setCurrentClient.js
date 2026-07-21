// Module ID: 871
// Function ID: 9684
// Name: setCurrentClient
// Dependencies: [1023411057, 3238003100, 3875537671]

// Module 871 (setCurrentClient)
function setCurrentClient(arg0) {
  const currentScope = arg1(arg6[2]).getCurrentScope();
  currentScope.setClient(arg0);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = debug(arg6[1]);
    if (debug(arg6[0]).DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = debug(arg6[2]).getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  setCurrentClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = setCurrentClient;
