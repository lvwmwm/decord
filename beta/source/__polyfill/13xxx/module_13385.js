// Module ID: 13385
// Function ID: 13386
// Dependencies: [13386, 13369, 13365]

// Module 13385
import eventFromMessage from "eventFromMessage" /* 13369 */;
import _mod13386 from "module_13386" /* 13386 */;
import module_13365 from "module_13365" /* 13365 */;


export const linkedErrorsIntegration = module_13365.defineIntegration(() => {
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
      const obj = _mod13386;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
