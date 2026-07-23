// Module ID: 4252
// Function ID: 37349
// Name: baseKeysIn
// Dependencies: [573, 4253, 614]

// Module 4252 (baseKeysIn)

export default function baseKeysIn(obj) {
  if (require(573) /* isObject */(obj)) {
    const items = [];
    for (const key10022 in arg0) {
      let tmp9 = key10022;
      let tmp7 = "constructor" != key10022;
      if (!tmp7) {
        let callResult = !tmp3;
        if (callResult) {
          let tmp6 = hasOwnProperty;
          callResult = hasOwnProperty.call(arg0, key10022);
        }
        tmp7 = callResult;
      }
      if (!tmp7) {
        continue;
      } else {
        let arr = items.push(key10022);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return tmp(4253)(obj);
  }
  tmp = require;
};
