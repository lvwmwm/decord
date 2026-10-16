// Module ID: 12302
// Function ID: 12303
// Dependencies: [12296, 12299]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12302
import _mod12296 from "module_12296" /* 12296 */;
import _mod12299 from "module_12299" /* 12299 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12299.GLOBAL_OBJ.onunhandledrejection;
  _mod12299.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12296;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12299.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12296;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12296;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
