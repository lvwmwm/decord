// Module ID: 760
// Function ID: 761
// Dependencies: [688, 689, 713]
// Exports: initAndBind, setCurrentClient

// Module 760
import _mod688 from "module_688" /* 688 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 689 */;
import _mod713 from "module_713" /* 713 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod688.DEBUG_BUILD;
    const obj = CONSOLE_LEVELS;
    if (DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod713;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod713;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod713;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
