// Module ID: 6387
// Function ID: 57467
// Name: linkedErrorsIntegration
// Dependencies: [6388, 6371, 6367]

// Module 6387 (linkedErrorsIntegration)
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
          const result = callback(6388).applyAggregateErrorsToEvent(callback(6371).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
