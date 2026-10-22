// Module ID: 12506
// Function ID: 12507
// Dependencies: [12507, 12510]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12506
import _mod12507 from "module_12507" /* 12507 */;
import _mod12510 from "module_12510" /* 12510 */;

function instrumentError() {
  onerror = _mod12510.GLOBAL_OBJ.onerror;
  _mod12510.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12507;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12510.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12507;
  obj.addHandler("error", arg0);
  const obj2 = _mod12507;
  obj2.maybeInstrument("error", instrumentError);
};
