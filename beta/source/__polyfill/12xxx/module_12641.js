// Module ID: 12641
// Function ID: 12642
// Dependencies: [12607, 12579, 12606]
// Exports: initAndBind, setCurrentClient

// Module 12641
import _mod12579 from "module_12579" /* 12579 */;
import _mod12606 from "module_12606" /* 12606 */;
import _mod12607 from "module_12607" /* 12607 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12607.DEBUG_BUILD;
    const obj = _mod12579;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12606;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12606;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12606;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
