// Module ID: 9806
// Function ID: 9807
// Dependencies: [9807, 9790, 9786]

// Module 9806
import eventFromMessage from "eventFromMessage" /* 9790 */;
import _mod9807 from "module_9807" /* 9807 */;
import module_9786 from "module_9786" /* 9786 */;


export const linkedErrorsIntegration = module_9786.defineIntegration(() => {
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
      const obj = _mod9807;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
