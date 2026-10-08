// Module ID: 10990
// Function ID: 10991
// Dependencies: [10991, 10994]
// Exports: addGlobalErrorInstrumentationHandler

// Module 10990
import _mod10991 from "module_10991" /* 10991 */;
import _mod10994 from "module_10994" /* 10994 */;

function instrumentError() {
  onerror = _mod10994.GLOBAL_OBJ.onerror;
  _mod10994.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod10991;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod10994.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod10991;
  obj.addHandler("error", arg0);
  const obj2 = _mod10991;
  obj2.maybeInstrument("error", instrumentError);
};
