// Module ID: 12585
// Function ID: 12586
// Dependencies: [12586, 12569, 12565]

// Module 12585
import eventFromMessage from "eventFromMessage" /* 12569 */;
import _mod12586 from "module_12586" /* 12586 */;
import module_12565 from "module_12565" /* 12565 */;


export const linkedErrorsIntegration = module_12565.defineIntegration(() => {
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
      const obj = _mod12586;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
