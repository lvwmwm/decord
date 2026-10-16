// Module ID: 11286
// Function ID: 11287
// Dependencies: [11287, 11270, 11266]

// Module 11286
import eventFromMessage from "eventFromMessage" /* 11270 */;
import _mod11287 from "module_11287" /* 11287 */;
import module_11266 from "module_11266" /* 11266 */;


export const linkedErrorsIntegration = module_11266.defineIntegration(() => {
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
      const obj = _mod11287;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
