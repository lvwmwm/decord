// Module ID: 13116
// Function ID: 13117
// Dependencies: [13082, 13054, 13081]
// Exports: initAndBind, setCurrentClient

// Module 13116
import _mod13054 from "module_13054" /* 13054 */;
import _mod13081 from "module_13081" /* 13081 */;
import _mod13082 from "module_13082" /* 13082 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13082.DEBUG_BUILD;
    const obj = _mod13054;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13081;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13081;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13081;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
