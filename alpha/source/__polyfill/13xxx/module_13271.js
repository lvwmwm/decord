// Module ID: 13271
// Function ID: 13272
// Dependencies: [13272, 13275]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13271
import _mod13272 from "module_13272" /* 13272 */;
import _mod13275 from "module_13275" /* 13275 */;

function instrumentError() {
  onerror = _mod13275.GLOBAL_OBJ.onerror;
  _mod13275.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13272;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13275.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13272;
  obj.addHandler("error", arg0);
  const obj2 = _mod13272;
  obj2.maybeInstrument("error", instrumentError);
}
