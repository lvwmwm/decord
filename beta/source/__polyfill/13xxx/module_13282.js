// Module ID: 13282
// Function ID: 13283
// Dependencies: [13276, 13279]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13282
import _mod13276 from "module_13276" /* 13276 */;
import _mod13279 from "module_13279" /* 13279 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13279.GLOBAL_OBJ.onunhandledrejection;
  _mod13279.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13276;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13279.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13276;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13276;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
