// Module ID: 14094
// Function ID: 14095
// Name: VoicePanelControlsUtils
// Dependencies: [11395, 11398, 11393, 2]
// Exports: getControlsDefaultWidth, getControlsDrawerOpenWidth

// Module 14094 (VoicePanelControlsUtils)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11398 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const items = [{ code: "(function getControlsDefaultWidth_VoicePanelControlsUtilsTsx1(windowWidth,safeAreaLeft,safeAreaRight){let[EDGE_GUTTER,CONTROLS_MAX_WIDTH]=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,EDGE_GUTTER);safeAreaRight=Math.max(safeAreaRight,EDGE_GUTTER);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,CONTROLS_MAX_WIDTH);})" }, , ];
const VOICE_PANEL_DRAWER_MAX_WIDTH = VoicePanelConstants.VOICE_PANEL_DRAWER_MAX_WIDTH;
items[1] = VoicePanelCardConstants.EDGE_GUTTER;
items[2] = VoicePanelControlsConstants.CONTROLS_MAX_WIDTH;
let c1;
[tmp2, tmp3, tmp4] = items;
function getControlsDefaultWidth(width, left, right) {
  const bound = Math.max(left, c0);
  return Math.min(width - bound - Math.max(right, c0), c1);
}
const items1 = [tmp3, tmp4];
getControlsDefaultWidth.__closure = items1;
getControlsDefaultWidth.__workletHash = 9916794412647;
getControlsDefaultWidth.__initData = tmp2;
const items2 = [{ code: "(function getControlsDrawerOpenWidth_VoicePanelControlsUtilsTsx2(windowWidth,safeAreaLeft,safeAreaRight){let[VOICE_PANEL_DRAWER_MAX_WIDTH]=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,VOICE_PANEL_DRAWER_MAX_WIDTH);})" }, VOICE_PANEL_DRAWER_MAX_WIDTH];
let c0;
[tmp5, tmp6] = items2;
function getControlsDrawerOpenWidth(width, left, right) {
  return Math.min(width - left - right, c0);
}
const items3 = [tmp6];
getControlsDrawerOpenWidth.__closure = items3;
getControlsDrawerOpenWidth.__workletHash = 1695943269113;
getControlsDrawerOpenWidth.__initData = tmp5;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/VoicePanelControlsUtils.tsx");

export { getControlsDefaultWidth };
export { getControlsDrawerOpenWidth };
