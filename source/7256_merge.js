// Module ID: 7256
// Function ID: 58475
// Name: merge
// Dependencies: []

// Module 7256 (merge)
function merge(arg0, obj) {
  let num = 2;
  if (arguments.length > 2) {
    num = 2;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (obj) {
    if ("object" === typeof obj) {
      if (num > 0) {
        if (arg0) {
          if (obj) {
            const _Object = Object;
            if (0 === Object.keys(obj).length) {
              return arg0;
            }
          }
        }
        const _Object2 = Object;
        const merged = Object.assign({}, arg0);
        for (const key10024 in arg1) {
          let tmp6 = key10024;
          let _Object3 = Object;
          if (!hasOwnProperty.call(arg1, key10024)) {
            continue;
          } else {
            let tmp5 = closure_0;
            merged[key10024] = closure_0(merged[key10024], arg1[key10024], num - 1);
            // continue
          }
          continue;
        }
        return merged;
      }
    }
  }
  return obj;
}
arg5.merge = merge;
