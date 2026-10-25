// Module ID: 12575
// Function ID: 12576
// Dependencies: [12576, 12579]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12575
import _mod12576 from "module_12576" /* 12576 */;
import _mod12579 from "module_12579" /* 12579 */;

function instrumentError() {
  onerror = _mod12579.GLOBAL_OBJ.onerror;
  _mod12579.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12576;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12579.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12576;
  obj.addHandler("error", arg0);
  const obj2 = _mod12576;
  obj2.maybeInstrument("error", instrumentError);
};
