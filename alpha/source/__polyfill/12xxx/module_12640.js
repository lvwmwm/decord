// Module ID: 12640
// Function ID: 12641
// Dependencies: [12634, 12637]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12640
import _mod12634 from "module_12634" /* 12634 */;
import _mod12637 from "module_12637" /* 12637 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12637.GLOBAL_OBJ.onunhandledrejection;
  _mod12637.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12634;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12637.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12634;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12634;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
