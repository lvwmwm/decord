// Module ID: 944
// Function ID: 945
// Dependencies: [682, 896]

// Module 944
import eventFromException from "eventFromException" /* 896 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
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
      const obj = registerSpanErrorInstrumentation;
      const result = obj.applyAggregateErrorsToEvent(eventFromException.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});
