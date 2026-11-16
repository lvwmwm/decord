// Module ID: 9873
// Function ID: 9874
// Dependencies: [9874, 9857, 9853]

// Module 9873
import eventFromMessage from "eventFromMessage" /* 9857 */;
import _mod9874 from "module_9874" /* 9874 */;
import module_9853 from "module_9853" /* 9853 */;


export const linkedErrorsIntegration = module_9853.defineIntegration(() => {
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
      const obj = _mod9874;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
