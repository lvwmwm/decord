// Module ID: 12582
// Function ID: 12583
// Dependencies: [12576, 12579]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12582
import _mod12576 from "module_12576" /* 12576 */;
import _mod12579 from "module_12579" /* 12579 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12579.GLOBAL_OBJ.onunhandledrejection;
  _mod12579.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12576;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12579.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12576;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12576;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
