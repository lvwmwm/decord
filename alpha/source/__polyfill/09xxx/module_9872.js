// Module ID: 9872
// Function ID: 9873
// Dependencies: [9838, 9810, 9837]
// Exports: initAndBind, setCurrentClient

// Module 9872
import _mod9810 from "module_9810" /* 9810 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod9838.DEBUG_BUILD;
    const obj = _mod9810;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod9837;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod9837;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod9837;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
