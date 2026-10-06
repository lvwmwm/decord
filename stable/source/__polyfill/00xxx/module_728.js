// Module ID: 728
// Function ID: 729
// Dependencies: [727, 698]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 728
import _mod698 from "module_698" /* 698 */;
import _mod727 from "module_727" /* 727 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod698.GLOBAL_OBJ.onunhandledrejection;
  _mod698.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod727;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod698.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  const obj = _mod727;
  obj.addHandler("unhandledrejection", arg0);
  const obj2 = _mod727;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
