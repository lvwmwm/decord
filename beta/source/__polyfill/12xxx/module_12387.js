// Module ID: 12387
// Function ID: 12388
// Dependencies: [12388, 12371, 12367]

// Module 12387
import eventFromMessage from "eventFromMessage" /* 12371 */;
import _mod12388 from "module_12388" /* 12388 */;
import module_12367 from "module_12367" /* 12367 */;


export const linkedErrorsIntegration = module_12367.defineIntegration(() => {
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
      const obj = _mod12388;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
