// Module ID: 9923
// Function ID: 76781
// Name: t
// Dependencies: [27, 2]
// Exports: default

// Module 9923 (t)
import { PixelRatio } from "get ActivityIndicator";

const value = PixelRatio.get();
const fn = function t(arg0) {
  return Math.round(arg0 * closure_0) / closure_0;
};
fn.__closure = { PIXEL_DENSITY: value };
fn.__workletHash = 8009828326153;
fn.__initData = { code: "function roundToNearestPixel_roundToNearestPixelTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default fn;
