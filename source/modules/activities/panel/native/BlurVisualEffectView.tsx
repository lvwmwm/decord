// Module ID: 15816
// Function ID: 121826
// Dependencies: [31, 27, 33, 4009, 689, 3869, 4568, 2]

// Module 15816
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgb from "hexToRgb";
import importAllResult from "result";

const require = arg1;
let closure_5 = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("result").memo(() => {
  let obj = require(3869) /* map */;
  const token = obj.useToken(importDefault(689).colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", blurTintRgba: null, android_fallbackColor: null, blurAmount: 0.24, blurTheme: "dark" };
  const tmp2 = importDefault(4568);
  obj.blurTintRgba = require(4009) /* hexToRgb */.hexToRgbaString(closure_5);
  obj.android_fallbackColor = token;
  return <tmp2 style={StyleSheet.absoluteFill} blurStyle="default" blurTintRgba={null} android_fallbackColor={null} blurAmount={0.24} blurTheme="dark" />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
