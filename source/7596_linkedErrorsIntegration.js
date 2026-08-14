// Module ID: 7596
// Function ID: 7597
// Name: linkedErrorsIntegration
// Dependencies: [7597, 7580, 7576]

// Module 7596 (linkedErrorsIntegration)
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
      const result = callback(7597).applyAggregateErrorsToEvent(callback(7580).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
