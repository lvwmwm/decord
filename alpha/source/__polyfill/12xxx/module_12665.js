// Module ID: 12665
// Function ID: 12666
// Dependencies: [12666, 12649, 12645]

// Module 12665
import eventFromMessage from "eventFromMessage" /* 12649 */;
import _mod12666 from "module_12666" /* 12666 */;
import module_12645 from "module_12645" /* 12645 */;


export const linkedErrorsIntegration = module_12645.defineIntegration(() => {
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
      const obj = _mod12666;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
