// Module ID: 6427
// Function ID: 6428
// Name: initAndBind
// Dependencies: [6393, 6365, 6392]

// Module 6427 (initAndBind)
const require = arg1;
const dependencyMap = arg6;
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(6365) /* consoleSandbox */;
    if (require(6393) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(6392) /* getClient */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj2 = require(6392) /* getClient */;
  const currentScope1 = require(6392) /* getClient */.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = require(6392) /* getClient */.getCurrentScope();
  currentScope.setClient(arg0);
};
