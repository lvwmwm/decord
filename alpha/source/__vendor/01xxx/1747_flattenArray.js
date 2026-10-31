// Module ID: 1747
// Function ID: 1748
// Name: flattenArray
// Dependencies: []
// Exports: flattenArray, has

// Module 1747 (flattenArray)

export function flattenArray(style) {
  const f121594 = (arr) => {
    if (Array.isArray(arr)) {
      if (typeof _flattenArray === "function") {
        const item = arr.forEach(f121594);
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
    let item = style.forEach(f121594);
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
}
export const has = (arg0, fn) => {
  let tmp = typeof fn === "function" || typeof fn === "object";
  if (tmp) {
    tmp = null != fn && arg0 in fn;
    const tmp3 = null != fn && arg0 in fn;
  }
  return tmp;
};
