// Module ID: 13080
// Function ID: 13081
// Dependencies: [13081, 13064, 13060]

// Module 13080
import eventFromMessage from "eventFromMessage" /* 13064 */;
import _mod13081 from "module_13081" /* 13081 */;
import module_13060 from "module_13060" /* 13060 */;


export const linkedErrorsIntegration = module_13060.defineIntegration(() => {
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
      const obj = _mod13081;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
