// Module ID: 12596
// Function ID: 12597
// Dependencies: [12597, 12580, 12576]

// Module 12596
import eventFromMessage from "eventFromMessage" /* 12580 */;
import _mod12597 from "module_12597" /* 12597 */;
import module_12576 from "module_12576" /* 12576 */;


export const linkedErrorsIntegration = module_12576.defineIntegration(() => {
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
      const obj = _mod12597;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
