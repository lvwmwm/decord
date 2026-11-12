// Module ID: 9727
// Function ID: 9728
// Dependencies: [9728, 9731]
// Exports: addGlobalErrorInstrumentationHandler

// Module 9727
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;

function instrumentError() {
  onerror = _mod9731.GLOBAL_OBJ.onerror;
  _mod9731.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod9728;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod9731.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod9728;
  obj.addHandler("error", arg0);
  const obj2 = _mod9728;
  obj2.maybeInstrument("error", instrumentError);
}
