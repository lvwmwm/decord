// Module ID: 13331
// Function ID: 13332
// Dependencies: [13332, 13315, 13311]

// Module 13331
import eventFromMessage from "eventFromMessage" /* 13315 */;
import _mod13332 from "module_13332" /* 13332 */;
import module_13311 from "module_13311" /* 13311 */;


export const linkedErrorsIntegration = module_13311.defineIntegration(() => {
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
      const obj = _mod13332;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
