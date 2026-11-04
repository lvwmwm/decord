// Module ID: 13336
// Function ID: 13337
// Dependencies: [13302, 13274, 13301]
// Exports: initAndBind, setCurrentClient

// Module 13336
import _mod13274 from "module_13274" /* 13274 */;
import _mod13301 from "module_13301" /* 13301 */;
import _mod13302 from "module_13302" /* 13302 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13302.DEBUG_BUILD;
    const obj = _mod13274;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13301;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13301;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13301;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
