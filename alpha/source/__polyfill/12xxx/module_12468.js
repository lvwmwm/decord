// Module ID: 12468
// Function ID: 12469
// Dependencies: [12434, 12406, 12433]
// Exports: initAndBind, setCurrentClient

// Module 12468
import _mod12406 from "module_12406" /* 12406 */;
import _mod12433 from "module_12433" /* 12433 */;
import _mod12434 from "module_12434" /* 12434 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12434.DEBUG_BUILD;
    const obj = _mod12406;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12433;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12433;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12433;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};
