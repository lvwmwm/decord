// Module ID: 13278
// Function ID: 13279
// Dependencies: [13272, 13275]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13278
import _mod13272 from "module_13272" /* 13272 */;
import _mod13275 from "module_13275" /* 13275 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13275.GLOBAL_OBJ.onunhandledrejection;
  _mod13275.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13272;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13275.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13272;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13272;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
