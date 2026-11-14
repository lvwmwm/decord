// Module ID: 9794
// Function ID: 9795
// Dependencies: [9795, 9798]
// Exports: addGlobalErrorInstrumentationHandler

// Module 9794
import _mod9795 from "module_9795" /* 9795 */;
import _mod9798 from "module_9798" /* 9798 */;

function instrumentError() {
  onerror = _mod9798.GLOBAL_OBJ.onerror;
  _mod9798.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod9795;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod9798.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod9795;
  obj.addHandler("error", arg0);
  const obj2 = _mod9795;
  obj2.maybeInstrument("error", instrumentError);
}
