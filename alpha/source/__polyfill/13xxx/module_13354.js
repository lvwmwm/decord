// Module ID: 13354
// Function ID: 13355
// Dependencies: [13355, 13338, 13334]

// Module 13354
import eventFromMessage from "eventFromMessage" /* 13338 */;
import _mod13355 from "module_13355" /* 13355 */;
import module_13334 from "module_13334" /* 13334 */;


export const linkedErrorsIntegration = module_13334.defineIntegration(() => {
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
      const obj = _mod13355;
      const result = obj.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
