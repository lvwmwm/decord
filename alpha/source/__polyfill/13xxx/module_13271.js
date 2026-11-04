// Module ID: 13271
// Function ID: 13272
// Dependencies: [13272, 13273, 13276]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 13271
import _mod13272 from "module_13272" /* 13272 */;
import _mod13276 from "module_13276" /* 13276 */;

let closure_2 = {};
let closure_3 = {};

export function addHandler(arg0, arg1) {
  const tmp2 = closure_2[arg0] || [];
  closure_2[arg0] = tmp2;
  const arr = closure_2[arg0];
  arr.push(arg1);
}
export function maybeInstrument(arg0, fn) {
  if (!closure_3[arg0]) {
    tmp[arg0] = true;
    try {
      fn();
    } catch (tmp4) {
      const tmp5 = require;
      if (_mod13272.DEBUG_BUILD) {
        const logger = tmp5(13273).logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + arg0, tmp4);
      }
    }
  }
}
export function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    closure_1_2[item] = undefined;
  });
}
export function triggerHandlers(arg0, arg1) {
  if (arg0 && closure_2[arg0]) {
    const iter = (arg0 && closure_2[arg0])[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      try {
        nextResult(arg1);
      } catch (tmp11) {
        if (_mod13272.DEBUG_BUILD) {
          const logger = tmp12(13273).logger;
          const error = logger.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = _mod13276;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
}
