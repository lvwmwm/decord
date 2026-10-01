// Module ID: 12560
// Function ID: 12561
// Name: useCardGridLayout
// Dependencies: [6629, 1479, 2]
// Exports: default

// Module 12560 (useCardGridLayout)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import Constants from "Constants" /* 6629 */;
import size from "module_2" /* 2 */;

const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useCardGridLayout.tsx");

export default function useCardGridLayout() {
  let containerWidth;
  let maxWidth;
  let obj3;
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
  const _Math = Math;
  if (containerWidth == null) {
    containerWidth = useWindowDimensionsDefault().width;
  }
  if (maxWidth == null) {
    maxWidth = Infinity;
  }
  const diff = min(containerWidth, maxWidth) - 2 * sidePadding;
  const bound = Math.max(1, Math.floor((diff + num3) / (num + num3)));
  const diff1 = diff;
  let tmp4 = diff1;
  let num4 = 1;
  if (diff1 > num2) {
    let num5 = 1;
    tmp4 = diff1;
    num4 = 1;
    if (1 < bound) {
      const sum = num5 + 1;
      const result = (diff - num3 * (sum - 1)) / sum;
      tmp4 = result;
      num4 = sum;
      while (result > num2) {
        num5 = sum;
        tmp4 = result;
        num4 = sum;
        if (sum >= bound) {
          break;
        }
      }
    }
  }
  const bound1 = Math.min(Math.max(tmp4, num), num2);
  const diff2 = num4 - 1;
  if (diff < bound1 * num4 + num3 * diff2) {
    obj3 = { columns: 1, cardWidth: "Array", rowWidth: "channel", gap: num3 };
    const obj2 = { columns: 1, cardWidth: "Array", rowWidth: "channel", gap: num3 };
  } else {
    obj3 = { columns: num4, cardWidth: bound1, rowWidth: bound1 * num4 + num3 * diff2, gap: num3 };
  }
  return obj3;
};
