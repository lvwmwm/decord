// Module ID: 12371
// Function ID: 12372
// Dependencies: [12372, 12355, 12351]

// Module 12371
import eventFromMessage from "eventFromMessage" /* 12355 */;
import _mod12372 from "module_12372" /* 12372 */;
import setupIntegration from "module_12351" /* 12351 */;


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
      const result = _mod12372.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
