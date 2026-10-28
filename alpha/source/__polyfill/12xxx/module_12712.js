// Module ID: 12712
// Function ID: 12713
// Dependencies: [12713, 12696, 12692]

// Module 12712
import eventFromMessage from "eventFromMessage" /* 12696 */;
import _mod12713 from "module_12713" /* 12713 */;
import module_12692 from "module_12692" /* 12692 */;


export const linkedErrorsIntegration = module_12692.defineIntegration(() => {
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
      const obj = _mod12713;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
