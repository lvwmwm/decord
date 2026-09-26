// Module ID: 776
// Function ID: 777
// Name: linkedErrorsIntegration
// Dependencies: [777, 758, 752]

// Module 776 (linkedErrorsIntegration)
import exceptionFromError from "exceptionFromError" /* 758 */;
import aggregateExceptionsFromError from "aggregateExceptionsFromError" /* 777 */;
import setupIntegration from "setupIntegration" /* 752 */;

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
      const options = getOptions.getOptions();
      const result = aggregateExceptionsFromError.applyAggregateErrorsToEvent(exceptionFromError.exceptionFromError, options.stackParser, closure_1, closure_0, arg0, arg1);
    }
  };
});
