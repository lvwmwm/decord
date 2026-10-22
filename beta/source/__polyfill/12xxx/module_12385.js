// Module ID: 12385
// Function ID: 12386
// Dependencies: [12379, 12382]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12385
import _mod12379 from "module_12379" /* 12379 */;
import _mod12382 from "module_12382" /* 12382 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12382.GLOBAL_OBJ.onunhandledrejection;
  _mod12382.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12379;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12382.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12379;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12379;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
