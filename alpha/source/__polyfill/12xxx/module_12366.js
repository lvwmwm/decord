// Module ID: 12366
// Function ID: 12367
// Dependencies: [12367, 12370]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12366
import _mod12367 from "module_12367" /* 12367 */;
import _mod12370 from "module_12370" /* 12370 */;

function instrumentError() {
  onerror = _mod12370.GLOBAL_OBJ.onerror;
  _mod12370.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12367;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12370.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12367;
  obj.addHandler("error", arg0);
  const obj2 = _mod12367;
  obj2.maybeInstrument("error", instrumentError);
};
