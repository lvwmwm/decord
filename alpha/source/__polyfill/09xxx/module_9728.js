// Module ID: 9728
// Function ID: 9729
// Dependencies: [9729, 9732]
// Exports: addGlobalErrorInstrumentationHandler

// Module 9728
import _mod9729 from "module_9729" /* 9729 */;
import _mod9732 from "module_9732" /* 9732 */;

function instrumentError() {
  onerror = _mod9732.GLOBAL_OBJ.onerror;
  _mod9732.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod9729;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod9732.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod9729;
  obj.addHandler("error", arg0);
  const obj2 = _mod9729;
  obj2.maybeInstrument("error", instrumentError);
}
