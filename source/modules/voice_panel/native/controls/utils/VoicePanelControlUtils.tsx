// Module ID: 16259
// Function ID: 16260
// Name: getDrawerSpec
// Dependencies: [10257, 2]
// Exports: getDrawerSpec

// Module 16259 (getDrawerSpec)
function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: importDefault(10257)(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: require("t") };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const obj = { roundToNearestPixel: require("t") };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };
