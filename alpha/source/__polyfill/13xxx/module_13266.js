// Module ID: 13266
// Function ID: 13267
// Dependencies: [13267, 13250, 13246]

// Module 13266
import eventFromMessage from "eventFromMessage" /* 13250 */;
import _mod13267 from "module_13267" /* 13267 */;
import module_13246 from "module_13246" /* 13246 */;


export const linkedErrorsIntegration = module_13246.defineIntegration(() => {
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
      const obj = _mod13267;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
