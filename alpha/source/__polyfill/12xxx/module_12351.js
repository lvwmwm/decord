// Module ID: 12351
// Function ID: 12352
// Dependencies: [12352, 12335, 12331]

// Module 12351
import eventFromMessage from "eventFromMessage" /* 12335 */;
import _mod12352 from "module_12352" /* 12352 */;
import module_12331 from "module_12331" /* 12331 */;


export const linkedErrorsIntegration = module_12331.defineIntegration(() => {
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
      const obj = _mod12352;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
