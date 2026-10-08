// Module ID: 11055
// Function ID: 11056
// Dependencies: [11021, 10993, 11020]
// Exports: initAndBind, setCurrentClient

// Module 11055
import _mod10993 from "module_10993" /* 10993 */;
import _mod11020 from "module_11020" /* 11020 */;
import _mod11021 from "module_11021" /* 11021 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod11021.DEBUG_BUILD;
    const obj = _mod10993;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod11020;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod11020;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod11020;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
