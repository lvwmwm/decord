// Module ID: 12541
// Function ID: 12542
// Dependencies: [12507, 12479, 12506]
// Exports: initAndBind, setCurrentClient

// Module 12541
import _mod12479 from "module_12479" /* 12479 */;
import _mod12506 from "module_12506" /* 12506 */;
import _mod12507 from "module_12507" /* 12507 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12507.DEBUG_BUILD;
    const obj = _mod12479;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12506;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12506;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12506;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
