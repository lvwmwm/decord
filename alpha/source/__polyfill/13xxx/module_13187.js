// Module ID: 13187
// Function ID: 13188
// Dependencies: [13188, 13191]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13187
import _mod13188 from "module_13188" /* 13188 */;
import _mod13191 from "module_13191" /* 13191 */;

function instrumentError() {
  onerror = _mod13191.GLOBAL_OBJ.onerror;
  _mod13191.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13188;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13191.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13188;
  obj.addHandler("error", arg0);
  const obj2 = _mod13188;
  obj2.maybeInstrument("error", instrumentError);
}
