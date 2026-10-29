// Module ID: 12929
// Function ID: 12930
// Dependencies: [12930, 12913, 12909]

// Module 12929
import eventFromMessage from "eventFromMessage" /* 12913 */;
import _mod12930 from "module_12930" /* 12930 */;
import module_12909 from "module_12909" /* 12909 */;


export const linkedErrorsIntegration = module_12909.defineIntegration(() => {
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
      const obj = _mod12930;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
