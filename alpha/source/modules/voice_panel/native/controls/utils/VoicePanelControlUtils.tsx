// Module ID: 19727
// Function ID: 19728
// Name: VoicePanelControlUtils
// Dependencies: [12627, 2]
// Exports: getDrawerSpec

// Module 19727 (VoicePanelControlUtils)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12627 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
const items = [{ code: "(function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){let[roundToNearestPixel]=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};})" }, roundToNearestPixelDefault];
let c0;
[tmp2, tmp3] = items;
function getDrawerSpec(arg0, arg1) {
  const diff = arg0 - arg1;
  const obj = { minHeight: _undefined(0.65 * diff), maxHeight: diff };
  return obj;
}
const items1 = [tmp3];
getDrawerSpec.__closure = items1;
getDrawerSpec.__workletHash = 7203255088056;
getDrawerSpec.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };
