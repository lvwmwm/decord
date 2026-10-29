// Module ID: 12857
// Function ID: 12858
// Dependencies: [12851, 12854]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12857
import _mod12851 from "module_12851" /* 12851 */;
import _mod12854 from "module_12854" /* 12854 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12854.GLOBAL_OBJ.onunhandledrejection;
  _mod12854.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12851;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12854.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12851;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12851;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
