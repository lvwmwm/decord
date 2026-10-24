// Module ID: 12635
// Function ID: 12636
// Dependencies: [12601, 12573, 12600]
// Exports: initAndBind, setCurrentClient

// Module 12635
import _mod12573 from "module_12573" /* 12573 */;
import _mod12600 from "module_12600" /* 12600 */;
import _mod12601 from "module_12601" /* 12601 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12601.DEBUG_BUILD;
    const obj = _mod12573;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12600;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12600;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12600;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
