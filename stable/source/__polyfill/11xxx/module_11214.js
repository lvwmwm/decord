// Module ID: 11214
// Function ID: 11215
// Dependencies: [11208, 11211]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 11214
import _mod11208 from "module_11208" /* 11208 */;
import _mod11211 from "module_11211" /* 11211 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod11211.GLOBAL_OBJ.onunhandledrejection;
  _mod11211.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod11208;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod11211.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod11208;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod11208;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
