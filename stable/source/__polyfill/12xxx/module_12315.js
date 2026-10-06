// Module ID: 12315
// Function ID: 12316
// Dependencies: [12309, 12312]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12315
import _mod12309 from "module_12309" /* 12309 */;
import _mod12312 from "module_12312" /* 12312 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12312.GLOBAL_OBJ.onunhandledrejection;
  _mod12312.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12309;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12312.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12309;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12309;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
