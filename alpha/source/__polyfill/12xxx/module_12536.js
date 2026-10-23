// Module ID: 12536
// Function ID: 12537
// Dependencies: [12537, 12540]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12536
import _mod12537 from "module_12537" /* 12537 */;
import _mod12540 from "module_12540" /* 12540 */;

function instrumentError() {
  onerror = _mod12540.GLOBAL_OBJ.onerror;
  _mod12540.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12537;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12540.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12537;
  obj.addHandler("error", arg0);
  const obj2 = _mod12537;
  obj2.maybeInstrument("error", instrumentError);
};
