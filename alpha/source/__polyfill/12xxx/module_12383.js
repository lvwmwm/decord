// Module ID: 12383
// Function ID: 12384
// Dependencies: [12384, 12387]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12383
import _mod12384 from "module_12384" /* 12384 */;
import _mod12387 from "module_12387" /* 12387 */;

function instrumentError() {
  onerror = _mod12387.GLOBAL_OBJ.onerror;
  _mod12387.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12384;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12387.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12384;
  obj.addHandler("error", arg0);
  const obj2 = _mod12384;
  obj2.maybeInstrument("error", instrumentError);
};
