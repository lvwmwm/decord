// Module ID: 13111
// Function ID: 13112
// Dependencies: [13077, 13049, 13076]
// Exports: initAndBind, setCurrentClient

// Module 13111
import _mod13049 from "module_13049" /* 13049 */;
import _mod13076 from "module_13076" /* 13076 */;
import _mod13077 from "module_13077" /* 13077 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13049;
    if (_mod13077.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13076.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13076.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod13076.getCurrentScope();
  currentScope.setClient(arg0);
};
