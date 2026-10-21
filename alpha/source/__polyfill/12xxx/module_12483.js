// Module ID: 12483
// Function ID: 12484
// Dependencies: [12477, 12480]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12483
import _mod12477 from "module_12477" /* 12477 */;
import _mod12480 from "module_12480" /* 12480 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12480.GLOBAL_OBJ.onunhandledrejection;
  _mod12480.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12477;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12480.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12477;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12477;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
