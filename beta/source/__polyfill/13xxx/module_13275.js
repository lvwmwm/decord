// Module ID: 13275
// Function ID: 13276
// Dependencies: [13276, 13279]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13275
import _mod13276 from "module_13276" /* 13276 */;
import _mod13279 from "module_13279" /* 13279 */;

function instrumentError() {
  onerror = _mod13279.GLOBAL_OBJ.onerror;
  _mod13279.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13276;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13279.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13276;
  obj.addHandler("error", arg0);
  const obj2 = _mod13276;
  obj2.maybeInstrument("error", instrumentError);
}
