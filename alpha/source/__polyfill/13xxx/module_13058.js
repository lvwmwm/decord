// Module ID: 13058
// Function ID: 13059
// Dependencies: [13052, 13055]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13058
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13055.GLOBAL_OBJ.onunhandledrejection;
  _mod13055.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13052;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13055.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13052;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13052;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
