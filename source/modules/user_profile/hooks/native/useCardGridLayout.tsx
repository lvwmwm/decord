// Module ID: 11980
// Function ID: 92616
// Name: calculateTotalGaps
// Dependencies: []
// Exports: default

// Module 11980 (calculateTotalGaps)
function calculateTotalGaps(arg0, arg1) {
  return arg1 * (arg0 - 1);
}
function calculateCardWidth(arg0, arg1, arg2) {
  return (arg1 - calculateTotalGaps(arg0, arg2)) / arg0;
}
const PROFILE_SIDE_PADDING = require(dependencyMap[0]).PROFILE_SIDE_PADDING;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/native/useCardGridLayout.tsx");

export default function useCardGridLayout() {
  let containerWidth;
  let maxWidth;
  let sidePadding;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minCardSize;
  if (num === undefined) {
    num = 150;
  }
  let num2 = obj.maxCardSize;
  if (num2 === undefined) {
    num2 = 180;
  }
  let num3 = obj.gap;
  if (num3 === undefined) {
    num3 = 16;
  }
  ({ containerWidth, maxWidth, sidePadding } = obj);
  if (sidePadding === undefined) {
    sidePadding = PROFILE_SIDE_PADDING;
  }
  let width = importDefault(dependencyMap[1])().width;
  if (null != containerWidth) {
    width = containerWidth;
  }
  let num4 = Infinity;
  if (null != maxWidth) {
    num4 = maxWidth;
  }
  const diff = Math.min(width, num4) - 2 * sidePadding;
  const bound = Math.max(1, Math.floor((diff + num3) / (num + num3)));
  const tmp3 = calculateCardWidth(1, diff, num3);
  let num5 = 1;
  let tmp4 = tmp3;
  if (tmp3 > num2) {
    let num6 = 1;
    num5 = 1;
    tmp4 = tmp3;
    if (1 < bound) {
      const sum = num6 + 1;
      const tmp7 = calculateCardWidth(sum, diff, num3);
      num5 = sum;
      tmp4 = tmp7;
      while (tmp7 > num2) {
        num6 = sum;
        tmp4 = tmp7;
        num5 = sum;
        if (sum >= bound) {
          break;
        }
      }
    }
  }
  const bound1 = Math.min(Math.max(tmp4, num), num2);
  const result = bound1 * num5;
  if (result + calculateTotalGaps(num5, num3) > diff) {
    obj = { columns: 1, cardWidth: undefined, rowWidth: undefined, gap: num3 };
  } else {
    obj = { columns: num5, cardWidth: bound1, rowWidth: bound1 * num5 + num3 * (num5 - 1), gap: num3 };
  }
  return obj;
};
