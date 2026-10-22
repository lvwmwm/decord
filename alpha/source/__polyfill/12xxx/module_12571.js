// Module ID: 12571
// Function ID: 12572
// Dependencies: [12537, 12509, 12536]
// Exports: initAndBind, setCurrentClient

// Module 12571
import _mod12509 from "module_12509" /* 12509 */;
import _mod12536 from "module_12536" /* 12536 */;
import _mod12537 from "module_12537" /* 12537 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12537.DEBUG_BUILD;
    const obj = _mod12509;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12536;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12536;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12536;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
