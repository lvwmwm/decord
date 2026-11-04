// Module ID: 12673
// Function ID: 12674
// Dependencies: [12639, 12611, 12638]
// Exports: initAndBind, setCurrentClient

// Module 12673
import _mod12611 from "module_12611" /* 12611 */;
import _mod12638 from "module_12638" /* 12638 */;
import _mod12639 from "module_12639" /* 12639 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12639.DEBUG_BUILD;
    const obj = _mod12611;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12638;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12638;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12638;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
