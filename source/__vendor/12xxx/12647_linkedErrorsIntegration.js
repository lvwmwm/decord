// Module ID: 12647
// Function ID: 12648
// Name: linkedErrorsIntegration
// Dependencies: [12648, 12631, 12627]

// Module 12647 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration" /* 12627 */;


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
      const result = callback(12648).applyAggregateErrorsToEvent(callback(12631).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
