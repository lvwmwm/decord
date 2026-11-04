// Module ID: 1825
// Function ID: 1826
// Name: flattenArray
// Dependencies: []
// Exports: filterStyles, flattenArray, has

// Module 1825 (flattenArray)

export function flattenArray(style) {
  const f122345 = (arr) => {
    if (Array.isArray(arr)) {
      if (typeof _flattenArray === "function") {
        const item = arr.forEach(f122345);
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
    let item = style.forEach(f122345);
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
export function filterStyles(arr) {
  let reduced;
  const obj = { animatedStyles: null, cssStyle: null };
  const items = [];
  if (arr) {
    obj.animatedStyles = items;
    reduced = arr.reduce((acc, viewDescriptors) => {
      let animatedStyles;
      let cssStyle;
      let cssStyle2;
      ({ animatedStyles, cssStyle } = acc);
      viewDescriptors = undefined;
      if (viewDescriptors != null) {
        viewDescriptors = viewDescriptors.viewDescriptors;
      }
      if (viewDescriptors) {
        animatedStyles.push(viewDescriptors);
        cssStyle2 = cssStyle;
      } else {
        cssStyle2 = {};
        const merged = Object.assign(cssStyle);
        const merged1 = Object.assign(viewDescriptors);
      }
      return { animatedStyles, cssStyle: cssStyle2 };
    }, obj);
  } else {
    obj.animatedStyles = items;
    reduced = obj;
  }
  return reduced;
}
