// Module ID: 9734
// Function ID: 9735
// Dependencies: [9728, 9731]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 9734
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9731.GLOBAL_OBJ.onunhandledrejection;
  _mod9731.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod9728;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod9731.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod9728;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod9728;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
