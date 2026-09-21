// Module ID: 13126
// Function ID: 13127
// Dependencies: [13127, 13110, 13106]

// Module 13126
import eventFromMessage from "eventFromMessage" /* 13110 */;
import _mod13127 from "module_13127" /* 13127 */;
import setupIntegration from "module_13106" /* 13106 */;


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
      const result = _mod13127.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
