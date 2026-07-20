// Module ID: 8147
// Function ID: 64446
// Name: flattenStyle
// Dependencies: []

// Module 8147 (flattenStyle)
function flattenStyle(arg0) {
  if (null !== arg0) {
    if ("object" === typeof arg0) {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        const obj = {};
        for (let num = 0; num < length; num = num + 1) {
          let tmp2 = flattenStyle;
          let tmp3 = flattenStyle(arg0[num]);
          if (tmp3) {
            let tmp4 = tmp3;
            for (const key10019 in tmp3) {
              let tmp5 = key10019;
              obj[key10019] = tmp3[key10019];
            }
          }
        }
        return obj;
      } else {
        return arg0;
      }
    }
  }
}

export default function DeprecatedStyleSheetPropType(arg0) {
  const callback = callback(dependencyMap[0])(arg0);
  return (arg0, arg1, arg2, arg3) => {
    let tmp = arg0;
    if (arg0[arg1]) {
      const obj = {};
      obj[arg1] = callback2(arg0[arg1]);
      tmp = obj;
    }
    const length = arguments.length;
    let num = 0;
    if (length > 4) {
      num = length - 4;
    }
    const array = new Array(num);
    for (let num2 = 4; num2 < length; num2 = num2 + 1) {
      array[num2 - 4] = arguments[num2];
    }
    const items = [tmp, arg1, arg2, arg3];
    return callback.apply(undefined, items.concat(array));
  };
};
