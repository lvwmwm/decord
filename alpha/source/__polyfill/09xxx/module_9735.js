// Module ID: 9735
// Function ID: 9736
// Dependencies: [9729, 9732]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 9735
import _mod9729 from "module_9729" /* 9729 */;
import _mod9732 from "module_9732" /* 9732 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9732.GLOBAL_OBJ.onunhandledrejection;
  _mod9732.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod9729;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod9732.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod9729;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod9729;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
