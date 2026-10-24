// Module ID: 12649
// Function ID: 12650
// Dependencies: [12650, 12633, 12629]

// Module 12649
import eventFromMessage from "eventFromMessage" /* 12633 */;
import _mod12650 from "module_12650" /* 12650 */;
import module_12629 from "module_12629" /* 12629 */;


export const linkedErrorsIntegration = module_12629.defineIntegration(() => {
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
      const obj = _mod12650;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
