// Module ID: 13614
// Function ID: 13615
// Name: items
// Dependencies: [13577, 13575, 13593, 13615, 13616]

// Module 13614 (items)
let closure_2 = require("call")([].push);

export default (arg0, arg1) => {
  const tmp = require(13575)(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp11 = key10010;
    let tmp12 = require;
    let tmp13 = dependencyMap;
    let tmp14 = require(13593) /* call */;
    let tmp14Result = tmp14(require(13615), key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(13593)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp3 = callback;
      let tmp4 = callback(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let tmp7 = arg1[num];
    let tmp8 = num;
    if (require(13593) /* call */(tmp, tmp7)) {
      let tmp5Result = tmp5(13616);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp9 = callback;
        let tmp10 = callback(items, tmp7);
      }
    }
  }
  return items;
};
