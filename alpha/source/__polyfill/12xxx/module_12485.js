// Module ID: 12485
// Function ID: 12486
// Dependencies: [12451, 12423, 12450]
// Exports: initAndBind, setCurrentClient

// Module 12485
import _mod12423 from "module_12423" /* 12423 */;
import _mod12450 from "module_12450" /* 12450 */;
import _mod12451 from "module_12451" /* 12451 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12451.DEBUG_BUILD;
    const obj = _mod12423;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12450;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12450;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12450;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
