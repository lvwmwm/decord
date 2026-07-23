// Module ID: 15707
// Function ID: 121132
// Dependencies: [31, 27, 33, 3974, 689, 3834, 4533, 2]

// Module 15707
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgb from "hexToRgb";
import importAllResult from "result";

const require = arg1;
let closure_5 = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("result").memo(() => {
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", blurTintRgba: null, android_fallbackColor: null, blurAmount: 0.24, blurTheme: "dark" };
  const tmp2 = importDefault(4533);
  obj.blurTintRgba = require(3974) /* hexToRgb */.hexToRgbaString(closure_5);
  obj.android_fallbackColor = token;
  return <tmp2 style={StyleSheet.absoluteFill} blurStyle="default" blurTintRgba={null} android_fallbackColor={null} blurAmount={0.24} blurTheme="dark" />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
