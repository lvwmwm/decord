// Module ID: 12560
// Function ID: 12561
// Dependencies: [12561, 12544, 12540]

// Module 12560
import eventFromMessage from "eventFromMessage" /* 12544 */;
import _mod12561 from "module_12561" /* 12561 */;
import setupIntegration from "module_12540" /* 12540 */;


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
      const result = _mod12561.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
