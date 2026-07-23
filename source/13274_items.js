// Module ID: 13274
// Function ID: 101742
// Name: items
// Dependencies: [13237, 13235, 13253, 13275, 13276]

// Module 13274 (items)
let closure_2 = require("call")([].push);

export default (arg0, arg1) => {
  const tmp = require(13235)(arg0);
  const items = [];
  for (const key10014 in tmp) {
    let tmp15 = key10014;
    let tmp16 = require;
    let tmp17 = dependencyMap;
    let tmp18 = require(13253) /* call */;
    let tmp4 = !tmp18(require(13275), key10014);
    if (tmp4) {
      let tmp2 = require;
      let tmp3 = dependencyMap;
      tmp4 = require(13253) /* call */(tmp, key10014);
    }
    if (!tmp4) {
      continue;
    } else {
      let tmp5 = callback;
      let tmp6 = callback(items, key10014);
      continue;
    }
    continue;
  }
  let num = 0;
  if (arg1.length > 0) {
    do {
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let tmp9 = +num;
      num = tmp9 + 1;
      let tmp10 = arg1[tmp9];
      if (require(13253) /* call */(tmp, tmp10)) {
        let tmp11 = require;
        let tmp12 = dependencyMap;
        let arr2 = require(13276) /* createMethod */;
        if (!~arr2.indexOf(items, tmp10)) {
          let tmp13 = callback;
          let tmp14 = callback(items, tmp10);
        }
      }
    } while (arg1.length > num);
  }
  return items;
};
