// Module ID: 13285
// Function ID: 13286
// Dependencies: [13279, 13282]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13285
import _mod13279 from "module_13279" /* 13279 */;
import _mod13282 from "module_13282" /* 13282 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13282.GLOBAL_OBJ.onunhandledrejection;
  _mod13282.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13279;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13282.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13279;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13279;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
