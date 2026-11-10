// Module ID: 13296
// Function ID: 13297
// Dependencies: [13290, 13293]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13296
import _mod13290 from "module_13290" /* 13290 */;
import _mod13293 from "module_13293" /* 13293 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13293.GLOBAL_OBJ.onunhandledrejection;
  _mod13293.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13290;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13293.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13290;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13290;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
