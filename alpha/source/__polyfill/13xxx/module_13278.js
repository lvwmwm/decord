// Module ID: 13278
// Function ID: 13279
// Dependencies: [13279, 13282]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13278
import _mod13279 from "module_13279" /* 13279 */;
import _mod13282 from "module_13282" /* 13282 */;

function instrumentError() {
  onerror = _mod13282.GLOBAL_OBJ.onerror;
  _mod13282.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13279;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13282.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13279;
  obj.addHandler("error", arg0);
  const obj2 = _mod13279;
  obj2.maybeInstrument("error", instrumentError);
}
