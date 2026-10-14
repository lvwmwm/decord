// Module ID: 12118
// Function ID: 12119
// Dependencies: [12119, 12102, 12098]

// Module 12118
import eventFromMessage from "eventFromMessage" /* 12102 */;
import _mod12119 from "module_12119" /* 12119 */;
import module_12098 from "module_12098" /* 12098 */;


export const linkedErrorsIntegration = module_12098.defineIntegration(() => {
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
      const obj = _mod12119;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
