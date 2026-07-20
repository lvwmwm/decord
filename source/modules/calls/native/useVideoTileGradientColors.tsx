// Module ID: 7881
// Function ID: 62765
// Name: rgbToHex
// Dependencies: []
// Exports: useVideoTileGradientColors

// Module 7881 (rgbToHex)
function rgbToHex(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  [tmp, tmp2, tmp3] = arg0;
  function toHex(arg0) {
    let str = Math.max(0, Math.min(255, arg0));
    str = str.toString(16);
    return str.padStart(2, "0");
  }
  const toHexResult = toHex(tmp);
  return "#" + toHexResult + toHex(tmp2) + toHex(tmp3);
}
function computeVideoTileGradientStops(modalV2BackgroundColor, modalV2BackgroundColor) {
  if (null != modalV2BackgroundColor) {
    if (null != modalV2BackgroundColor) {
      let DARK = modalV2BackgroundColor(dependencyMap[2]).getProfileTheme(modalV2BackgroundColor);
      if (null == DARK) {
        DARK = ThemeTypes.DARK;
      }
      const obj7 = modalV2BackgroundColor(dependencyMap[2]);
      const obj = modalV2BackgroundColor(dependencyMap[3]);
      const int2rgbArrayResult = obj.int2rgbArray(modalV2BackgroundColor(dependencyMap[2]).calculateModalV2BackgroundColor(modalV2BackgroundColor, modalV2BackgroundColor, DARK));
      const obj2 = modalV2BackgroundColor(dependencyMap[2]);
      const obj3 = modalV2BackgroundColor(dependencyMap[3]);
      const int2rgbArrayResult1 = modalV2BackgroundColor(dependencyMap[3]).int2rgbArray(modalV2BackgroundColor);
      const obj4 = modalV2BackgroundColor(dependencyMap[3]);
      const int2rgbArrayResult2 = modalV2BackgroundColor(dependencyMap[3]).int2rgbArray(modalV2BackgroundColor);
      const items = [int2rgbArrayResult[0], int2rgbArrayResult[1], int2rgbArrayResult[2]];
      const items1 = [, , ];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult1;
      let valueInColorGradientByPercentage = modalV2BackgroundColor(dependencyMap[2]).getValueInColorGradientByPercentage(items, items1, 20);
      const obj5 = modalV2BackgroundColor(dependencyMap[2]);
      const items2 = [, , ];
      [arr3[0], arr3[1], arr3[2]] = int2rgbArrayResult;
      const items3 = [, , ];
      [arr4[0], arr4[1], arr4[2]] = int2rgbArrayResult2;
      valueInColorGradientByPercentage = modalV2BackgroundColor(dependencyMap[2]).getValueInColorGradientByPercentage(items2, items3, 60);
      const items4 = [rgbToHex(valueInColorGradientByPercentage), rgbToHex(valueInColorGradientByPercentage)];
      return items4;
    }
  }
  return null;
}
let closure_2 = importAll(dependencyMap[0]);
const ThemeTypes = arg1(dependencyMap[1]).ThemeTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/calls/native/useVideoTileGradientColors.tsx");

export { computeVideoTileGradientStops };
export const useVideoTileGradientColors = function useVideoTileGradientColors(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => callback(arg0, arg1), items);
};
