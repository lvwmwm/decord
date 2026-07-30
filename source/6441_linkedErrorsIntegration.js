// Module ID: 6441
// Function ID: 6442
// Name: linkedErrorsIntegration
// Dependencies: [6442, 6425, 6421]

// Module 6441 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration";


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0;
  let closure_1;
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = callback(6442).applyAggregateErrorsToEvent(callback(6425).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
