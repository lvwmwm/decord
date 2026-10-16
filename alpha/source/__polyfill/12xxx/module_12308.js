// Module ID: 12308
// Function ID: 12309
// Dependencies: [12302, 12305]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12308
import _mod12302 from "module_12302" /* 12302 */;
import _mod12305 from "module_12305" /* 12305 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12305.GLOBAL_OBJ.onunhandledrejection;
  _mod12305.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12302;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12305.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12302;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12302;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
