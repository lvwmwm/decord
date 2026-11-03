// Module ID: 13252
// Function ID: 13253
// Dependencies: [13218, 13190, 13217]
// Exports: initAndBind, setCurrentClient

// Module 13252
import _mod13190 from "module_13190" /* 13190 */;
import _mod13217 from "module_13217" /* 13217 */;
import _mod13218 from "module_13218" /* 13218 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13218.DEBUG_BUILD;
    const obj = _mod13190;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13217;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13217;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13217;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
