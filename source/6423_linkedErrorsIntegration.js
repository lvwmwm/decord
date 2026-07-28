// Module ID: 6423
// Function ID: 57557
// Name: linkedErrorsIntegration
// Dependencies: [6424, 6407, 6403]

// Module 6423 (linkedErrorsIntegration)
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
          const result = callback(6424).applyAggregateErrorsToEvent(callback(6407).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
