// Module ID: 12608
// Function ID: 12609
// Dependencies: [12609, 12612]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12608
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;

function instrumentError() {
  onerror = _mod12612.GLOBAL_OBJ.onerror;
  _mod12612.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12609;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12612.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12609;
  obj.addHandler("error", arg0);
  const obj2 = _mod12609;
  obj2.maybeInstrument("error", instrumentError);
};
