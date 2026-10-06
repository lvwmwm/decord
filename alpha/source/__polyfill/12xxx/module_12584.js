// Module ID: 12584
// Function ID: 12585
// Dependencies: [12578, 12581]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12584
import _mod12578 from "module_12578" /* 12578 */;
import _mod12581 from "module_12581" /* 12581 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12581.GLOBAL_OBJ.onunhandledrejection;
  _mod12581.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12578;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12581.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12578;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12578;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
