// Module ID: 7307
// Function ID: 58952
// Name: linkedErrorsIntegration
// Dependencies: []

// Module 7307 (linkedErrorsIntegration)
const _module = require(dependencyMap[2]);

export const linkedErrorsIntegration = _module.defineIntegration(function _linkedErrorsIntegration() {
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
          const result = callback(closure_1[0]).applyAggregateErrorsToEvent(callback(closure_1[1]).exceptionFromError, options.stackParser, options.maxValueLength, closure_1, callback, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
