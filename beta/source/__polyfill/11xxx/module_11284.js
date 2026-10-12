// Module ID: 11284
// Function ID: 11285
// Dependencies: [11285, 11268, 11264]

// Module 11284
import eventFromMessage from "eventFromMessage" /* 11268 */;
import _mod11285 from "module_11285" /* 11285 */;
import module_11264 from "module_11264" /* 11264 */;


export const linkedErrorsIntegration = module_11264.defineIntegration(() => {
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
      const obj = _mod11285;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
