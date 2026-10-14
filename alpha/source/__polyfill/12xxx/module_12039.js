// Module ID: 12039
// Function ID: 12040
// Dependencies: [12040, 12043]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12039
import _mod12040 from "module_12040" /* 12040 */;
import _mod12043 from "module_12043" /* 12043 */;

function instrumentError() {
  onerror = _mod12043.GLOBAL_OBJ.onerror;
  _mod12043.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12040;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12043.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12040;
  obj.addHandler("error", arg0);
  const obj2 = _mod12040;
  obj2.maybeInstrument("error", instrumentError);
};
