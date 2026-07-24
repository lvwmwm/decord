// Module ID: 7980
// Function ID: 63154
// Name: getProfileTheme
// Dependencies: [57, 653, 665, 3975, 22, 3976, 666, 2]
// Exports: calculateGradientSplitColors, calculateOverlayedColor, getUserProfileGradientContainerColors

// Module 7980 (getProfileTheme)
import _slicedToArray from "_slicedToArray";
import { ThemeTypes } from "ME";
import apply from "apply";
import apply from "apply";

const require = arg1;
function getProfileTheme(first) {
  if (null == first) {
    return null;
  } else {
    if (obj.getDarkness(first) > 0.5) {
      let LIGHT = ThemeTypes.DARK;
    } else {
      LIGHT = ThemeTypes.LIGHT;
    }
    obj = require(665) /* pad2 */;
  }
}
function getValueInColorGradientByPercentage(items, items1, arg2) {
  const result = arg2 / 100;
  const diff = 1 - result;
  items = [Math.round(items[0] * diff + items1[0] * result), Math.round(items[1] * diff + items1[1] * result), Math.round(items[2] * diff + items1[2] * result)];
  return items;
}
function getGradientPercentageColorInRgb(int2rgbArrayResult, int2rgbArrayResult1, arg2) {
  const tmp = getValueInColorGradientByPercentage(int2rgbArrayResult, int2rgbArrayResult1, arg2);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", 1)";
}
const memoizeResult = apply.memoize((primaryColor) => {
  let obj = require(3976) /* AccessibilityAnnouncer */;
  obj = { base: "#ffffff", contrastRatio: require(3976) /* AccessibilityAnnouncer */.WCAGContrastRatios.HighContrastText };
  const contrastingColor = obj.getContrastingColor(primaryColor, obj);
  return require(665) /* pad2 */.hex2int(contrastingColor);
}, (arg0) => arg0);
const memoizeResult1 = apply.memoize((first) => {
  let tmp = arg2;
  if (null == arg2) {
    tmp = getProfileTheme(first);
  }
  const obj = importDefault(666);
  const mixResult = obj.mix(importDefault(666)(first), importDefault(666)(arg1), 0.5, "lab");
  const result = Math.round(100 * mixResult.get("hsl.l")) / 100;
  if (tmp !== ThemeTypes.LIGHT) {
    let clampResult = require(22) /* apply */.clamp(result, 0, 0.1);
    const obj4 = require(22) /* apply */;
  } else {
    clampResult = require(22) /* apply */.clamp(result, 0.8, 1);
    const obj3 = require(22) /* apply */;
  }
  const tmp3 = importDefault(666)(first);
  const result1 = importDefault(666)(mixResult).set("hsl.l", clampResult);
  return result1.num();
}, (arg0, arg1, arg2) => "" + arg0 + "-" + arg1 + "-" + arg2);
let result = require("pad2").fileFinishedImporting("modules/user_profile/UserProfileGradientUtils.tsx");

export { getProfileTheme };
export { getValueInColorGradientByPercentage };
export const calculateOverlayedColor = function calculateOverlayedColor(secondaryColor, overlay) {
  const int2rgbArrayResult = items1(665).int2rgbArray(secondaryColor);
  if (null == overlay) {
    return 0;
  } else {
    const parseStringResult = alpha(3975).parseString(overlay);
    if (null == parseStringResult) {
      return 0;
    } else {
      const items = [, , ];
      ({ red: arr[0], green: arr[1], blue: arr[2] } = parseStringResult);
      items1 = [int2rgbArrayResult[0], int2rgbArrayResult[1], int2rgbArrayResult[2]];
      alpha = parseStringResult.alpha;
      const tmp6 = callback(items.map((arg0, arg1) => Math.floor(alpha * arg0 + (1 - alpha) * items1[arg1])), 3);
      const first = tmp6[0];
      const _HermesInternal = HermesInternal;
      return items1(665).rgb2int("rgba(" + first + ", " + tmp6[1] + ", " + tmp6[2] + ")");
    }
    const obj2 = alpha(3975);
  }
  const obj = items1(665);
};
export const calculateButtonColor = memoizeResult;
export const calculateModalV2BackgroundColor = memoizeResult1;
export { getGradientPercentageColorInRgb };
export const calculateGradientSplitColors = function calculateGradientSplitColors(modalV2BackgroundColor, modalV2BackgroundColor) {
  if (0 === arg2) {
    return [];
  } else {
    const int2rgbArrayResult = require(665) /* pad2 */.int2rgbArray(modalV2BackgroundColor);
    const obj = require(665) /* pad2 */;
    const int2rgbArrayResult1 = require(665) /* pad2 */.int2rgbArray(modalV2BackgroundColor);
    const items = [getGradientPercentageColorInRgb(int2rgbArrayResult, int2rgbArrayResult1, 100 * arg3 / arg2), getGradientPercentageColorInRgb(int2rgbArrayResult, int2rgbArrayResult1, 100 * arg4 / arg2)];
    return items;
  }
};
export const getUserProfileGradientContainerColors = function getUserProfileGradientContainerColors(result, result1, closure_2) {
  let int2rgbaResult1 = closure_2;
  if ("string" === typeof closure_2) {
    let int2rgbaResult = int2rgbaResult1;
    if (null != result) {
      int2rgbaResult = require(665) /* pad2 */.int2rgba(result, 1);
      const obj3 = require(665) /* pad2 */;
    }
    const items = [int2rgbaResult, ];
    if (null != result1) {
      int2rgbaResult1 = require(665) /* pad2 */.int2rgba(result1, 1);
      const obj4 = require(665) /* pad2 */;
    }
    items[1] = int2rgbaResult1;
    let items1 = items;
  } else {
    if (null != result) {
      let int2rgbaResult2 = require(665) /* pad2 */.int2rgba(result, 1);
      const obj = require(665) /* pad2 */;
    } else {
      int2rgbaResult2 = int2rgbaResult1[0];
    }
    items1 = [int2rgbaResult2, ];
    if (null != result1) {
      let int2rgbaResult3 = require(665) /* pad2 */.int2rgba(result1, 1);
      const obj2 = require(665) /* pad2 */;
    } else {
      int2rgbaResult3 = int2rgbaResult1[1];
    }
    items1[1] = int2rgbaResult3;
  }
  return items1;
};
