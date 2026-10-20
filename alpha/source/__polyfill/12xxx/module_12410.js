// Module ID: 12410
// Function ID: 12411
// Dependencies: [12404, 12407]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12410
import _mod12404 from "module_12404" /* 12404 */;
import _mod12407 from "module_12407" /* 12407 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12407.GLOBAL_OBJ.onunhandledrejection;
  _mod12407.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12404;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12407.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12404;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12404;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
