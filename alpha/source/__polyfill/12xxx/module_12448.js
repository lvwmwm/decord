// Module ID: 12448
// Function ID: 12449
// Dependencies: [12414, 12386, 12413]
// Exports: initAndBind, setCurrentClient

// Module 12448
import _mod12386 from "module_12386" /* 12386 */;
import _mod12413 from "module_12413" /* 12413 */;
import _mod12414 from "module_12414" /* 12414 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12414.DEBUG_BUILD;
    const obj = _mod12386;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12413;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12413;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12413;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
