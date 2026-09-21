// Module ID: 780
// Function ID: 781
// Name: linkedErrorsIntegration
// Dependencies: [781, 762, 756]

// Module 780 (linkedErrorsIntegration)
import exceptionFromError from "exceptionFromError" /* 762 */;
import aggregateExceptionsFromError from "aggregateExceptionsFromError" /* 781 */;
import setupIntegration from "setupIntegration" /* 756 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
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
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(exceptionFromError.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});
