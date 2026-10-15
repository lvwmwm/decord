// Module ID: 12272
// Function ID: 12273
// Dependencies: [12273, 12276]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12272
import _mod12273 from "module_12273" /* 12273 */;
import _mod12276 from "module_12276" /* 12276 */;

function instrumentError() {
  onerror = _mod12276.GLOBAL_OBJ.onerror;
  _mod12276.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12273;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12276.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12273;
  obj.addHandler("error", arg0);
  const obj2 = _mod12273;
  obj2.maybeInstrument("error", instrumentError);
};
