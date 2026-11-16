// Module ID: 13314
// Function ID: 13315
// Dependencies: [13308, 13311]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13314
import _mod13308 from "module_13308" /* 13308 */;
import _mod13311 from "module_13311" /* 13311 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13311.GLOBAL_OBJ.onunhandledrejection;
  _mod13311.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13308;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13311.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13308;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13308;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
