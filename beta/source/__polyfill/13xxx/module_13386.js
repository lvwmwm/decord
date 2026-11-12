// Module ID: 13386
// Function ID: 13387
// Dependencies: [13387, 13370, 13366]

// Module 13386
import eventFromMessage from "eventFromMessage" /* 13370 */;
import _mod13387 from "module_13387" /* 13387 */;
import module_13366 from "module_13366" /* 13366 */;


export const linkedErrorsIntegration = module_13366.defineIntegration(() => {
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
      const obj = _mod13387;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
