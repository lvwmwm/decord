// Module ID: 775
// Function ID: 776
// Name: linkedErrorsIntegration
// Dependencies: [776, 757, 751]

// Module 775 (linkedErrorsIntegration)
import _enhanceErrorWithSentryInfo from "_enhanceErrorWithSentryInfo" /* 757 */;
import applyAggregateErrorsToEvent from "applyAggregateErrorsToEvent" /* 776 */;
import module_751 from "module_751" /* 751 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = module_751.defineIntegration(() => {
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
      const obj = applyAggregateErrorsToEvent;
      const result = obj.applyAggregateErrorsToEvent(_enhanceErrorWithSentryInfo.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});
