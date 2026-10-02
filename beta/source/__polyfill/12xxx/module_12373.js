// Module ID: 12373
// Function ID: 12374
// Dependencies: [12339, 12311, 12338]
// Exports: initAndBind, setCurrentClient

// Module 12373
import _mod12311 from "module_12311" /* 12311 */;
import _mod12338 from "module_12338" /* 12338 */;
import _mod12339 from "module_12339" /* 12339 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12339.DEBUG_BUILD;
    const obj = _mod12311;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12338;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12338;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12338;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
