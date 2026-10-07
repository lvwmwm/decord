// Module ID: 725
// Function ID: 726
// Dependencies: [726, 697]
// Exports: addGlobalErrorInstrumentationHandler

// Module 725
import _mod697 from "module_697" /* 697 */;
import _mod726 from "module_726" /* 726 */;

function instrumentError() {
  onerror = _mod697.GLOBAL_OBJ.onerror;
  _mod697.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod726;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod697.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod726;
  obj.addHandler("error", arg0);
  const obj2 = _mod726;
  obj2.maybeInstrument("error", instrumentError);
};
