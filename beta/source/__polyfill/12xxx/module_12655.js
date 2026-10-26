// Module ID: 12655
// Function ID: 12656
// Dependencies: [12656, 12639, 12635]

// Module 12655
import eventFromMessage from "eventFromMessage" /* 12639 */;
import _mod12656 from "module_12656" /* 12656 */;
import module_12635 from "module_12635" /* 12635 */;


export const linkedErrorsIntegration = module_12635.defineIntegration(() => {
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
      const obj = _mod12656;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
