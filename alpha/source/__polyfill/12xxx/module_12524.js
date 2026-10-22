// Module ID: 12524
// Function ID: 12525
// Dependencies: [12518, 12521]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12524
import _mod12518 from "module_12518" /* 12518 */;
import _mod12521 from "module_12521" /* 12521 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12521.GLOBAL_OBJ.onunhandledrejection;
  _mod12521.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12518;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12521.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12518;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12518;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
