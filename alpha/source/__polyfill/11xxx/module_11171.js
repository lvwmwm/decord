// Module ID: 11171
// Function ID: 11172
// Dependencies: [11165, 11168]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 11171
import _mod11165 from "module_11165" /* 11165 */;
import _mod11168 from "module_11168" /* 11168 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod11168.GLOBAL_OBJ.onunhandledrejection;
  _mod11168.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod11165;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod11168.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod11165;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod11165;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
