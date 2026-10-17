// Module ID: 12373
// Function ID: 12374
// Dependencies: [12367, 12370]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12373
import _mod12367 from "module_12367" /* 12367 */;
import _mod12370 from "module_12370" /* 12370 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12370.GLOBAL_OBJ.onunhandledrejection;
  _mod12370.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12367;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12370.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12367;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12367;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
