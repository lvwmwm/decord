// Module ID: 13270
// Function ID: 13271
// Dependencies: [13271, 13274]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13270
import _mod13271 from "module_13271" /* 13271 */;
import _mod13274 from "module_13274" /* 13274 */;

function instrumentError() {
  onerror = _mod13274.GLOBAL_OBJ.onerror;
  _mod13274.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod13271;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod13274.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod13271;
  obj.addHandler("error", arg0);
  const obj2 = _mod13271;
  obj2.maybeInstrument("error", instrumentError);
}
