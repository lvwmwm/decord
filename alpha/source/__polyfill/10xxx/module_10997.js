// Module ID: 10997
// Function ID: 10998
// Dependencies: [10991, 10994]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 10997
import _mod10991 from "module_10991" /* 10991 */;
import _mod10994 from "module_10994" /* 10994 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod10994.GLOBAL_OBJ.onunhandledrejection;
  _mod10994.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod10991;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod10994.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod10991;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod10991;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
