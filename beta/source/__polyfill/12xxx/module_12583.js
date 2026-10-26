// Module ID: 12583
// Function ID: 12584
// Dependencies: [12577, 12580]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12583
import _mod12577 from "module_12577" /* 12577 */;
import _mod12580 from "module_12580" /* 12580 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12580.GLOBAL_OBJ.onunhandledrejection;
  _mod12580.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12577;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12580.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12577;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12577;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
