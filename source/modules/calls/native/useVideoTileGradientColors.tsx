// Module ID: 7892
// Function ID: 62837
// Name: rgbToHex
// Dependencies: [31, 653, 7893, 665, 2]
// Exports: useVideoTileGradientColors

// Module 7892 (rgbToHex)
import result from "result";
import { ThemeTypes } from "ME";

const require = arg1;
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
      let DARK = require(7893) /* getProfileTheme */.getProfileTheme(modalV2BackgroundColor);
      if (null == DARK) {
        DARK = ThemeTypes.DARK;
      }
      const obj7 = require(7893) /* getProfileTheme */;
      const obj = require(665) /* pad2 */;
      const int2rgbArrayResult = obj.int2rgbArray(require(7893) /* getProfileTheme */.calculateModalV2BackgroundColor(modalV2BackgroundColor, modalV2BackgroundColor, DARK));
      const obj2 = require(7893) /* getProfileTheme */;
      const obj3 = require(665) /* pad2 */;
      const int2rgbArrayResult1 = require(665) /* pad2 */.int2rgbArray(modalV2BackgroundColor);
      const obj4 = require(665) /* pad2 */;
      const int2rgbArrayResult2 = require(665) /* pad2 */.int2rgbArray(modalV2BackgroundColor);
      const items = [int2rgbArrayResult[0], int2rgbArrayResult[1], int2rgbArrayResult[2]];
      const items1 = [, , ];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult1;
      let valueInColorGradientByPercentage = require(7893) /* getProfileTheme */.getValueInColorGradientByPercentage(items, items1, 20);
      const obj5 = require(7893) /* getProfileTheme */;
      const items2 = [, , ];
      [arr3[0], arr3[1], arr3[2]] = int2rgbArrayResult;
      const items3 = [, , ];
      [arr4[0], arr4[1], arr4[2]] = int2rgbArrayResult2;
      valueInColorGradientByPercentage = require(7893) /* getProfileTheme */.getValueInColorGradientByPercentage(items2, items3, 60);
      const items4 = [rgbToHex(valueInColorGradientByPercentage), rgbToHex(valueInColorGradientByPercentage)];
      return items4;
    }
  }
  return null;
}
const result = require("getProfileTheme").fileFinishedImporting("modules/calls/native/useVideoTileGradientColors.tsx");

export { computeVideoTileGradientStops };
export const useVideoTileGradientColors = function useVideoTileGradientColors(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => outer1_5(closure_0, closure_1), items);
};
