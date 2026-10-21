// Module ID: 12476
// Function ID: 12477
// Dependencies: [12477, 12480]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12476
import _mod12477 from "module_12477" /* 12477 */;
import _mod12480 from "module_12480" /* 12480 */;

function instrumentError() {
  onerror = _mod12480.GLOBAL_OBJ.onerror;
  _mod12480.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12477;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12480.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12477;
  obj.addHandler("error", arg0);
  const obj2 = _mod12477;
  obj2.maybeInstrument("error", instrumentError);
};
