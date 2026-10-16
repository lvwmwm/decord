// Module ID: 12366
// Function ID: 12367
// Dependencies: [12332, 12304, 12331]
// Exports: initAndBind, setCurrentClient

// Module 12366
import _mod12304 from "module_12304" /* 12304 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12332.DEBUG_BUILD;
    const obj = _mod12304;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12331;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12331;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12331;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
