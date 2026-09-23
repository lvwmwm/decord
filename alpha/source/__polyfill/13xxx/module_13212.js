// Module ID: 13212
// Function ID: 13213
// Dependencies: [13213, 13196, 13192]

// Module 13212
import eventFromMessage from "eventFromMessage" /* 13196 */;
import _mod13213 from "module_13213" /* 13213 */;
import setupIntegration from "module_13192" /* 13192 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = _mod13213.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
