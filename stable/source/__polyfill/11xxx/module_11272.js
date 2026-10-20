// Module ID: 11272
// Function ID: 11273
// Dependencies: [11238, 11210, 11237]
// Exports: initAndBind, setCurrentClient

// Module 11272
import _mod11210 from "module_11210" /* 11210 */;
import _mod11237 from "module_11237" /* 11237 */;
import _mod11238 from "module_11238" /* 11238 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod11238.DEBUG_BUILD;
    const obj = _mod11210;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod11237;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod11237;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod11237;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
