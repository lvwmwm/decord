// Module ID: 12374
// Function ID: 12375
// Dependencies: [12375, 12358, 12354]

// Module 12374
import eventFromMessage from "eventFromMessage" /* 12358 */;
import _mod12375 from "module_12375" /* 12375 */;
import module_12354 from "module_12354" /* 12354 */;


export const linkedErrorsIntegration = module_12354.defineIntegration(() => {
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
      const obj = _mod12375;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
