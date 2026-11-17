// Module ID: 9807
// Function ID: 9808
// Dependencies: [9808, 9811]
// Exports: addGlobalErrorInstrumentationHandler

// Module 9807
import _mod9808 from "module_9808" /* 9808 */;
import _mod9811 from "module_9811" /* 9811 */;

function instrumentError() {
  onerror = _mod9811.GLOBAL_OBJ.onerror;
  _mod9811.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod9808;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod9811.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod9808;
  obj.addHandler("error", arg0);
  const obj2 = _mod9808;
  obj2.maybeInstrument("error", instrumentError);
}
