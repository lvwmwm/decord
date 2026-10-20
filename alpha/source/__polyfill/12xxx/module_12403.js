// Module ID: 12403
// Function ID: 12404
// Dependencies: [12404, 12407]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12403
import _mod12404 from "module_12404" /* 12404 */;
import _mod12407 from "module_12407" /* 12407 */;

function instrumentError() {
  onerror = _mod12407.GLOBAL_OBJ.onerror;
  _mod12407.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12404;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12407.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12404;
  obj.addHandler("error", arg0);
  const obj2 = _mod12404;
  obj2.maybeInstrument("error", instrumentError);
};
