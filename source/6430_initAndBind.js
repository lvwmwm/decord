// Module ID: 6430
// Function ID: 6431
// Name: initAndBind
// Dependencies: [6396, 6368, 6395]

// Module 6430 (initAndBind)
const require = arg1;
const dependencyMap = arg6;
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(6368) /* consoleSandbox */;
    if (require(6396) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(6395) /* getClient */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj2 = require(6395) /* getClient */;
  const currentScope1 = require(6395) /* getClient */.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = require(6395) /* getClient */.getCurrentScope();
  currentScope.setClient(arg0);
};
