// Module ID: 12657
// Function ID: 12658
// Dependencies: [12658, 12641, 12637]

// Module 12657
import eventFromMessage from "eventFromMessage" /* 12641 */;
import _mod12658 from "module_12658" /* 12658 */;
import module_12637 from "module_12637" /* 12637 */;


export const linkedErrorsIntegration = module_12637.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = obj.limit || 5;
  let closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const obj = _mod12658;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
