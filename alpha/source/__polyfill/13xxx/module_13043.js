// Module ID: 13043
// Function ID: 13044
// Dependencies: [13037, 13040]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13043
import _mod13037 from "module_13037" /* 13037 */;
import _mod13040 from "module_13040" /* 13040 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13040.GLOBAL_OBJ.onunhandledrejection;
  _mod13040.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13037;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13040.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13037;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13037;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
