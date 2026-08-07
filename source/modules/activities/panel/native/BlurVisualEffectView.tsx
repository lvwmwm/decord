// Module ID: 16016
// Function ID: 16017
// Dependencies: [19, 17, 21, 4145, 712, 4005, 4702, 2]

// Module 16016
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgba from "hexToRgba";
import importAllResult from "noop";

const require = arg1;
let closure_5 = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("noop").memo(() => {
  let obj = require(4005) /* map */;
  const token = obj.useToken(importDefault(712).colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" };
  return jsx(importDefault(4702), { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
