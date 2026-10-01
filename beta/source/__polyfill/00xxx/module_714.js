// Module ID: 714
// Function ID: 715
// Dependencies: [715, 686]
// Exports: addGlobalErrorInstrumentationHandler

// Module 714
import _mod686 from "module_686" /* 686 */;
import _mod715 from "module_715" /* 715 */;

function instrumentError() {
  onerror = _mod686.GLOBAL_OBJ.onerror;
  _mod686.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod715;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod686.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod715;
  obj.addHandler("error", arg0);
  const obj2 = _mod715;
  obj2.maybeInstrument("error", instrumentError);
};
