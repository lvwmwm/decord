// Module ID: 727
// Function ID: 728
// Dependencies: [700, 701, 710]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 727
import _mod700 from "module_700" /* 700 */;
import UNKNOWN_FUNCTION from "UNKNOWN_FUNCTION" /* 710 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
let closure_3 = {};

export const addHandler = function addHandler(arg0, arg1) {
  const tmp2 = closure_2[arg0] || [];
  closure_2[arg0] = tmp2;
  const arr = closure_2[arg0];
  arr.push(arg1);
};
export const maybeInstrument = function maybeInstrument(arg0, fn) {
  if (!closure_3[arg0]) {
    tmp[arg0] = true;
    try {
      fn();
    } catch (tmp4) {
      const tmp5 = require;
      if (_mod700.DEBUG_BUILD) {
        const debug = tmp5(701).debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + arg0, tmp4);
      }
    }
  }
};
export const resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    closure_1_2[item] = undefined;
  });
};
export const triggerHandlers = function triggerHandlers(arg0, arg1) {
  if (arg0 && closure_2[arg0]) {
    const iter = (arg0 && closure_2[arg0])[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      try {
        nextResult(arg1);
      } catch (tmp11) {
        if (_mod700.DEBUG_BUILD) {
          const debug = tmp12(701).debug;
          const error = debug.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = UNKNOWN_FUNCTION;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
};
