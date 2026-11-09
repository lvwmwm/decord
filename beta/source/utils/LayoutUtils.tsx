// Module ID: 15884
// Function ID: 15885
// Name: LayoutUtils
// Dependencies: [2]
// Exports: convertFullCordsToMatchingOrientedCoords, fitFullCoordsToContainer, getAnchorCoordsFromFullCoords, getFullCoordsFromLayoutSize, getLeftWidgetSpecs, getRightWidgetSpecs, getSizePercentageFromSize

// Module 15884 (LayoutUtils)
import size_mod from "module_2" /* 2 */;

function getAnchorCoordsFromLayoutSize(arg0, height) {
  let bottom;
  let left;
  let right;
  let rounded1;
  let rounded2;
  let rounded3;
  let top;
  ({ top, bottom, left, right } = arg0);
  let rounded;
  if (null != top) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    rounded = Math.floor(Math.max(Math.min(top, 1), 0) * height.height);
  }
  const rect = { top: rounded, left: rounded1, bottom: rounded2, right: rounded3 };
  rounded1 = undefined;
  if (null != left) {
    const _Math4 = Math;
    const _Math5 = Math;
    const _Math6 = Math;
    rounded1 = Math.floor(Math.max(Math.min(left, 1), 0) * height.width);
  }
  rounded2 = undefined;
  if (null != bottom) {
    const _Math7 = Math;
    const _Math8 = Math;
    const _Math9 = Math;
    rounded2 = Math.floor(Math.max(Math.min(bottom, 1), 0) * height.height);
  }
  rounded3 = undefined;
  if (null != right) {
    const _Math10 = Math;
    const _Math11 = Math;
    const _Math12 = Math;
    rounded3 = Math.floor(Math.max(Math.min(right, 1), 0) * height.width);
  }
  return rect;
}
function getSizeFromLayoutSize(arg0, width) {
  let fixed;
  let height;
  let tmp6;
  ({ width, height, fixed } = arg0);
  if (fixed === undefined) {
    fixed = false;
  }
  size = { width: null, height: null, fixed: null };
  if (fixed) {
    size.width = width;
    size.height = height;
    size.fixed = fixed;
    tmp6 = size;
  } else {
    let rounded = width;
    if ("auto" !== width) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      rounded = Math.floor(Math.max(Math.min(width, 1), 0) * width.width);
    }
    size.width = rounded;
    let rounded1 = height;
    if ("auto" !== height) {
      const _Math4 = Math;
      const _Math5 = Math;
      const _Math6 = Math;
      rounded1 = Math.floor(Math.max(Math.min(height, 1), 0) * width.height);
    }
    size.height = rounded1;
    size.fixed = fixed;
    tmp6 = size;
  }
  return tmp6;
}
function getAnchorPercentageFromLayoutSize(anchor, height) {
  let bottom;
  let bound1;
  let bound2;
  let bound3;
  let left;
  let right;
  let top;
  ({ top, bottom, left, right } = anchor);
  let bound;
  if (null != top) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(top / height.height, 1), 0);
  }
  const rect = { top: bound, left: bound1, bottom: bound2, right: bound3 };
  bound1 = undefined;
  if (null != left) {
    const _Math3 = Math;
    const _Math4 = Math;
    bound1 = Math.max(Math.min(left / height.width, 1), 0);
  }
  bound2 = undefined;
  if (null != bottom) {
    const _Math5 = Math;
    const _Math6 = Math;
    bound2 = Math.max(Math.min(bottom / height.height, 1), 0);
  }
  bound3 = undefined;
  if (null != right) {
    const _Math7 = Math;
    const _Math8 = Math;
    bound3 = Math.max(Math.min(right / height.width, 1), 0);
  }
  return rect;
}
function getFullCoordsFromAnchorCoords(anchorCoordsFromLayoutSize, width, height, width2, height2) {
  let bottom;
  let diff;
  let left;
  let num;
  let right;
  let top;
  ({ top, bottom, left, right } = anchorCoordsFromLayoutSize);
  if (null == top) {
    let num2;
    let diff1;
    if (null == bottom) {
      diff = height - height2;
      num = 0;
    }
    if (null == left) {
      if (null == right) {
        diff1 = width - width2;
        num2 = 0;
      }
      if (null != num) {
        if (null != diff) {
          if (null != num2) {
            if (null != diff1) {
              const rect = { top: num, left: num2, bottom: diff, right: diff1 };
              return rect;
            }
          }
        }
      }
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Logically this can never happen based on our if/else statements");
      throw error;
    }
    if (null == left) {
      if (null != right) {
        num2 = width - (right + width2);
        diff1 = right;
      }
    }
    diff1 = right;
    num2 = left;
    const tmp4 = null == right && null != left;
    if (tmp4) {
      diff1 = width - (left + width2);
      num2 = left;
    }
  }
  if (null == top) {
    if (null != bottom) {
      num = height - (bottom + height2);
      diff = bottom;
    }
  }
  diff = bottom;
  num = top;
  if (null != top) {
    diff = height - (top + height2);
    num = top;
  }
}
let size = size_mod;
let result = size.fileFinishedImporting("utils/LayoutUtils.tsx");

