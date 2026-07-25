// Module ID: 15726
// Function ID: 121327
// Name: usePressUnderlayColor
// Dependencies: [15727, 4067, 3835, 689, 3975, 2]
// Exports: default

// Module 15726 (usePressUnderlayColor)
import { DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR as closure_3 } from "CHANNEL_THEME_COLOR_PALETTE";

const result = require("map").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx");

export default function usePressUnderlayColor(arr) {
  const tmp = importDefault(4067)();
  const token = require(3835) /* map */.useToken(importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE);
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
      hexWithOpacityResult = require(3975) /* hexToRgb */.hexWithOpacity(substr, num3);
      const obj2 = require(3975) /* hexToRgb */;
    }
  }
  return hexWithOpacityResult;
};
