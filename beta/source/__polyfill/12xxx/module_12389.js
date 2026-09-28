// Module ID: 12389
// Function ID: 12390
// Dependencies: [12390, 12373, 12369]

// Module 12389
import eventFromMessage from "eventFromMessage" /* 12373 */;
import _mod12390 from "module_12390" /* 12390 */;
import setupIntegration from "module_12369" /* 12369 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = _mod12390.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
