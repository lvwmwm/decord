// Module ID: 13001
// Function ID: 13002
// Dependencies: [13002, 13005]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13001
import _mod13002 from "module_13002" /* 13002 */;
import _mod13005 from "module_13005" /* 13005 */;

function instrumentError() {
  onerror = _mod13005.GLOBAL_OBJ.onerror;
  _mod13005.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13002;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13005.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13002;
  obj.addHandler("error", arg0);
  const obj2 = _mod13002;
  obj2.maybeInstrument("error", instrumentError);
}
