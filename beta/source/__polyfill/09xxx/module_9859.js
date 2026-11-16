// Module ID: 9859
// Function ID: 9860
// Dependencies: [9825, 9797, 9824]
// Exports: initAndBind, setCurrentClient

// Module 9859
import _mod9797 from "module_9797" /* 9797 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9825 from "module_9825" /* 9825 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod9825.DEBUG_BUILD;
    const obj = _mod9797;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod9824;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod9824;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod9824;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
