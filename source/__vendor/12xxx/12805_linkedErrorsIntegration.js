// Module ID: 12805
// Function ID: 12806
// Name: linkedErrorsIntegration
// Dependencies: [12806, 12789, 12785]

// Module 12805 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration" /* 12785 */;


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
      const result = callback(12806).applyAggregateErrorsToEvent(callback(12789).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
