// Module ID: 1034
// Function ID: 1035
// Dependencies: [1028]
// Exports: addTimeToInitialDisplayFallback, getTimeToInitialDisplayFallback

// Module 1034
import AsyncExpiringMap from "AsyncExpiringMap" /* 1028 */;

let c0;

const asyncExpiringMap = new AsyncExpiringMap.AsyncExpiringMap({ ttl: 60000 });

export const addTimeToInitialDisplayFallback = (arg0, arg1) => {
  const result = asyncExpiringMap.set(arg0, arg1);
};
export const getTimeToInitialDisplayFallback = (arg0) => {
  let closure_0 = arg0;
  return closure_0(undefined, undefined, undefined, function*(arg0, value) {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c0 = 3;
          const obj = { value: asyncExpiringMap.get(closure_0), done: true };
          return obj;
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
};
