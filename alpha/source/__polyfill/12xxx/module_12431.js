// Module ID: 12431
// Function ID: 12432
// Dependencies: [12397, 12369, 12396]
// Exports: initAndBind, setCurrentClient

// Module 12431
import _mod12369 from "module_12369" /* 12369 */;
import _mod12396 from "module_12396" /* 12396 */;
import _mod12397 from "module_12397" /* 12397 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12397.DEBUG_BUILD;
    const obj = _mod12369;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12396;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12396;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12396;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
