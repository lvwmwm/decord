// Module ID: 11212
// Function ID: 11213
// Dependencies: [11206, 11209]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 11212
import _mod11206 from "module_11206" /* 11206 */;
import _mod11209 from "module_11209" /* 11209 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod11209.GLOBAL_OBJ.onunhandledrejection;
  _mod11209.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod11206;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod11209.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod11206;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod11206;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
