// Module ID: 11270
// Function ID: 11271
// Dependencies: [11236, 11208, 11235]
// Exports: initAndBind, setCurrentClient

// Module 11270
import _mod11208 from "module_11208" /* 11208 */;
import _mod11235 from "module_11235" /* 11235 */;
import _mod11236 from "module_11236" /* 11236 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod11236.DEBUG_BUILD;
    const obj = _mod11208;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod11235;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod11235;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod11235;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
