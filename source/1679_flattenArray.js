// Module ID: 1679
// Function ID: 18613
// Name: flattenArray
// Dependencies: []

// Module 1679 (flattenArray)
arg5.flattenArray = function flattenArray(style) {
  if (Array.isArray(style)) {
    const items = [];
    function _flattenArray(arr) {
      const item = arr.forEach((arg0) => {
        if (Array.isArray(arg0)) {
          outer1_1(arg0);
        } else {
          outer1_0.push(arg0);
        }
      });
    }
    _flattenArray(style);
    return items;
  } else {
    const items1 = [style];
    return items1;
  }
};
arg5.has = function has(arg0, arg1) {
  let tmp2 = "function" === tmp;
  if (!tmp2) {
    tmp2 = "object" === tmp;
  }
  if (tmp2) {
    let tmp4 = null != arg1;
    if (tmp4) {
      tmp4 = arg0 in arg1;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
