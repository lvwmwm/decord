// Module ID: 11243
// Function ID: 11244
// Dependencies: [11244, 11227, 11223]

// Module 11243
import eventFromMessage from "eventFromMessage" /* 11227 */;
import _mod11244 from "module_11244" /* 11244 */;
import module_11223 from "module_11223" /* 11223 */;


export const linkedErrorsIntegration = module_11223.defineIntegration(() => {
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
      const obj = _mod11244;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
