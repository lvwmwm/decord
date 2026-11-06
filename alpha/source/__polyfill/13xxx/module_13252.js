// Module ID: 13252
// Function ID: 13253
// Dependencies: [13253, 13256]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13252
import _mod13253 from "module_13253" /* 13253 */;
import _mod13256 from "module_13256" /* 13256 */;

function instrumentError() {
  onerror = _mod13256.GLOBAL_OBJ.onerror;
  _mod13256.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13253;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13256.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13253;
  obj.addHandler("error", arg0);
  const obj2 = _mod13253;
  obj2.maybeInstrument("error", instrumentError);
}
