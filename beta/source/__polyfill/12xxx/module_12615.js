// Module ID: 12615
// Function ID: 12616
// Dependencies: [12609, 12612]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12615
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12612.GLOBAL_OBJ.onunhandledrejection;
  _mod12612.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12609;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12612.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12609;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12609;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
