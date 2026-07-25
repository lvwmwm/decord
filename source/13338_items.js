// Module ID: 13338
// Function ID: 102196
// Name: items
// Dependencies: [13301, 13299, 13317, 13339, 13340]

// Module 13338 (items)
let closure_2 = require("call")([].push);

export default (arg0, arg1) => {
  const tmp = require(13299)(arg0);
  const items = [];
  for (const key10014 in tmp) {
    let tmp15 = key10014;
    let tmp16 = require;
    let tmp17 = dependencyMap;
    let tmp18 = require(13317) /* call */;
    let tmp4 = !tmp18(require(13339), key10014);
    if (tmp4) {
      let tmp2 = require;
      let tmp3 = dependencyMap;
      tmp4 = require(13317) /* call */(tmp, key10014);
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
      if (require(13317) /* call */(tmp, tmp10)) {
        let tmp11 = require;
        let tmp12 = dependencyMap;
        let arr2 = require(13340) /* createMethod */;
        if (!~arr2.indexOf(items, tmp10)) {
          let tmp13 = callback;
          let tmp14 = callback(items, tmp10);
        }
      }
    } while (arg1.length > num);
  }
  return items;
};
