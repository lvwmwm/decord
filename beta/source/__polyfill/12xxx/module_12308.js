// Module ID: 12308
// Function ID: 12309
// Dependencies: [12309, 12312]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12308
import _mod12309 from "module_12309" /* 12309 */;
import _mod12312 from "module_12312" /* 12312 */;

function instrumentError() {
  onerror = _mod12312.GLOBAL_OBJ.onerror;
  _mod12312.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12309;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12312.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12309;
  obj.addHandler("error", arg0);
  const obj2 = _mod12309;
  obj2.maybeInstrument("error", instrumentError);
};
