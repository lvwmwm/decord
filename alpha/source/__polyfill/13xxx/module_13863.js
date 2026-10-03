// Module ID: 13863
// Function ID: 13864
// Dependencies: [13858, 13829]

// Module 13863
import _mod13829 from "module_13829" /* 13829 */;

const require = globalThis.__r;
let _require, c1, dependencyMap;


export default function(arr, arg1, arg2) {
  let closure_0;
  _require = arg2;
  dependencyMap = null;
  let closure_2 = null;
  let regex = null;
  try {
    let tmp = arg1;
    let self = this;
    let self2 = this;
    const tmp6 = new require("module_13858")(arg1, arg2);
    let tmp7 = tmp6;
    regex = tmp6;
    const item = arr.forEach(function(item) {
      if (regex.test(item)) {
        const tmp = c1 && 1 !== closure_2.compare(item);
        if (!tmp) {
          c1 = item;
          const self = this;
          const self2 = this;
          closure_2 = new _mod13829(c1, closure_0);
          const tmp7 = new _mod13829(c1, closure_0);
        }
      }
    });
    return dependencyMap;
  } catch (err) {
    return null;
  }
};
