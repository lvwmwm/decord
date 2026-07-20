// Module ID: 4284
// Function ID: 37436
// Name: baseFlatten
// Dependencies: []

// Module 4284 (baseFlatten)
function baseFlatten(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg2;
  let items = arg4;
  if (!arg2) {
    tmp = require(dependencyMap[0]);
  }
  if (!items) {
    items = [];
  }
  let num2 = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp4 = arg0[num2];
      if (arg1 > 0) {
        if (tmp(tmp4)) {
          if (arg1 > 1) {
            let tmp8 = baseFlatten;
            let tmp9 = tmp4;
            let tmp10 = tmp;
            let tmp11 = arg3;
            let tmp12 = items;
            let tmp13 = baseFlatten(tmp4, arg1 - 1, tmp, arg3, items);
          } else {
            let tmp5 = require;
            let tmp6 = dependencyMap;
            let tmp7 = require(dependencyMap[1])(items, tmp4);
          }
          num2 = num2 + 1;
          if (num2 >= length) {
            break;
          }
        }
      }
      if (!arg3) {
        items[items.length] = tmp4;
      }
    }
  }
  return items;
}

export default baseFlatten;
