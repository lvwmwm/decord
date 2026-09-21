// Module ID: 948
// Function ID: 949
// Dependencies: [686, 900]

// Module 948
import _mod900 from "module_900" /* 900 */;
import registerSpanErrorInstrumentation from "module_686" /* 686 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      options = getOptions.getOptions();
      const result = registerSpanErrorInstrumentation.applyAggregateErrorsToEvent(_mod900.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});
