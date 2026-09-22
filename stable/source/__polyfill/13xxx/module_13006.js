// Module ID: 13006
// Function ID: 13007
// Dependencies: [13007, 12990, 12986]

// Module 13006
import eventFromMessage from "eventFromMessage" /* 12990 */;
import _mod13007 from "module_13007" /* 13007 */;
import setupIntegration from "module_12986" /* 12986 */;


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
      const result = _mod13007.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
