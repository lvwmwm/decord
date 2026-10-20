// Module ID: 12482
// Function ID: 12483
// Dependencies: [12483, 12466, 12462]

// Module 12482
import eventFromMessage from "eventFromMessage" /* 12466 */;
import _mod12483 from "module_12483" /* 12483 */;
import module_12462 from "module_12462" /* 12462 */;


export const linkedErrorsIntegration = module_12462.defineIntegration(() => {
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
      const obj = _mod12483;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
