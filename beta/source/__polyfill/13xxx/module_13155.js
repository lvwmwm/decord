// Module ID: 13155
// Function ID: 13156
// Dependencies: [13156, 13139, 13135]

// Module 13155
import eventFromMessage from "eventFromMessage" /* 13139 */;
import _mod13156 from "module_13156" /* 13156 */;
import setupIntegration from "module_13135" /* 13135 */;


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
      const result = _mod13156.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
