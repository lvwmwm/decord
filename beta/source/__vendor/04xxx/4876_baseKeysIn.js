// Module ID: 4876
// Function ID: 4877
// Name: baseKeysIn
// Dependencies: [521, 4877, 545]

// Module 4876 (baseKeysIn)
import _mod521 from "module_521" /* 521 */;


export default function baseKeysIn(obj) {
  if (_mod521(obj)) {
    const tmp3 = tmp(545)(obj);
    const items = [];
    for (const key10017 in arg0) {
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
    return tmp(4877)(obj);
  }
};
