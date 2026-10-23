// Module ID: 12615
// Function ID: 12616
// Dependencies: [12616, 12599, 12595]

// Module 12615
import eventFromMessage from "eventFromMessage" /* 12599 */;
import _mod12616 from "module_12616" /* 12616 */;
import module_12595 from "module_12595" /* 12595 */;


export const linkedErrorsIntegration = module_12595.defineIntegration(() => {
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
      const obj = _mod12616;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
