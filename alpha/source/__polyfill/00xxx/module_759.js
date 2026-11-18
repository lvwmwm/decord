// Module ID: 759
// Function ID: 760
// Dependencies: [687, 688, 712]
// Exports: initAndBind, setCurrentClient

// Module 759
import DEBUG_BUILD2 from "DEBUG_BUILD" /* 687 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 688 */;
import _mod712 from "module_712" /* 712 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function initAndBind(BrowserClient, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = DEBUG_BUILD2.DEBUG_BUILD;
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
  const obj2 = _mod712;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new BrowserClient(debug);
  const obj5 = _mod712;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(_client) {
  const obj = _mod712;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(_client);
}
