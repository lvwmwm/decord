// Module ID: 15988
// Function ID: 15989
// Name: getDrawerSpec
// Dependencies: [9910, 2]
// Exports: getDrawerSpec

// Module 15988 (getDrawerSpec)
function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: importDefault(9910)(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: require("t") };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const obj = { roundToNearestPixel: require("t") };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };
