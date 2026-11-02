// Module ID: 13051
// Function ID: 13052
// Dependencies: [13052, 13055]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13051
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

function instrumentError() {
  onerror = _mod13055.GLOBAL_OBJ.onerror;
  _mod13055.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13052;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13055.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13052;
  obj.addHandler("error", arg0);
  const obj2 = _mod13052;
  obj2.maybeInstrument("error", instrumentError);
}
