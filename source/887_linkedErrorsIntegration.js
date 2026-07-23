// Module ID: 887
// Function ID: 9808
// Name: linkedErrorsIntegration
// Dependencies: [888, 869, 863]

// Module 887 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = setupIntegration.defineIntegration(function _linkedErrorsIntegration() {
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
          const result = callback(888).applyAggregateErrorsToEvent(callback(869).exceptionFromError, options.stackParser, dependencyMap, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
