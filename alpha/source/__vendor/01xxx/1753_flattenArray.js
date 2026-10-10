// Module ID: 1753
// Function ID: 1754
// Name: flattenArray
// Dependencies: []
// Exports: flattenArray, has

// Module 1753 (flattenArray)

export const flattenArray = function flattenArray(style) {
  const f137662 = (arr) => {
    if (Array.isArray(arr)) {
      if (typeof _flattenArray === "function") {
        const item = arr.forEach(f137662);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      items.push(arr);
    }
  };
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arg0) {

    }
    let item = style.forEach(f137662);
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
export const has = (arg0, fn) => {
  let tmp = typeof fn === "function" || typeof fn === "object";
  if (tmp) {
    tmp = null != fn && arg0 in fn;
    const tmp3 = null != fn && arg0 in fn;
  }
  return tmp;
};
