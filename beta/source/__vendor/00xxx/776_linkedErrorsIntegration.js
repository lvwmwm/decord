// Module ID: 776
// Function ID: 777
// Name: linkedErrorsIntegration
// Dependencies: [777, 758, 752]

// Module 776 (linkedErrorsIntegration)
import _enhanceErrorWithSentryInfo from "_enhanceErrorWithSentryInfo" /* 758 */;
import applyAggregateErrorsToEvent from "applyAggregateErrorsToEvent" /* 777 */;
import module_752 from "module_752" /* 752 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = module_752.defineIntegration(() => {
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
