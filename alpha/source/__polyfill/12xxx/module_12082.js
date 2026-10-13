// Module ID: 12082
// Function ID: 12083
// Dependencies: [12083, 12066, 12062]

// Module 12082
import eventFromMessage from "eventFromMessage" /* 12066 */;
import _mod12083 from "module_12083" /* 12083 */;
import module_12062 from "module_12062" /* 12062 */;


export const linkedErrorsIntegration = module_12062.defineIntegration(() => {
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
      const obj = _mod12083;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
