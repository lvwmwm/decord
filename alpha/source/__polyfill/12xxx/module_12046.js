// Module ID: 12046
// Function ID: 12047
// Dependencies: [12040, 12043]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12046
import _mod12040 from "module_12040" /* 12040 */;
import _mod12043 from "module_12043" /* 12043 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12043.GLOBAL_OBJ.onunhandledrejection;
  _mod12043.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12040;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12043.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod12040;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod12040;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
