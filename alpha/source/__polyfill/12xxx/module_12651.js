// Module ID: 12651
// Function ID: 12652
// Dependencies: [12617, 12589, 12616]
// Exports: initAndBind, setCurrentClient

// Module 12651
import _mod12589 from "module_12589" /* 12589 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12617 from "module_12617" /* 12617 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12617.DEBUG_BUILD;
    const obj = _mod12589;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12616;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12616;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12616;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
