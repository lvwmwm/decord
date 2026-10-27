// Module ID: 12457
// Function ID: 12458
// Dependencies: [12458, 12441, 12437]

// Module 12457
import eventFromMessage from "eventFromMessage" /* 12441 */;
import _mod12458 from "module_12458" /* 12458 */;
import module_12437 from "module_12437" /* 12437 */;


export const linkedErrorsIntegration = module_12437.defineIntegration(() => {
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
      const obj = _mod12458;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
