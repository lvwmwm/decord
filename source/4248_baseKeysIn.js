// Module ID: 4248
// Function ID: 37317
// Name: baseKeysIn
// Dependencies: []

// Module 4248 (baseKeysIn)

export default function baseKeysIn(obj) {
  if (require(dependencyMap[0])(obj)) {
    const items = [];
    for (const key10022 in arg0) {
      let tmp9 = key10022;
      let tmp7 = "constructor" != key10022;
      if (!tmp7) {
        let callResult = !tmp3;
        if (callResult) {
          let tmp6 = closure_2;
          callResult = closure_2.call(arg0, key10022);
        }
        tmp7 = callResult;
      }
      if (!tmp7) {
        continue;
      } else {
        let arr = items.push(key10022);
        // continue
      }
      continue;
    }
    return items;
  } else {
    return tmp(tmp2[1])(obj);
  }
  const tmp = require;
  const tmp2 = dependencyMap;
};
