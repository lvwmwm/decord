// Module ID: 12687
// Function ID: 12688
// Dependencies: [12688, 12671, 12667]

// Module 12687
import eventFromMessage from "eventFromMessage" /* 12671 */;
import _mod12688 from "module_12688" /* 12688 */;
import module_12667 from "module_12667" /* 12667 */;


export const linkedErrorsIntegration = module_12667.defineIntegration(() => {
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
      const obj = _mod12688;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
