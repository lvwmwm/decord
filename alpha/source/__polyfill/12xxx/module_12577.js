// Module ID: 12577
// Function ID: 12578
// Dependencies: [12571, 12574]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12577
import _mod12571 from "module_12571" /* 12571 */;
import _mod12574 from "module_12574" /* 12574 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12574.GLOBAL_OBJ.onunhandledrejection;
  _mod12574.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12571;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12574.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12571;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12571;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
