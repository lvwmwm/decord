// Module ID: 9792
// Function ID: 9793
// Dependencies: [9758, 9730, 9757]
// Exports: initAndBind, setCurrentClient

// Module 9792
import _mod9730 from "module_9730" /* 9730 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9758 from "module_9758" /* 9758 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod9758.DEBUG_BUILD;
    const obj = _mod9730;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod9757;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod9757;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod9757;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
