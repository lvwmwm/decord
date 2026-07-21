// Module ID: 12483
// Function ID: 95361
// Name: rateLimit
// Dependencies: [284214097]
// Exports: default

// Module 12483 (rateLimit)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("lib/rateLimit.tsx");

export default function rateLimit(arg0, arg1, arg2) {
  let closure_4 = [];
  function wrapper(arg0) {
    const items = [...arguments];
    arg0 = items;
    const timestamp = Date.now();
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      let timeout = null;
    }
    if (arr.length > 0) {
      if (arr[0] <= timestamp) {
        let arr = arr.shift();
        while (arr.length > 0) {
          let tmp7 = arr;
          if (arr[0] > timestamp) {
            break;
          }
        }
      }
    }
    if (arr.length < arg0) {
      arr = arr.push(timestamp + arg1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, undefined);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => callback(...closure_0), arr[0] - timestamp);
    }
  }
  return wrapper;
};
