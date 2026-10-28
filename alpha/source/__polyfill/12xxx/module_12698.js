// Module ID: 12698
// Function ID: 12699
// Dependencies: [12664, 12636, 12663]
// Exports: initAndBind, setCurrentClient

// Module 12698
import _mod12636 from "module_12636" /* 12636 */;
import _mod12663 from "module_12663" /* 12663 */;
import _mod12664 from "module_12664" /* 12664 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12664.DEBUG_BUILD;
    const obj = _mod12636;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12663;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12663;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12663;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
