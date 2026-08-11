// Module ID: 7518
// Function ID: 7519
// Name: initAndBind
// Dependencies: [7484, 7456, 7483]

// Module 7518 (initAndBind)
const require = arg1;
const dependencyMap = arg6;
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = require(7456) /* consoleSandbox */;
    if (require(7484) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = require(7483) /* getClient */.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj2 = require(7483) /* getClient */;
  const currentScope1 = require(7483) /* getClient */.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
arg5.setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = require(7483) /* getClient */.getCurrentScope();
  currentScope.setClient(arg0);
};
