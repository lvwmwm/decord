// Module ID: 13141
// Function ID: 13142
// Dependencies: [13107, 13079, 13106]
// Exports: initAndBind, setCurrentClient

// Module 13141
import _mod13079 from "module_13079" /* 13079 */;
import _mod13106 from "module_13106" /* 13106 */;
import _mod13107 from "module_13107" /* 13107 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13079;
    if (_mod13107.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13106.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13106.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod13106.getCurrentScope();
  currentScope.setClient(arg0);
};
