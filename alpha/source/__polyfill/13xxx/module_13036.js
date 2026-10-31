// Module ID: 13036
// Function ID: 13037
// Dependencies: [13037, 13040]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13036
import _mod13037 from "module_13037" /* 13037 */;
import _mod13040 from "module_13040" /* 13040 */;

function instrumentError() {
  onerror = _mod13040.GLOBAL_OBJ.onerror;
  _mod13040.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13037;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13040.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13037;
  obj.addHandler("error", arg0);
  const obj2 = _mod13037;
  obj2.maybeInstrument("error", instrumentError);
}
