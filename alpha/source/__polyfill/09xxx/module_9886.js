// Module ID: 9886
// Function ID: 9887
// Dependencies: [9887, 9870, 9866]

// Module 9886
import eventFromMessage from "eventFromMessage" /* 9870 */;
import _mod9887 from "module_9887" /* 9887 */;
import module_9866 from "module_9866" /* 9866 */;


export const linkedErrorsIntegration = module_9866.defineIntegration(() => {
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
      const obj = _mod9887;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
