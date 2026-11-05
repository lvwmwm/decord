// Module ID: 13357
// Function ID: 13358
// Dependencies: [13358, 13341, 13337]

// Module 13357
import eventFromMessage from "eventFromMessage" /* 13341 */;
import _mod13358 from "module_13358" /* 13358 */;
import module_13337 from "module_13337" /* 13337 */;


export const linkedErrorsIntegration = module_13337.defineIntegration(() => {
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
      const obj = _mod13358;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
