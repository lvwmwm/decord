// Module ID: 9801
// Function ID: 9802
// Dependencies: [9795, 9798]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 9801
import _mod9795 from "module_9795" /* 9795 */;
import _mod9798 from "module_9798" /* 9798 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9798.GLOBAL_OBJ.onunhandledrejection;
  _mod9798.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod9795;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod9798.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod9795;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod9795;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
