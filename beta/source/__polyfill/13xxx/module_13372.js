// Module ID: 13372
// Function ID: 13373
// Dependencies: [13338, 13310, 13337]
// Exports: initAndBind, setCurrentClient

// Module 13372
import _mod13310 from "module_13310" /* 13310 */;
import _mod13337 from "module_13337" /* 13337 */;
import _mod13338 from "module_13338" /* 13338 */;


export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod13338.DEBUG_BUILD;
    const obj = _mod13310;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod13337;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod13337;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const obj = _mod13337;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
}
