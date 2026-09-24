// Module ID: 13161
// Function ID: 13162
// Dependencies: [13162, 13145, 13141]

// Module 13161
import eventFromMessage from "eventFromMessage" /* 13145 */;
import _mod13162 from "module_13162" /* 13162 */;
import setupIntegration from "module_13141" /* 13141 */;


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
      options = getOptions.getOptions();
      const result = _mod13162.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
