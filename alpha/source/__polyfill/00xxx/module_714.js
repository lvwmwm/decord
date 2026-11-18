// Module ID: 714
// Function ID: 715
// Dependencies: [687, 688, 697]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 714
import DEBUG_BUILD from "DEBUG_BUILD" /* 687 */;
import UNKNOWN_FUNCTION from "UNKNOWN_FUNCTION" /* 697 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = {};
let closure_3 = {};

export function addHandler(console, errorCallback) {
  const tmp2 = closure_2[console] || [];
  closure_2[console] = tmp2;
  const arr = closure_2[console];
  arr.push(errorCallback);
}
export function maybeInstrument(console, instrumentConsole) {
  if (!closure_3[console]) {
    tmp[console] = true;
    try {
      instrumentConsole();
    } catch (tmp4) {
      const tmp5 = require;
      if (DEBUG_BUILD.DEBUG_BUILD) {
        const debug = tmp5(688).debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + console, tmp4);
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
        if (DEBUG_BUILD.DEBUG_BUILD) {
          const debug = tmp12(688).debug;
          const error = debug.error;
          const _HermesInternal = HermesInternal;
          const tmp12Result = UNKNOWN_FUNCTION;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp12Result.getFunctionName(nextResult) + "\nError:", tmp11);
        }
      }
    }
  }
}
