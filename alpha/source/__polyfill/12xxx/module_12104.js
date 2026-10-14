// Module ID: 12104
// Function ID: 12105
// Dependencies: [12070, 12042, 12069]
// Exports: initAndBind, setCurrentClient

// Module 12104
import _mod12042 from "module_12042" /* 12042 */;
import _mod12069 from "module_12069" /* 12069 */;
import _mod12070 from "module_12070" /* 12070 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12070.DEBUG_BUILD;
    const obj = _mod12042;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12069;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12069;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12069;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
