// Module ID: 12555
// Function ID: 12556
// Dependencies: [12556, 12539, 12535]

// Module 12555
import eventFromMessage from "eventFromMessage" /* 12539 */;
import _mod12556 from "module_12556" /* 12556 */;
import module_12535 from "module_12535" /* 12535 */;


export const linkedErrorsIntegration = module_12535.defineIntegration(() => {
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
      const obj = _mod12556;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
