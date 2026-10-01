// Module ID: 550
// Function ID: 551
// Name: throttle
// Dependencies: [521, 551]

// Module 550 (throttle)
import isObject from "isObject" /* 521 */;


export default function throttle(fn, maxWait, leading) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let flag3 = true;
    let flag4 = true;
    const tmp6 = require;
    if (isObject(leading)) {
      let flag = true;
      if ("leading" in leading) {
        flag = leading.leading;
      }
      let flag2 = true;
      if ("trailing" in leading) {
        flag2 = leading.trailing;
      }
      flag3 = flag2;
      flag4 = flag;
    }
    const obj = { leading: flag4, maxWait, trailing: flag3 };
    return tmp6(551)(fn, maxWait, obj);
  }
};
