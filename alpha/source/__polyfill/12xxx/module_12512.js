// Module ID: 12512
// Function ID: 12513
// Dependencies: [12513, 12514, 12517]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 12512
import _mod12513 from "module_12513" /* 12513 */;

require = arg1;
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
      if (_mod12513.DEBUG_BUILD) {
        const logger = tmp6(12514).logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + tmp, tmp5);
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
        if (_mod12513.DEBUG_BUILD) {
          const logger = tmp19(12514).logger;
          logger.error(tmp2 + tmp6 + tmp3 + tmp19(12517).getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = tmp19(12517);
        }
      }
    }
    const nextResult = iter.next();
  }
};
