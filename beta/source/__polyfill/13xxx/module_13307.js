// Module ID: 13307
// Function ID: 13308
// Dependencies: [13308, 13311]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13307
import _mod13308 from "module_13308" /* 13308 */;
import _mod13311 from "module_13311" /* 13311 */;

function instrumentError() {
  onerror = _mod13311.GLOBAL_OBJ.onerror;
  _mod13311.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13308;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13311.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13308;
  obj.addHandler("error", arg0);
  const obj2 = _mod13308;
  obj2.maybeInstrument("error", instrumentError);
}
