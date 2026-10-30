// Module ID: 713
// Function ID: 714
// Dependencies: [714, 685]
// Exports: addGlobalErrorInstrumentationHandler

// Module 713
import _mod685 from "module_685" /* 685 */;
import _mod714 from "module_714" /* 714 */;

function instrumentError() {
  onerror = _mod685.GLOBAL_OBJ.onerror;
  _mod685.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod714;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod685.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod714;
  obj.addHandler("error", arg0);
  const obj2 = _mod714;
  obj2.maybeInstrument("error", instrumentError);
}
