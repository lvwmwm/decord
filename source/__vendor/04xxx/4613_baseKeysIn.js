// Module ID: 4613
// Function ID: 4614
// Name: baseKeysIn
// Dependencies: [603, 4614, 627]

// Module 4613 (baseKeysIn)
import isObject from "isObject" /* 603 */;


export default function baseKeysIn(obj) {
  if (isObject(obj)) {
    const tmp3 = tmp(627)(obj);
    const items = [];
    for (const key10017 in arg0) {
      let tmp10 = key10017;
      let tmp8 = "constructor" != key10017;
      if (!tmp8) {
        if (tmp3) {
          tmp8 = !tmp3;
        } else {
          let tmp5 = hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let callResult = tmp5(key10017);
          } else {
            callResult = call(arg0, key10017);
          }
          let tmp7 = callResult;
        }
      }
      if (!tmp8) {
        continue;
      } else {
        let arr = items.push(key10017);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return tmp(4614)(obj);
  }
};
