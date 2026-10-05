// Module ID: 1740
// Function ID: 1741
// Name: flattenArray
// Dependencies: []
// Exports: flattenArray, has

// Module 1740 (flattenArray)

export const flattenArray = function flattenArray(style) {
  const f135290 = (arr) => {
    if (Array.isArray(arr)) {
      if (typeof _flattenArray === "function") {
        const item = arr.forEach(f135290);
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
    let item = style.forEach(f135290);
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
