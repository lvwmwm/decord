// Module ID: 12427
// Function ID: 12428
// Dependencies: [12421, 12424]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12427
import _mod12421 from "module_12421" /* 12421 */;
import _mod12424 from "module_12424" /* 12424 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12424.GLOBAL_OBJ.onunhandledrejection;
  _mod12424.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12421;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12424.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12421;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12421;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
