// Module ID: 12462
// Function ID: 12463
// Dependencies: [12463, 12446, 12442]

// Module 12462
import eventFromMessage from "eventFromMessage" /* 12446 */;
import _mod12463 from "module_12463" /* 12463 */;
import module_12442 from "module_12442" /* 12442 */;


export const linkedErrorsIntegration = module_12442.defineIntegration(() => {
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
      const obj = _mod12463;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
