// Module ID: 12337
// Function ID: 12338
// Dependencies: [12303, 12275, 12302]
// Exports: initAndBind, setCurrentClient

// Module 12337
import _mod12275 from "module_12275" /* 12275 */;
import _mod12302 from "module_12302" /* 12302 */;
import _mod12303 from "module_12303" /* 12303 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12303.DEBUG_BUILD;
    const obj = _mod12275;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12302;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12302;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12302;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
