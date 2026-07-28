// Module ID: 15777
// Function ID: 121530
// Name: usePressUnderlayColor
// Dependencies: [15778, 4101, 3869, 689, 4009, 2]
// Exports: default

// Module 15777 (usePressUnderlayColor)
import { DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR as closure_3 } from "CHANNEL_THEME_COLOR_PALETTE";

const result = require("map").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp = importDefault(4101)();
  const token = require(3869) /* map */.useToken(importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE);
  let substr;
  if (null != arr) {
    substr = arr.slice(0, arr.length - 2);
  }
  let hexWithOpacityResult = token;
  if (null != substr) {
    hexWithOpacityResult = token;
    if (arr !== closure_3) {
      let num3 = 0.08;
      if ("dark" === tmp) {
        num3 = 0.12;
      }
      hexWithOpacityResult = require(4009) /* hexToRgb */.hexWithOpacity(substr, num3);
      const obj2 = require(4009) /* hexToRgb */;
    }
  }
  return hexWithOpacityResult;
};
