// Module ID: 12585
// Function ID: 12586
// Dependencies: [12579, 12582]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12585
import _mod12579 from "module_12579" /* 12579 */;
import _mod12582 from "module_12582" /* 12582 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12582.GLOBAL_OBJ.onunhandledrejection;
  _mod12582.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12579;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12582.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12579;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12579;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
