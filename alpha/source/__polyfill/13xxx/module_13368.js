// Module ID: 13368
// Function ID: 13369
// Dependencies: [13369, 13352, 13348]

// Module 13368
import eventFromMessage from "eventFromMessage" /* 13352 */;
import _mod13369 from "module_13369" /* 13369 */;
import module_13348 from "module_13348" /* 13348 */;


export const linkedErrorsIntegration = module_13348.defineIntegration(() => {
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
      const obj = _mod13369;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
