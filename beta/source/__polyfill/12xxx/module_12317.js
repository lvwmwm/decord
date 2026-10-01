// Module ID: 12317
// Function ID: 12318
// Dependencies: [12311, 12314]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12317
import _mod12311 from "module_12311" /* 12311 */;
import _mod12314 from "module_12314" /* 12314 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12314.GLOBAL_OBJ.onunhandledrejection;
  _mod12314.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12311;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12314.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12311;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12311;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
