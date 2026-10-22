// Module ID: 12513
// Function ID: 12514
// Dependencies: [12507, 12510]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12513
import _mod12507 from "module_12507" /* 12507 */;
import _mod12510 from "module_12510" /* 12510 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12510.GLOBAL_OBJ.onunhandledrejection;
  _mod12510.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12507;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12510.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12507;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12507;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
