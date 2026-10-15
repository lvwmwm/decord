// Module ID: 12279
// Function ID: 12280
// Dependencies: [12273, 12276]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12279
import _mod12273 from "module_12273" /* 12273 */;
import _mod12276 from "module_12276" /* 12276 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12276.GLOBAL_OBJ.onunhandledrejection;
  _mod12276.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12273;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12276.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12273;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12273;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
