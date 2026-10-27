// Module ID: 12443
// Function ID: 12444
// Dependencies: [12409, 12381, 12408]
// Exports: initAndBind, setCurrentClient

// Module 12443
import _mod12381 from "module_12381" /* 12381 */;
import _mod12408 from "module_12408" /* 12408 */;
import _mod12409 from "module_12409" /* 12409 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12409.DEBUG_BUILD;
    const obj = _mod12381;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12408;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12408;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12408;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
