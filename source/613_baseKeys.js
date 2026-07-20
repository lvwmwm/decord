// Module ID: 613
// Function ID: 7054
// Name: baseKeys
// Dependencies: []

// Module 613 (baseKeys)

export default function baseKeys(arg0) {
  if (require(dependencyMap[0])(arg0)) {
    const items = [];
    const _Object = Object;
    for (const key10020 in Object(arg0)) {
      let tmp6 = key10020;
      let tmp7 = closure_2;
      let callResult = closure_2.call(arg0, key10020);
      if (callResult) {
        callResult = "constructor" != key10020;
      }
      if (!callResult) {
        continue;
      } else {
        let arr = items.push(key10020);
        // continue
      }
      continue;
    }
    return items;
  } else {
    return require(dependencyMap[1])(arg0);
  }
};
