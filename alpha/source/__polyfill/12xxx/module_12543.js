// Module ID: 12543
// Function ID: 12544
// Dependencies: [12537, 12540]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12543
import _mod12537 from "module_12537" /* 12537 */;
import _mod12540 from "module_12540" /* 12540 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12540.GLOBAL_OBJ.onunhandledrejection;
  _mod12540.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12537;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12540.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12537;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12537;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
