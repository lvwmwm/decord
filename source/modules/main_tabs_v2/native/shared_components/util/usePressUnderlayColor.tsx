// Module ID: 16908
// Function ID: 16909
// Name: usePressUnderlayColor
// Dependencies: [16909, 4416, 4197, 709, 4329, 2]
// Exports: default

// Module 16908 (usePressUnderlayColor)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import hexToRgba from "hexToRgba" /* 4329 */;
import useThemeDefault from "useTheme" /* 4416 */;
import CHANNEL_THEME_COLOR_PALETTE from "CHANNEL_THEME_COLOR_PALETTE" /* 16909 */;

let closure_3 = CHANNEL_THEME_COLOR_PALETTE.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = useThemeDefault();
  const tmp3 = require;
  const token = map.useToken(ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (arr != null) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      let num3 = 0.08;
      if ("dark" === tmp2) {
        num3 = 0.12;
      }
      hexWithOpacityResult = hexToRgba.hexWithOpacity(substr, num3);
      const tmp3Result = hexToRgba;
    }
  }
  return hexWithOpacityResult;
};
