// Module ID: 11407
// Function ID: 88689
// Name: getControlsDefaultWidth
// Dependencies: [10047, 10050, 10045, 2]

// Module 11407 (getControlsDefaultWidth)
import { VOICE_PANEL_DRAWER_MAX_WIDTH as closure_0 } from "VoicePanelModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import { CONTROLS_MAX_WIDTH } from "VoicePanelControlsModes";

let closure_3 = { code: "function getControlsDefaultWidth_VoicePanelControlsUtilsTsx1(windowWidth,safeAreaLeft,safeAreaRight){const{EDGE_GUTTER,CONTROLS_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,EDGE_GUTTER);safeAreaRight=Math.max(safeAreaRight,EDGE_GUTTER);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,CONTROLS_MAX_WIDTH);}" };
let closure_4 = { code: "function getControlsDrawerOpenWidth_VoicePanelControlsUtilsTsx2(windowWidth,safeAreaLeft,safeAreaRight){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,VOICE_PANEL_DRAWER_MAX_WIDTH);}" };
const tmp2 = (() => {
  export function getControlsDefaultWidth(width, left, right) {
    const bound = Math.max(left, outer1_1);
    return Math.min(width - bound - Math.max(right, outer1_1), outer1_2);
  }
  getControlsDefaultWidth.__closure = { EDGE_GUTTER, CONTROLS_MAX_WIDTH };
  getControlsDefaultWidth.__workletHash = 5986385407902;
  getControlsDefaultWidth.__initData = closure_3;
  return getControlsDefaultWidth;
})();
const tmp3 = (() => {
  export function getControlsDrawerOpenWidth(width, left, right) {
    return Math.min(width - left - right, outer1_0);
  }
  getControlsDrawerOpenWidth.__closure = { VOICE_PANEL_DRAWER_MAX_WIDTH: closure_0 };
  getControlsDrawerOpenWidth.__workletHash = 10795739180192;
  getControlsDrawerOpenWidth.__initData = closure_4;
  return getControlsDrawerOpenWidth;
})();
const result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/utils/VoicePanelControlsUtils.tsx");
