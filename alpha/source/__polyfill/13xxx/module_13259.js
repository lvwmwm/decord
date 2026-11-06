// Module ID: 13259
// Function ID: 13260
// Dependencies: [13253, 13256]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13259
import _mod13253 from "module_13253" /* 13253 */;
import _mod13256 from "module_13256" /* 13256 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13256.GLOBAL_OBJ.onunhandledrejection;
  _mod13256.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13253;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13256.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13253;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13253;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
