// Module ID: 12992
// Function ID: 12993
// Dependencies: [12958, 12930, 12957]
// Exports: initAndBind, setCurrentClient

// Module 12992
import _mod12930 from "module_12930" /* 12930 */;
import _mod12957 from "module_12957" /* 12957 */;
import _mod12958 from "module_12958" /* 12958 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12930;
    if (_mod12958.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12957.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12957.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12957.getCurrentScope();
  currentScope.setClient(arg0);
};
