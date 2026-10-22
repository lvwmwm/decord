// Module ID: 12517
// Function ID: 12518
// Dependencies: [12518, 12521]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12517
import _mod12518 from "module_12518" /* 12518 */;
import _mod12521 from "module_12521" /* 12521 */;

function instrumentError() {
  onerror = _mod12521.GLOBAL_OBJ.onerror;
  _mod12521.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12518;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12521.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12518;
  obj.addHandler("error", arg0);
  const obj2 = _mod12518;
  obj2.maybeInstrument("error", instrumentError);
};
