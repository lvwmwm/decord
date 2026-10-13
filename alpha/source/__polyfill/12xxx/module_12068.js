// Module ID: 12068
// Function ID: 12069
// Dependencies: [12034, 12006, 12033]
// Exports: initAndBind, setCurrentClient

// Module 12068
import _mod12006 from "module_12006" /* 12006 */;
import _mod12033 from "module_12033" /* 12033 */;
import _mod12034 from "module_12034" /* 12034 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12034.DEBUG_BUILD;
    const obj = _mod12006;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12033;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12033;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12033;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
