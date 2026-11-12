// Module ID: 12646
// Function ID: 12647
// Name: roundToNearestPixel
// Dependencies: [17, 2]
// Exports: default

// Module 12646 (roundToNearestPixel)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
const items = [{ code: "(function roundToNearestPixel_roundToNearestPixelTsx1(position){let[PIXEL_DENSITY]=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;})" }, ];
const PixelRatio = react_native.PixelRatio;
items[1] = PixelRatio.get();
let c0;
[tmp2, tmp3] = items;
function roundToNearestPixel(arg0) {
  return Math.round(arg0 * c0) / c0;
}
const items1 = [tmp3];
roundToNearestPixel.__closure = items1;
roundToNearestPixel.__workletHash = 12463827408720;
roundToNearestPixel.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/roundToNearestPixel.tsx");

export default roundToNearestPixel;
