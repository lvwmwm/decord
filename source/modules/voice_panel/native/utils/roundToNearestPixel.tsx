// Module ID: 9883
// Function ID: 76533
// Name: t
// Dependencies: []
// Exports: default

// Module 9883 (t)
const PixelRatio = require(dependencyMap[0]).PixelRatio;
const value = PixelRatio.get();
const fn = function t(arg0) {
  return Math.round(arg0 * value) / value;
};
fn.__closure = { PIXEL_DENSITY: value };
fn.__workletHash = 8009828326153;
fn.__initData = { code: "function roundToNearestPixel_roundToNearestPixelTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default fn;
