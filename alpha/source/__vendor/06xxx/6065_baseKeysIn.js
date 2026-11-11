// Module ID: 6065
// Function ID: 6066
// Name: baseKeysIn
// Dependencies: [521, 6066, 545]

// Module 6065 (baseKeysIn)
import isObject from "isObject" /* 521 */;
import isPrototype from "isPrototype" /* 545 */;
import nativeKeysIn from "nativeKeysIn" /* 6066 */;


export default function baseKeysIn(obj) {
  if (isObject(obj)) {
    const items = [];
    const tmp3 = isPrototype(obj);
    for (const key10017 in obj) {
      let tmp6 = "constructor" != key10017;
      if (!tmp6) {
        let callResult = !tmp3 && hasOwnProperty.call(obj, key10017);
        tmp6 = callResult;
      }
      if (!tmp6) {
        continue;
      } else {
        let arr = items.push(key10017);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return nativeKeysIn(obj);
  }
};
