// Module ID: 13317
// Function ID: 13318
// Dependencies: [13283, 13255, 13282]
// Exports: initAndBind, setCurrentClient

// Module 13317
import _mod13255 from "module_13255" /* 13255 */;
import _mod13282 from "module_13282" /* 13282 */;
import _mod13283 from "module_13283" /* 13283 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13283.DEBUG_BUILD;
    const obj = _mod13255;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13282;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13282;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13282;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
