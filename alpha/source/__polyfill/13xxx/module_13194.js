// Module ID: 13194
// Function ID: 13195
// Dependencies: [13188, 13191]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13194
import _mod13188 from "module_13188" /* 13188 */;
import _mod13191 from "module_13191" /* 13191 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13191.GLOBAL_OBJ.onunhandledrejection;
  _mod13191.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13188;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13191.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13188;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13188;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