export { getAnchorCoordsFromLayoutSize };
export { getSizeFromLayoutSize };
export { getAnchorPercentageFromLayoutSize };
export function getSizePercentageFromSize(size, width) {
  let fixed;
  let height;
  let tmp4;
  ({ width, height, fixed } = size);
  size = { width: null, height: null, fixed: null };
  if (fixed) {
    size.width = width;
    size.height = height;
    size.fixed = fixed;
    tmp4 = size;
  } else {
    let result = width;
    if ("auto" !== width) {
      result = width / width.width;
    }
    size.width = result;
    let result1 = height;
    if ("auto" !== height) {
      result1 = height / width.height;
    }
    size.height = result1;
    size.fixed = fixed;
    tmp4 = size;
  }
  return tmp4;
}
export { getFullCoordsFromAnchorCoords };
export function getAnchorCoordsFromFullCoords(arg0) {
  let bottom;
  let left;
  let right;
  let tmp4;
  let tmp5;
  let tmp6;
  let top;
  ({ top, left, bottom, right } = arg0);
  let tmp3;
  if (0 === top || top <= bottom) {
    tmp3 = top;
  }
  const rect = { top: tmp3, left: tmp4, bottom: tmp5, right: tmp6 };
  tmp4 = undefined;
  if (0 === left || left <= right) {
    tmp4 = left;
  }
  tmp5 = undefined;
  if (!(0 === top || top <= bottom)) {
    tmp5 = bottom;
  }
  tmp6 = undefined;
  if (!(0 === left || left <= right)) {
    tmp6 = right;
  }
  return rect;
}
export function fitFullCoordsToContainer(arg0) {
  let bottom;
  let left;
  let right;
  let top;
  ({ top, left, bottom, right } = arg0);
  let sum = top;
  let num = bottom;
  if (bottom < 0) {
    sum = top + bottom;
    num = 0;
  }
  let bottom1 = num;
  let top2 = sum;
  if (sum < 0) {
    bottom1 = num + sum;
    top2 = 0;
  }
  let sum2 = left;
  let num3 = right;
  if (right < 0) {
    sum2 = left + right;
    num3 = 0;
  }
  let right1 = num3;
  let left2 = sum2;
  if (sum2 < 0) {
    right1 = num3 + sum2;
    left2 = 0;
  }
  return { top: top2, left: left2, bottom: bottom1, right: right1 };
}
export function getFullCoordsFromLayoutSize(arg0, arg1, width) {
  let height;
  const tmp = getAnchorCoordsFromLayoutSize(arg0, width);
  ({ width, height } = getSizeFromLayoutSize(arg1, width));
  let num = 0;
  getSizeFromLayoutSize(arg1, width);
  if (typeof width !== "string") {
    num = width;
  }
  let num2 = 0;
  if (typeof height !== "string") {
    num2 = height;
  }
  return getFullCoordsFromAnchorCoords(tmp, width.width, width.height, num, num2);
}
export function getLeftWidgetSpecs(arg0, arg1, width) {
  let bottom;
  let fixed;
  let height;
  let height2;
  let height3;
  let left;
  let left2;
  let right;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let top;
  let top2;
  let width2;
  let width3;
  let point = arg3;
  ({ top, left } = arg0);
  if (arg3 === undefined) {
    point = { x: 0, y: 0 };
  }
  ({ width, height } = arg1);
  const rect = { top: top + point.y, left: left + point.x, bottom: "r", right: "HermesInternal" };
  ({ width: width2, height: height2 } = width);
  let num = 0;
  const tmp = getAnchorPercentageFromLayoutSize;
  if (typeof width === "number") {
    num = width;
  }
  let num2 = 0;
  if (typeof height === "number") {
    num2 = height;
  }
  ({ top: top2, left: left2, bottom, right } = getFullCoordsFromAnchorCoords(rect, width2, height2, num, num2));
  let sum = top2;
  let num3 = bottom;
  getFullCoordsFromAnchorCoords(rect, width2, height2, num, num2);
  if (bottom < 0) {
    sum = top2 + bottom;
    num3 = 0;
  }
  let sum1 = num3;
  let num4 = sum;
  if (sum < 0) {
    sum1 = num3 + sum;
    num4 = 0;
  }
  let sum2 = left2;
  let num5 = right;
  if (right < 0) {
    sum2 = left2 + right;
    num5 = 0;
  }
  let sum3 = num5;
  let num6 = sum2;
  if (sum2 < 0) {
    sum3 = num5 + sum2;
    num6 = 0;
  }
  let tmp10;
  if (0 === num4 || num4 <= sum1) {
    tmp10 = num4;
  }
  const rect1 = { top: tmp10, left: tmp11, bottom: tmp12, right: tmp13 };
  tmp11 = undefined;
  if (0 === num6 || num6 <= sum3) {
    tmp11 = num6;
  }
  tmp12 = undefined;
  if (!(0 === num4 || num4 <= sum1)) {
    tmp12 = sum1;
  }
  tmp13 = undefined;
  if (!(0 === num6 || num6 <= sum3)) {
    tmp13 = sum3;
  }
  const items = [tmp(rect1, width), ];
  ({ width: width3, height: height3, fixed } = arg1);
  size = { width: null, height: null, fixed: null };
  if (fixed) {
    size.width = width3;
    size.height = height3;
    size.fixed = fixed;
    tmp16 = size;
  } else {
    let result = width3;
    if ("auto" !== width3) {
      result = width3 / width.width;
    }
    size.width = result;
    let result1 = height3;
    if ("auto" !== height3) {
      result1 = height3 / width.height;
    }
    size.height = result1;
    size.fixed = fixed;
    tmp16 = size;
  }
  items[1] = tmp16;
  return items;
}
export function getRightWidgetSpecs(arg0, arg1, width) {
  let bottom;
  let fixed;
  let height;
  let height2;
  let height3;
  let left;
  let right;
  let right2;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let top;
  let top2;
  let width2;
  let width3;
  let point = arg3;
  ({ top, right } = arg0);
  if (arg3 === undefined) {
    point = { x: 0, y: 0 };
  }
  ({ width, height } = arg1);
  const rect = { top: top + point.y, left: "Array", bottom: "isArray", right: right - point.x };
  ({ width: width2, height: height2 } = width);
  let num = 0;
  const tmp = getAnchorPercentageFromLayoutSize;
  if (typeof width === "number") {
    num = width;
  }
  let num2 = 0;
  if (typeof height === "number") {
    num2 = height;
  }
  ({ top: top2, left, bottom, right: right2 } = getFullCoordsFromAnchorCoords(rect, width2, height2, num, num2));
  let sum = top2;
  let num3 = bottom;
  getFullCoordsFromAnchorCoords(rect, width2, height2, num, num2);
  if (bottom < 0) {
    sum = top2 + bottom;
    num3 = 0;
  }
  let sum1 = num3;
  let num4 = sum;
  if (sum < 0) {
    sum1 = num3 + sum;
    num4 = 0;
  }
  let sum2 = left;
  let num5 = right2;
  if (right2 < 0) {
    sum2 = left + right2;
    num5 = 0;
  }
  let sum3 = num5;
  let num6 = sum2;
  if (sum2 < 0) {
    sum3 = num5 + sum2;
    num6 = 0;
  }
  let tmp10;
  if (0 === num4 || num4 <= sum1) {
    tmp10 = num4;
  }
  const rect1 = { top: tmp10, left: tmp11, bottom: tmp12, right: tmp13 };
  tmp11 = undefined;
  if (0 === num6 || num6 <= sum3) {
    tmp11 = num6;
  }
  tmp12 = undefined;
  if (!(0 === num4 || num4 <= sum1)) {
    tmp12 = sum1;
  }
  tmp13 = undefined;
  if (!(0 === num6 || num6 <= sum3)) {
    tmp13 = sum3;
  }
  const items = [tmp(rect1, width), ];
  ({ width: width3, height: height3, fixed } = arg1);
  size = { width: null, height: null, fixed: null };
  if (fixed) {
    size.width = width3;
    size.height = height3;
    size.fixed = fixed;
    tmp16 = size;
  } else {
    let result = width3;
    if ("auto" !== width3) {
      result = width3 / width.width;
    }
    size.width = result;
    let result1 = height3;
    if ("auto" !== height3) {
      result1 = height3 / width.height;
    }
    size.height = result1;
    size.fixed = fixed;
    tmp16 = size;
  }
  items[1] = tmp16;
  return items;
}
export function convertFullCordsToMatchingOrientedCoords(top, top2) {
  const rect = { top: "add", bottom: "sa", left: "paddingHorizontal", right: "Array" };
  if (null != top2.top) {
    rect.top = top.top;
  }
  if (null != top2.bottom) {
    rect.bottom = top.bottom;
  }
  if (null != top2.left) {
    rect.left = top.left;
  }
  if (null != top2.right) {
    rect.right = top.right;
  }
  return rect;
}
