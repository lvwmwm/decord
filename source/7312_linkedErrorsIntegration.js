// Module ID: 7312
// Function ID: 59015
// Name: linkedErrorsIntegration
// Dependencies: [7313, 7296, 7292]

// Module 7312 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration";


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
          const result = callback(7313).applyAggregateErrorsToEvent(callback(7296).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
