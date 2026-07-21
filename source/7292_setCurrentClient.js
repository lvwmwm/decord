// Module ID: 7292
// Function ID: 58824
// Name: setCurrentClient
// Dependencies: []

// Module 7292 (setCurrentClient)
function setCurrentClient(arg0) {
  const currentScope = arg1(arg6[2]).getCurrentScope();
  currentScope.setClient(arg0);
}
arg5.initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = debug(arg6[1]);
    if (debug(arg6[0]).DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
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
