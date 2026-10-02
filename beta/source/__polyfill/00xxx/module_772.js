// Module ID: 772
// Function ID: 773
// Dependencies: [700, 701, 725]
// Exports: initAndBind, setCurrentClient

// Module 772
import _mod700 from "module_700" /* 700 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 701 */;
import _mod725 from "module_725" /* 725 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod700.DEBUG_BUILD;
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
  const obj2 = _mod725;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod725;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod725;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
