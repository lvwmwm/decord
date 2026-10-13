// Module ID: 12010
// Function ID: 12011
// Dependencies: [12004, 12007]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12010
import _mod12004 from "module_12004" /* 12004 */;
import _mod12007 from "module_12007" /* 12007 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12007.GLOBAL_OBJ.onunhandledrejection;
  _mod12007.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12004;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12007.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12004;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12004;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
