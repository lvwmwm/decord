// Module ID: 11069
// Function ID: 11070
// Dependencies: [11070, 11053, 11049]

// Module 11069
import eventFromMessage from "eventFromMessage" /* 11053 */;
import _mod11070 from "module_11070" /* 11070 */;
import module_11049 from "module_11049" /* 11049 */;


export const linkedErrorsIntegration = module_11049.defineIntegration(() => {
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
      const obj = _mod11070;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
