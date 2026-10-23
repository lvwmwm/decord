// Module ID: 12601
// Function ID: 12602
// Dependencies: [12567, 12539, 12566]
// Exports: initAndBind, setCurrentClient

// Module 12601
import _mod12539 from "module_12539" /* 12539 */;
import _mod12566 from "module_12566" /* 12566 */;
import _mod12567 from "module_12567" /* 12567 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12567.DEBUG_BUILD;
    const obj = _mod12539;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12566;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12566;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12566;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
