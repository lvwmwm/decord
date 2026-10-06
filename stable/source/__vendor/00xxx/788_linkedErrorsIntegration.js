// Module ID: 788
// Function ID: 789
// Name: linkedErrorsIntegration
// Dependencies: [789, 770, 764]

// Module 788 (linkedErrorsIntegration)
import _enhanceErrorWithSentryInfo from "_enhanceErrorWithSentryInfo" /* 770 */;
import applyAggregateErrorsToEvent from "applyAggregateErrorsToEvent" /* 789 */;
import module_764 from "module_764" /* 764 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = module_764.defineIntegration(() => {
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
