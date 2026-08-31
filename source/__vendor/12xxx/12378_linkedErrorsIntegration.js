// Module ID: 12378
// Function ID: 12379
// Name: linkedErrorsIntegration
// Dependencies: [12379, 12362, 12358]

// Module 12378 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration" /* 12358 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = undefined;
  closure_1 = undefined;
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = callback(12379).applyAggregateErrorsToEvent(callback(12362).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
