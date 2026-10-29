// Module ID: 12915
// Function ID: 12916
// Dependencies: [12881, 12853, 12880]
// Exports: initAndBind, setCurrentClient

// Module 12915
import _mod12853 from "module_12853" /* 12853 */;
import _mod12880 from "module_12880" /* 12880 */;
import _mod12881 from "module_12881" /* 12881 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12881.DEBUG_BUILD;
    const obj = _mod12853;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12880;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12880;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod12880;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
