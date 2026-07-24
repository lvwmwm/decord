// Module ID: 15897
// Function ID: 122843
// Name: getDrawerSpec
// Dependencies: [9923, 2]

// Module 15897 (getDrawerSpec)
let closure_2 = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const tmp2 = (() => {
  export function getDrawerSpec(height, top) {
    const diff = height - top;
    return { minHeight: outer1_0(outer1_1[0])(0.65 * diff), maxHeight: diff };
  }
  getDrawerSpec.__closure = { roundToNearestPixel: importDefault(9923) };
  getDrawerSpec.__workletHash = 3647675988513;
  getDrawerSpec.__initData = closure_2;
  return getDrawerSpec;
})();
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");
