// Module ID: 12390
// Function ID: 12391
// Dependencies: [12384, 12387]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12390
import _mod12384 from "module_12384" /* 12384 */;
import _mod12387 from "module_12387" /* 12387 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12387.GLOBAL_OBJ.onunhandledrejection;
  _mod12387.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12384;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12387.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12384;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12384;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
