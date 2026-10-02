// Module ID: 956
// Function ID: 957
// Dependencies: [694, 908]

// Module 956
import eventFromException from "eventFromException" /* 908 */;
import registerSpanErrorInstrumentation from "module_694" /* 694 */;

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
