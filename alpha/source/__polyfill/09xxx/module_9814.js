// Module ID: 9814
// Function ID: 9815
// Dependencies: [9808, 9811]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 9814
import _mod9808 from "module_9808" /* 9808 */;
import _mod9811 from "module_9811" /* 9811 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9811.GLOBAL_OBJ.onunhandledrejection;
  _mod9811.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod9808;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod9811.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod9808;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod9808;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
