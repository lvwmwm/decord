// Module ID: 12570
// Function ID: 12571
// Dependencies: [12571, 12574]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12570
import _mod12571 from "module_12571" /* 12571 */;
import _mod12574 from "module_12574" /* 12574 */;

function instrumentError() {
  onerror = _mod12574.GLOBAL_OBJ.onerror;
  _mod12574.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12571;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12574.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12571;
  obj.addHandler("error", arg0);
  const obj2 = _mod12571;
  obj2.maybeInstrument("error", instrumentError);
};
