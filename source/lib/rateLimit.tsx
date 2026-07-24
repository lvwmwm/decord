// Module ID: 12655
// Function ID: 97888
// Name: rateLimit
// Dependencies: [2]
// Exports: default

// Module 12655 (rateLimit)
const result = require("set").fileFinishedImporting("lib/rateLimit.tsx");

export default function rateLimit(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_4 = [];
  function wrapper(arg0) {
    const items = [...arguments];
    const timestamp = Date.now();
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
    if (arr.length > 0) {
      if (arr[0] <= timestamp) {
        arr = arr.shift();
        while (arr.length > 0) {
          let tmp7 = arr;
          if (arr[0] > timestamp) {
            break;
          }
        }
      }
    }
    if (arr.length < items) {
      arr = arr.push(timestamp + closure_1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, undefined);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => outer1_5(...items), arr[0] - timestamp);
    }
  }
  return wrapper;
};
