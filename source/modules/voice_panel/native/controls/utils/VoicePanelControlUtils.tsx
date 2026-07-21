// Module ID: 15725
// Function ID: 120305
// Name: getDrawerSpec
// Dependencies: []

// Module 15725 (getDrawerSpec)
let closure_2 = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export const getDrawerSpec = () => {
  function getDrawerSpec(height, top) {
    const diff = height - top;
    return { minHeight: callback(closure_1[0])(0.65 * diff), maxHeight: diff };
  }
  getDrawerSpec.__closure = { roundToNearestPixel: importDefault(dependencyMap[0]) };
  getDrawerSpec.__workletHash = 3647675988513;
  getDrawerSpec.__initData = closure_2;
  return getDrawerSpec;
}();
