// Module ID: 12850
// Function ID: 12851
// Dependencies: [12851, 12854]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12850
import _mod12851 from "module_12851" /* 12851 */;
import _mod12854 from "module_12854" /* 12854 */;

function instrumentError() {
  onerror = _mod12854.GLOBAL_OBJ.onerror;
  _mod12854.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12851;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12854.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12851;
  obj.addHandler("error", arg0);
  const obj2 = _mod12851;
  obj2.maybeInstrument("error", instrumentError);
}
