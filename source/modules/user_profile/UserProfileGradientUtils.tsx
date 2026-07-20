// Module ID: 7882
// Function ID: 62771
// Name: getProfileTheme
// Dependencies: []
// Exports: calculateGradientSplitColors, calculateOverlayedColor, getUserProfileGradientContainerColors

// Module 7882 (getProfileTheme)
function getProfileTheme(first) {
  if (null == first) {
    return null;
  } else {
    if (obj.getDarkness(first) > 0.5) {
      let LIGHT = ThemeTypes.DARK;
    } else {
      LIGHT = ThemeTypes.LIGHT;
    }
    const obj = arg1(dependencyMap[2]);
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
let closure_3 = importDefault(dependencyMap[0]);
const ThemeTypes = arg1(dependencyMap[1]).ThemeTypes;
const obj = arg1(dependencyMap[4]);
const memoizeResult = arg1(dependencyMap[4]).memoize((primaryColor) => {
  let obj = arg1(dependencyMap[5]);
  obj = { base: "#ffffff", contrastRatio: arg1(dependencyMap[5]).WCAGContrastRatios.HighContrastText };
  const contrastingColor = obj.getContrastingColor(primaryColor, obj);
  return arg1(dependencyMap[2]).hex2int(contrastingColor);
}, (arg0) => arg0);
const obj2 = arg1(dependencyMap[4]);
const memoizeResult1 = arg1(dependencyMap[4]).memoize((first) => {
  let tmp = arg2;
  if (null == arg2) {
    tmp = getProfileTheme(first);
  }
  const obj = importDefault(dependencyMap[6]);
  const mixResult = obj.mix(importDefault(dependencyMap[6])(first), importDefault(dependencyMap[6])(arg1), 0.5, "lab");
  const result = Math.round(100 * mixResult.get("hsl.l")) / 100;
  if (tmp !== ThemeTypes.LIGHT) {
    let clampResult = arg1(dependencyMap[4]).clamp(result, 0, 0.1);
    const obj4 = arg1(dependencyMap[4]);
  } else {
    clampResult = arg1(dependencyMap[4]).clamp(result, 0.8, 1);
    const obj3 = arg1(dependencyMap[4]);
  }
  const tmp3 = importDefault(dependencyMap[6])(first);
  const result1 = importDefault(dependencyMap[6])(mixResult).set("hsl.l", clampResult);
  return result1.num();
}, (arg0, arg1, arg2) => "" + arg0 + "-" + arg1 + "-" + arg2);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/UserProfileGradientUtils.tsx");

export { getProfileTheme };
export { getValueInColorGradientByPercentage };
export const calculateOverlayedColor = function calculateOverlayedColor(secondaryColor, overlay) {
  const int2rgbArrayResult = overlay(dependencyMap[2]).int2rgbArray(secondaryColor);
  if (null == overlay) {
    return 0;
  } else {
    const parseStringResult = importDefault(dependencyMap[3]).parseString(overlay);
    if (null == parseStringResult) {
      return 0;
    } else {
      const items = [, , ];
      ({ red: arr[0], green: arr[1], blue: arr[2] } = parseStringResult);
      const items1 = [int2rgbArrayResult[0], int2rgbArrayResult[1], int2rgbArrayResult[2]];
      overlay = items1;
      const importDefault = parseStringResult.alpha;
      const tmp6 = callback(items.map((arg0, arg1) => Math.floor(alpha * arg0 + (1 - alpha) * items1[arg1])), 3);
      const first = tmp6[0];
      const _HermesInternal = HermesInternal;
      return overlay(dependencyMap[2]).rgb2int("rgba(" + first + ", " + tmp6[1] + ", " + tmp6[2] + ")");
    }
    const obj2 = importDefault(dependencyMap[3]);
  }
  const obj = overlay(dependencyMap[2]);
};
export const calculateButtonColor = memoizeResult;
export const calculateModalV2BackgroundColor = memoizeResult1;
export { getGradientPercentageColorInRgb };
export const calculateGradientSplitColors = function calculateGradientSplitColors(modalV2BackgroundColor, modalV2BackgroundColor) {
  if (0 === arg2) {
    return [];
  } else {
    const int2rgbArrayResult = modalV2BackgroundColor(dependencyMap[2]).int2rgbArray(modalV2BackgroundColor);
    const obj = modalV2BackgroundColor(dependencyMap[2]);
    const int2rgbArrayResult1 = modalV2BackgroundColor(dependencyMap[2]).int2rgbArray(modalV2BackgroundColor);
    const items = [getGradientPercentageColorInRgb(int2rgbArrayResult, int2rgbArrayResult1, 100 * arg3 / arg2), getGradientPercentageColorInRgb(int2rgbArrayResult, int2rgbArrayResult1, 100 * arg4 / arg2)];
    return items;
  }
};
export const getUserProfileGradientContainerColors = function getUserProfileGradientContainerColors(result, result1, arg2) {
  let int2rgbaResult1 = arg2;
  if ("string" === typeof arg2) {
    let int2rgbaResult = int2rgbaResult1;
    if (null != result) {
      int2rgbaResult = result1(dependencyMap[2]).int2rgba(result, 1);
      const obj3 = result1(dependencyMap[2]);
    }
    const items = [int2rgbaResult, ];
    if (null != result1) {
      int2rgbaResult1 = result1(dependencyMap[2]).int2rgba(result1, 1);
      const obj4 = result1(dependencyMap[2]);
    }
    items[1] = int2rgbaResult1;
    let items1 = items;
  } else {
    if (null != result) {
      let int2rgbaResult2 = result1(dependencyMap[2]).int2rgba(result, 1);
      const obj = result1(dependencyMap[2]);
    } else {
      int2rgbaResult2 = int2rgbaResult1[0];
    }
    items1 = [int2rgbaResult2, ];
    if (null != result1) {
      let int2rgbaResult3 = result1(dependencyMap[2]).int2rgba(result1, 1);
      const obj2 = result1(dependencyMap[2]);
    } else {
      int2rgbaResult3 = int2rgbaResult1[1];
    }
    items1[1] = int2rgbaResult3;
  }
  return items1;
};
