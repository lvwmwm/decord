// Module ID: 726
// Function ID: 727
// Dependencies: [727, 698]
// Exports: addGlobalErrorInstrumentationHandler

// Module 726
import _mod698 from "module_698" /* 698 */;
import _mod727 from "module_727" /* 727 */;

function instrumentError() {
  onerror = _mod698.GLOBAL_OBJ.onerror;
  _mod698.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod727;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod698.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod727;
  obj.addHandler("error", arg0);
  const obj2 = _mod727;
  obj2.maybeInstrument("error", instrumentError);
};
