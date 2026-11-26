// Module ID: 15356
// Function ID: 15357
// Dependencies: [15351, 15322]

// Module 15356
import _mod15322 from "module_15322" /* 15322 */;

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
    const tmp6 = new require("module_15351")(arg1, arg2);
    let tmp7 = tmp6;
    regex = tmp6;
    const item = arr.forEach(function(item) {
      if (regex.test(item)) {
        const tmp = c1 && 1 !== closure_2.compare(item);
        if (!tmp) {
          c1 = item;
          const self = this;
          const self2 = this;
          closure_2 = new _mod15322(c1, closure_0);
          const tmp7 = new _mod15322(c1, closure_0);
        }
      }
    });
    return dependencyMap;
  } catch (err) {
    return null;
  }
};
