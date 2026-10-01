// Module ID: 716
// Function ID: 717
// Dependencies: [715, 686]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 716
import _mod686 from "module_686" /* 686 */;
import _mod715 from "module_715" /* 715 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod686.GLOBAL_OBJ.onunhandledrejection;
  _mod686.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod715;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod686.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod715;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod715;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
