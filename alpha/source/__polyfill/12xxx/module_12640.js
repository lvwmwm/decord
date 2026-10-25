// Module ID: 12640
// Function ID: 12641
// Dependencies: [12606, 12578, 12605]
// Exports: initAndBind, setCurrentClient

// Module 12640
import _mod12578 from "module_12578" /* 12578 */;
import _mod12605 from "module_12605" /* 12605 */;
import _mod12606 from "module_12606" /* 12606 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12606.DEBUG_BUILD;
    const obj = _mod12578;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12605;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12605;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12605;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
