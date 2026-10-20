// Module ID: 12499
// Function ID: 12500
// Dependencies: [12500, 12483, 12479]

// Module 12499
import eventFromMessage from "eventFromMessage" /* 12483 */;
import _mod12500 from "module_12500" /* 12500 */;
import module_12479 from "module_12479" /* 12479 */;


export const linkedErrorsIntegration = module_12479.defineIntegration(() => {
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
      const obj = _mod12500;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
