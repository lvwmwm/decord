// Module ID: 13008
// Function ID: 13009
// Dependencies: [13002, 13005]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13008
import _mod13002 from "module_13002" /* 13002 */;
import _mod13005 from "module_13005" /* 13005 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13005.GLOBAL_OBJ.onunhandledrejection;
  _mod13005.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod13002;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod13005.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod13002;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod13002;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
