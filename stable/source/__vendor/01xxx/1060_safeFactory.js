// Module ID: 1060
// Function ID: 1061
// Name: safeFactory
// Dependencies: [694]
// Exports: safeFactory, safeTracesSampler

// Module 1060 (safeFactory)
import _mod694 from "module_694" /* 694 */;


export const safeFactory = function safeFactory(beforeBreadcrumb, arg1) {
  let fn = beforeBreadcrumb;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (typeof fn === "function") {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(beforeBreadcrumb, items1, undefined);
      } catch (tmp8) {
        let loggerMessage;
        const debug = _mod694.debug;
        const error = debug.error;
        if (obj.loggerMessage) {
          loggerMessage = obj.loggerMessage;
        } else {
          const _HermesInternal = HermesInternal;
          loggerMessage = "The " + beforeBreadcrumb.name + " callback threw an error";
        }
        error(loggerMessage, tmp8);
        return items[0];
      }
    };
  }
  return fn;
};
export function safeTracesSampler(tracesSampler) {
  let fn = tracesSampler;
  let closure_0 = tracesSampler;
  if (closure_0) {
    fn = () => {
      const items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(tracesSampler, items1, undefined);
      } catch (tmp8) {
        const debug = _mod694.debug;
        debug.error("The tracesSampler callback threw an error", tmp8);
        return 0;
      }
    };
  }
  return fn;
}
