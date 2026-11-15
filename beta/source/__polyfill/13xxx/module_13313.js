// Module ID: 13313
// Function ID: 13314
// Dependencies: [13307, 13310]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13313
import _mod13307 from "module_13307" /* 13307 */;
import _mod13310 from "module_13310" /* 13310 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13310.GLOBAL_OBJ.onunhandledrejection;
  _mod13310.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13307;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13310.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13307;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13307;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
