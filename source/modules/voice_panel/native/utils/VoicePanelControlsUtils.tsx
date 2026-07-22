// Module ID: 11368
// Function ID: 88399
// Name: getControlsDefaultWidth
// Dependencies: []

// Module 11368 (getControlsDefaultWidth)
let closure_0 = require(dependencyMap[0]).VOICE_PANEL_DRAWER_MAX_WIDTH;
const EDGE_GUTTER = require(dependencyMap[1]).EDGE_GUTTER;
const CONTROLS_MAX_WIDTH = require(dependencyMap[2]).CONTROLS_MAX_WIDTH;
let closure_3 = { code: "function getControlsDefaultWidth_VoicePanelControlsUtilsTsx1(windowWidth,safeAreaLeft,safeAreaRight){const{EDGE_GUTTER,CONTROLS_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,EDGE_GUTTER);safeAreaRight=Math.max(safeAreaRight,EDGE_GUTTER);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,CONTROLS_MAX_WIDTH);}" };
let closure_4 = { code: "function getControlsDrawerOpenWidth_VoicePanelControlsUtilsTsx2(windowWidth,safeAreaLeft,safeAreaRight){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,VOICE_PANEL_DRAWER_MAX_WIDTH);}" };
const tmp2 = () => {
  function getControlsDefaultWidth(width, left, right) {
    const bound = Math.max(left, closure_1);
    return Math.min(width - bound - Math.max(right, closure_1), closure_2);
  }
  getControlsDefaultWidth.__closure = { EDGE_GUTTER, CONTROLS_MAX_WIDTH };
  getControlsDefaultWidth.__workletHash = 5986385407902;
  getControlsDefaultWidth.__initData = closure_3;
  return getControlsDefaultWidth;
}();
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/VoicePanelControlsUtils.tsx");

export const getControlsDefaultWidth = tmp2;
export const getControlsDrawerOpenWidth = () => {
  function getControlsDrawerOpenWidth(width, left, right) {
    return Math.min(width - left - right, closure_0);
  }
  getControlsDrawerOpenWidth.__closure = { VOICE_PANEL_DRAWER_MAX_WIDTH: closure_0 };
  getControlsDrawerOpenWidth.__workletHash = 10795739180192;
  getControlsDrawerOpenWidth.__initData = closure_4;
  return getControlsDrawerOpenWidth;
}();
