// Module ID: 13335
// Function ID: 13336
// Dependencies: [13301, 13273, 13300]
// Exports: initAndBind, setCurrentClient

// Module 13335
import _mod13273 from "module_13273" /* 13273 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13301 from "module_13301" /* 13301 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13301.DEBUG_BUILD;
    const obj = _mod13273;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13300;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13300;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13300;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
