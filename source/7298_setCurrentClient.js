// Module ID: 7298
// Function ID: 58910
// Name: setCurrentClient
// Dependencies: [7264, 7236, 7263]

// Module 7298 (setCurrentClient)
const require = arg1;
const dependencyMap = arg6;
function setCurrentClient(arg0) {
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  currentScope.setClient(arg0);
}
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(7236) /* consoleSandbox */;
    if (require(7264).DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(7263) /* getCurrentScope */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  setCurrentClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = setCurrentClient;
