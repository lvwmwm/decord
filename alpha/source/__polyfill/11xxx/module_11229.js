// Module ID: 11229
// Function ID: 11230
// Dependencies: [11195, 11167, 11194]
// Exports: initAndBind, setCurrentClient

// Module 11229
import _mod11167 from "module_11167" /* 11167 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11195 from "module_11195" /* 11195 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod11195.DEBUG_BUILD;
    const obj = _mod11167;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod11194;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod11194;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod11194;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
