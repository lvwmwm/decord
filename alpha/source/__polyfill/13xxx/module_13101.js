// Module ID: 13101
// Function ID: 13102
// Dependencies: [13067, 13039, 13066]
// Exports: initAndBind, setCurrentClient

// Module 13101
import _mod13039 from "module_13039" /* 13039 */;
import _mod13066 from "module_13066" /* 13066 */;
import _mod13067 from "module_13067" /* 13067 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13067.DEBUG_BUILD;
    const obj = _mod13039;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13066;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13066;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13066;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
