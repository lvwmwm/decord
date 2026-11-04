// Module ID: 13350
// Function ID: 13351
// Dependencies: [13351, 13334, 13330]

// Module 13350
import eventFromMessage from "eventFromMessage" /* 13334 */;
import _mod13351 from "module_13351" /* 13351 */;
import module_13330 from "module_13330" /* 13330 */;


export const linkedErrorsIntegration = module_13330.defineIntegration(() => {
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
      const obj = _mod13351;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
