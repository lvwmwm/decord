// Module ID: 871
// Function ID: 9689
// Name: setCurrentClient
// Dependencies: [800, 801, 825]

// Module 871 (setCurrentClient)
const require = arg1;
const dependencyMap = arg6;
function setCurrentClient(arg0) {
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  currentScope.setClient(arg0);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(801) /* consoleSandbox */;
    if (require(800).DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(825) /* getCurrentScope */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  setCurrentClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = setCurrentClient;
