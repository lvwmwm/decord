// Module ID: 9793
// Function ID: 9794
// Dependencies: [9759, 9731, 9758]
// Exports: initAndBind, setCurrentClient

// Module 9793
import _mod9731 from "module_9731" /* 9731 */;
import _mod9758 from "module_9758" /* 9758 */;
import _mod9759 from "module_9759" /* 9759 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod9759.DEBUG_BUILD;
    const obj = _mod9731;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod9758;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod9758;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod9758;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
