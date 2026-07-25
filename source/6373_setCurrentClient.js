// Module ID: 6373
// Function ID: 57362
// Name: setCurrentClient
// Dependencies: [6339, 6311, 6338]

// Module 6373 (setCurrentClient)
const require = arg1;
const dependencyMap = arg6;
function setCurrentClient(arg0) {
  const currentScope = require(6338) /* getCurrentScope */.getCurrentScope();
  currentScope.setClient(arg0);
}
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(6311) /* consoleSandbox */;
    if (require(6339).DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(6338) /* getCurrentScope */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  setCurrentClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = setCurrentClient;
