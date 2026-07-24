// Module ID: 5399
// Function ID: 46267
// Name: binarySearchVisibleIndex
// Dependencies: []

// Module 5399 (binarySearchVisibleIndex)
function binarySearchVisibleIndex(layouts, bound1, horizontal, arg3) {
  let diff1;
  let sum;
  let diff = layouts.length - 1;
  let num = -1;
  let num2 = -1;
  let num3 = 0;
  if (0 <= diff) {
    do {
      let _Math = Math;
      let rounded = Math.floor((num3 + diff) / 2);
      let size = layouts[rounded];
      let tmp3 = horizontal ? size.x : size.y;
      if (arg3) {
        if (tmp3 < bound1) {
          if (tmp3 + (horizontal ? size.width : size.height) <= bound1) {
            sum = rounded + 1;
            diff1 = diff;
            let tmp6 = num;
          }
        }
        diff1 = rounded - 1;
        sum = num3;
        tmp6 = rounded;
      } else if (tmp3 <= bound1) {
        sum = rounded + 1;
        diff1 = diff;
        tmp6 = rounded;
      } else {
        diff1 = rounded - 1;
        sum = num3;
        tmp6 = num;
      }
      num3 = sum;
      diff = diff1;
      num = tmp6;
      num2 = tmp6;
    } while (sum <= diff1);
  }
  return num2;
}
arg5.findFirstVisibleIndex = function findFirstVisibleIndex(layouts, bound1, horizontal) {
  return binarySearchVisibleIndex(layouts, bound1, horizontal, true);
};
arg5.findLastVisibleIndex = function findLastVisibleIndex(layouts, bound1, horizontal) {
  return binarySearchVisibleIndex(layouts, bound1, horizontal, false);
};
