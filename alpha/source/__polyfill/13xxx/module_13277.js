// Module ID: 13277
// Function ID: 13278
// Dependencies: [13271, 13274]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13277
import _mod13271 from "module_13271" /* 13271 */;
import _mod13274 from "module_13274" /* 13274 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13274.GLOBAL_OBJ.onunhandledrejection;
  _mod13274.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13271;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13274.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13271;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13271;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
