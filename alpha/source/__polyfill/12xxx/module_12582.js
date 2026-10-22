// Module ID: 12582
// Function ID: 12583
// Dependencies: [12548, 12520, 12547]
// Exports: initAndBind, setCurrentClient

// Module 12582
import _mod12520 from "module_12520" /* 12520 */;
import _mod12547 from "module_12547" /* 12547 */;
import _mod12548 from "module_12548" /* 12548 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12548.DEBUG_BUILD;
    const obj = _mod12520;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12547;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12547;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12547;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
