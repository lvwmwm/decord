// Module ID: 9807
// Function ID: 9808
// Dependencies: [9808, 9791, 9787]

// Module 9807
import eventFromMessage from "eventFromMessage" /* 9791 */;
import _mod9808 from "module_9808" /* 9808 */;
import module_9787 from "module_9787" /* 9787 */;


export const linkedErrorsIntegration = module_9787.defineIntegration(() => {
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
      const obj = _mod9808;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
