// Module ID: 13306
// Function ID: 13307
// Dependencies: [13307, 13310]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13306
import _mod13307 from "module_13307" /* 13307 */;
import _mod13310 from "module_13310" /* 13310 */;

function instrumentError() {
  onerror = _mod13310.GLOBAL_OBJ.onerror;
  _mod13310.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13307;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13310.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13307;
  obj.addHandler("error", arg0);
  const obj2 = _mod13307;
  obj2.maybeInstrument("error", instrumentError);
}
