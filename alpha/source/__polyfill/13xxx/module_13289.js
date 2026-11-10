// Module ID: 13289
// Function ID: 13290
// Dependencies: [13290, 13293]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13289
import _mod13290 from "module_13290" /* 13290 */;
import _mod13293 from "module_13293" /* 13293 */;

function instrumentError() {
  onerror = _mod13293.GLOBAL_OBJ.onerror;
  _mod13293.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13290;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13293.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13290;
  obj.addHandler("error", arg0);
  const obj2 = _mod13290;
  obj2.maybeInstrument("error", instrumentError);
}
