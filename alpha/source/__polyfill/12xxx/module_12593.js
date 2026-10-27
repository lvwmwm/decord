// Module ID: 12593
// Function ID: 12594
// Dependencies: [12587, 12590]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12593
import _mod12587 from "module_12587" /* 12587 */;
import _mod12590 from "module_12590" /* 12590 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12590.GLOBAL_OBJ.onunhandledrejection;
  _mod12590.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12587;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12590.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12587;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12587;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
