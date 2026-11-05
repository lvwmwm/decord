// Module ID: 19592
// Function ID: 19593
// Name: voiceChannelAppLayerLayout
// Dependencies: [11422, 11417, 11425, 2]
// Exports: getVoiceChannelAppLayerInsets, shouldRestoreVoiceChannelAppControls

// Module 19592 (voiceChannelAppLayerLayout)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11417 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11422 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11425 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const items = [{ code: "(function getVoiceChannelAppLayerInsets_voiceChannelAppLayerLayoutTsx1({safeArea:safeArea,edgeGutter:edgeGutter,controlsHeight:controlsHeight,keyboardHeight:keyboardHeight}){let[calculateVoicePanelHeaderSpecs,EDGE_GUTTER]=this.__closure;const{height:top}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);const aboveControls=controlsHeight+Math.max(safeArea.bottom,EDGE_GUTTER);return{top:top,bottom:Math.max(aboveControls,keyboardHeight)};})" }, , ];
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
items[1] = calculateVoicePanelHeaderSpecsDefault;
items[2] = EDGE_GUTTER;
let c1;
[tmp2, tmp3, tmp4] = items;
function getVoiceChannelAppLayerInsets(safeArea) {
  let controlsHeight;
  let keyboardHeight;
  safeArea = safeArea.safeArea;
  ({ controlsHeight, keyboardHeight } = safeArea);
  const rect = { top: _undefined(safeArea, safeArea.edgeGutter).height, bottom: Math.max(controlsHeight + Math.max(safeArea.bottom, c1), keyboardHeight) };
  return rect;
}
const items1 = [tmp3, tmp4];
getVoiceChannelAppLayerInsets.__closure = items1;
getVoiceChannelAppLayerInsets.__workletHash = 7735597438766;
getVoiceChannelAppLayerInsets.__initData = tmp2;
const items2 = [{ code: "(function shouldRestoreVoiceChannelAppControls_voiceChannelAppLayerLayoutTsx2(mode,previousMode){let[VoicePanelControlsModes]=this.__closure;return mode===VoicePanelControlsModes.HIDDEN&&previousMode!==VoicePanelControlsModes.HIDDEN;})" }, VoicePanelControlsModes];
let c0;
[tmp5, tmp6] = items2;
function shouldRestoreVoiceChannelAppControls(arg0, arg1) {
  return arg0 === _undefined.HIDDEN && arg1 !== tmp.HIDDEN;
}
const items3 = [tmp6];
shouldRestoreVoiceChannelAppControls.__closure = items3;
shouldRestoreVoiceChannelAppControls.__workletHash = 4270968111996;
shouldRestoreVoiceChannelAppControls.__initData = tmp5;
const result = size.fileFinishedImporting("modules/voice_panel/native/voiceChannelAppLayerLayout.tsx");

export { getVoiceChannelAppLayerInsets };
export { shouldRestoreVoiceChannelAppControls };
