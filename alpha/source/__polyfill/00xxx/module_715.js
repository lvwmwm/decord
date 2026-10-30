// Module ID: 715
// Function ID: 716
// Dependencies: [714, 685]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 715
import _mod685 from "module_685" /* 685 */;
import _mod714 from "module_714" /* 714 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod685.GLOBAL_OBJ.onunhandledrejection;
  _mod685.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod714;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod685.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod714;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod714;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
