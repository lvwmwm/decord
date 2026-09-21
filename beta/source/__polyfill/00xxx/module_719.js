// Module ID: 719
// Function ID: 720
// Dependencies: [692, 693, 702]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 719
import _mod692 from "module_692" /* 692 */;

require = arg1;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const dependencyMap = {};
let closure_3 = {};

export const addHandler = function addHandler(arg0, arg1) {
  dependencyMap[arg0] = dependencyMap[arg0] || [];
  dependencyMap[arg0].push(arg1);
};
export const maybeInstrument = function maybeInstrument(arg0, fn) {
  if (!closure_3[arg0]) {
    tmp2[arg0] = true;
    try {
      fn();
    } catch (tmp5) {
      if (_mod692.DEBUG_BUILD) {
        const debug = tmp6(693).debug;
        const _HermesInternal = HermesInternal;
        debug.error("Error while instrumenting " + tmp, tmp5);
      }
      tmp6 = require;
    }
  }
};
export const resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    dependencyMap[item] = undefined;
  });
};
export const triggerHandlers = function triggerHandlers(arg0, arg1) {
  let tmp8 = arg0;
  if (arg0) {
    tmp8 = dependencyMap[arg0];
  }
  if (tmp8) {
    const iter = tmp8[Symbol.iterator]();
    if (iter !== undefined) {
      try {
        tmp15(arg1);
      } catch (tmp18) {
        if (_mod692.DEBUG_BUILD) {
          const debug = tmp19(693).debug;
          debug.error(tmp2 + tmp6 + tmp3 + tmp19(702).getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = tmp19(702);
        }
      }
    }
    const nextResult = iter.next();
  }
};
