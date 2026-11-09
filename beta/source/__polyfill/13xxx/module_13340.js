// Module ID: 13340
// Function ID: 13341
// Dependencies: [13306, 13278, 13305]
// Exports: initAndBind, setCurrentClient

// Module 13340
import _mod13278 from "module_13278" /* 13278 */;
import _mod13305 from "module_13305" /* 13305 */;
import _mod13306 from "module_13306" /* 13306 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13306.DEBUG_BUILD;
    const obj = _mod13278;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13305;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13305;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13305;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
