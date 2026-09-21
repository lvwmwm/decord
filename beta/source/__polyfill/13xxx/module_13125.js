// Module ID: 13125
// Function ID: 13126
// Dependencies: [13126, 13109, 13105]

// Module 13125
import eventFromMessage from "eventFromMessage" /* 13109 */;
import _mod13126 from "module_13126" /* 13126 */;
import setupIntegration from "module_13105" /* 13105 */;


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
      const result = _mod13126.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
