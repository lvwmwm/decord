// Module ID: 12360
// Function ID: 12361
// Dependencies: [12326, 12298, 12325]
// Exports: initAndBind, setCurrentClient

// Module 12360
import _mod12298 from "module_12298" /* 12298 */;
import _mod12325 from "module_12325" /* 12325 */;
import _mod12326 from "module_12326" /* 12326 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12326.DEBUG_BUILD;
    const obj = _mod12298;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12325;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12325;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12325;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
