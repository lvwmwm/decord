// Module ID: 12654
// Function ID: 12655
// Dependencies: [12655, 12638, 12634]

// Module 12654
import eventFromMessage from "eventFromMessage" /* 12638 */;
import _mod12655 from "module_12655" /* 12655 */;
import module_12634 from "module_12634" /* 12634 */;


export const linkedErrorsIntegration = module_12634.defineIntegration(() => {
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
      const obj = _mod12655;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
