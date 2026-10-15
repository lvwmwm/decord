// Module ID: 18185
// Function ID: 18186
// Name: VoicePanelControlUtils
// Dependencies: [11808, 2]
// Exports: getDrawerSpec

// Module 18185 (VoicePanelControlUtils)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11808 */;
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
