// Module ID: 12851
// Function ID: 12852
// Dependencies: [12852, 12853, 12856]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 12851
import _mod12852 from "module_12852" /* 12852 */;
import _mod12856 from "module_12856" /* 12856 */;

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
      if (_mod12852.DEBUG_BUILD) {
        const logger = tmp5(12853).logger;
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
        if (_mod12852.DEBUG_BUILD) {
          const logger = tmp12(12853).logger;
          const error = logger.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = _mod12856;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
}
