// Module ID: 12380
// Function ID: 12381
// Dependencies: [12381, 12364, 12360]

// Module 12380
import eventFromMessage from "eventFromMessage" /* 12364 */;
import _mod12381 from "module_12381" /* 12381 */;
import module_12360 from "module_12360" /* 12360 */;


export const linkedErrorsIntegration = module_12360.defineIntegration(() => {
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
      const obj = _mod12381;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
