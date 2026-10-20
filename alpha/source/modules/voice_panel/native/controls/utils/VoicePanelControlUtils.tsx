// Module ID: 18353
// Function ID: 18354
// Name: VoicePanelControlUtils
// Dependencies: [11945, 2]
// Exports: getDrawerSpec

// Module 18353 (VoicePanelControlUtils)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11945 */;
import size from "module_2" /* 2 */;

function getDrawerSpec(height, top) {
  const diff = height - top;
  const obj = { minHeight: roundToNearestPixelDefault(0.65 * diff), maxHeight: diff };
  return obj;
}
let obj = { roundToNearestPixel: roundToNearestPixelDefault };
getDrawerSpec.__closure = obj;
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };
