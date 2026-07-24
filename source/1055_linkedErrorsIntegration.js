// Module ID: 1055
// Function ID: 11308
// Name: linkedErrorsIntegration
// Dependencies: [794, 1007]

// Module 1055 (linkedErrorsIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(function _linkedErrorsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let closure_0 = first.limit || 5;
    let closure_1 = first.key || "cause";
    const obj = {
      name: "LinkedErrors",
      preprocessEvent(arg0, arg1, getOptions) {
          const options = getOptions.getOptions();
          const result = callback(794).applyAggregateErrorsToEvent(callback(1007).exceptionFromError, options.stackParser, dependencyMap, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
