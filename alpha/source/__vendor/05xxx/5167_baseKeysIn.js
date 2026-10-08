// Module ID: 5167
// Function ID: 5168
// Name: baseKeysIn
// Dependencies: [521, 5168, 545]

// Module 5167 (baseKeysIn)
import isObject from "isObject" /* 521 */;
import isPrototype from "isPrototype" /* 545 */;
import nativeKeysIn from "nativeKeysIn" /* 5168 */;


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
