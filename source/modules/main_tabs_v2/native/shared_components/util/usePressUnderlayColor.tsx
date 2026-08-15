// Module ID: 16205
// Function ID: 16206
// Name: usePressUnderlayColor
// Dependencies: [16206, 4310, 4097, 712, 4223, 2]
// Exports: default

// Module 16205 (usePressUnderlayColor)
import { DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR as closure_3 } from "CHANNEL_THEME_COLOR_PALETTE";

const result = require("map").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp2 = importDefault(4310)();
  const tmp3 = require;
  const token = require(4097) /* map */.useToken(importDefault(712).colors.INTERACTIVE_BACKGROUND_ACTIVE);
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
      hexWithOpacityResult = tmp3(4223).hexWithOpacity(substr, num3);
      const tmp3Result = tmp3(4223);
    }
  }
  return hexWithOpacityResult;
};
