// Module ID: 13144
// Function ID: 99508
// Name: items
// Dependencies: []

// Module 13144 (items)
let closure_2 = require(dependencyMap[0])([].push);

export default (arg0, arg1) => {
  const tmp = require(dependencyMap[1])(arg0);
  const items = [];
  for (const key10014 in tmp) {
    let tmp15 = key10014;
    let tmp16 = closure_0;
    let tmp17 = closure_1;
    let tmp18 = closure_0(closure_1[2]);
    let tmp4 = !tmp18(closure_0(closure_1[3]), key10014);
    if (tmp4) {
      let tmp2 = closure_0;
      let tmp3 = closure_1;
      tmp4 = closure_0(closure_1[2])(tmp, key10014);
    }
    if (!tmp4) {
      continue;
    } else {
      let tmp5 = closure_2;
      let tmp6 = closure_2(items, key10014);
      // continue
    }
    continue;
  }
  let num = 0;
  if (arg1.length > 0) {
    do {
      let tmp7 = closure_0;
      let tmp8 = closure_1;
      let tmp9 = +num;
      num = tmp9 + 1;
      let tmp10 = arg1[tmp9];
      if (closure_0(closure_1[2])(tmp, tmp10)) {
        let tmp11 = closure_0;
        let tmp12 = closure_1;
        let arr2 = closure_0(closure_1[4]);
        if (!~arr2.indexOf(items, tmp10)) {
          let tmp13 = closure_2;
          let tmp14 = closure_2(items, tmp10);
        }
      }
    } while (arg1.length > num);
  }
  return items;
};
