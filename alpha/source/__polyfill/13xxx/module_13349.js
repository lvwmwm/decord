// Module ID: 13349
// Function ID: 13350
// Dependencies: [13350, 13333, 13329]

// Module 13349
import eventFromMessage from "eventFromMessage" /* 13333 */;
import _mod13350 from "module_13350" /* 13350 */;
import module_13329 from "module_13329" /* 13329 */;


export const linkedErrorsIntegration = module_13329.defineIntegration(() => {
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
      const obj = _mod13350;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
