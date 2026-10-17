// Module ID: 12445
// Function ID: 12446
// Dependencies: [12446, 12429, 12425]

// Module 12445
import eventFromMessage from "eventFromMessage" /* 12429 */;
import _mod12446 from "module_12446" /* 12446 */;
import module_12425 from "module_12425" /* 12425 */;


export const linkedErrorsIntegration = module_12425.defineIntegration(() => {
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
      const obj = _mod12446;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
