// Module ID: 13371
// Function ID: 13372
// Dependencies: [13337, 13309, 13336]
// Exports: initAndBind, setCurrentClient

// Module 13371
import _mod13309 from "module_13309" /* 13309 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13337 from "module_13337" /* 13337 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13337.DEBUG_BUILD;
    const obj = _mod13309;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13336;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13336;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13336;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
