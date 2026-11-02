// Module ID: 13130
// Function ID: 13131
// Dependencies: [13131, 13114, 13110]

// Module 13130
import eventFromMessage from "eventFromMessage" /* 13114 */;
import _mod13131 from "module_13131" /* 13131 */;
import module_13110 from "module_13110" /* 13110 */;


export const linkedErrorsIntegration = module_13110.defineIntegration(() => {
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
      const obj = _mod13131;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
