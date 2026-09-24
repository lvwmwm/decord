// Module ID: 13147
// Function ID: 13148
// Dependencies: [13113, 13085, 13112]
// Exports: initAndBind, setCurrentClient

// Module 13147
import _mod13085 from "module_13085" /* 13085 */;
import _mod13112 from "module_13112" /* 13112 */;
import _mod13113 from "module_13113" /* 13113 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13085;
    if (_mod13113.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13112.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13112.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod13112.getCurrentScope();
  currentScope.setClient(arg0);
};
