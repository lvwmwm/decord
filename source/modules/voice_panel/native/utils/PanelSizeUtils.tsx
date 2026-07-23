// Module ID: 15762
// Function ID: 121624
// Name: getMaxPanelWidth
// Dependencies: [10015, 2]

// Module 15762 (getMaxPanelWidth)
import { VOICE_PANEL_DRAWER_MAX_WIDTH as closure_0 } from "VoicePanelModes";

let closure_1 = { code: "function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}" };
let closure_2 = { code: "function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}" };
const tmp2 = (() => {
  export function getMaxPanelWidth(windowWidth) {
    windowWidth = windowWidth.windowWidth;
    let bound = windowWidth;
    if (!windowWidth.connected) {
      const _Math = Math;
      bound = Math.min(outer1_0, windowWidth - tmp - tmp2);
    }
    return Math.min(windowWidth, bound);
  }
  getMaxPanelWidth.__closure = { VOICE_PANEL_DRAWER_MAX_WIDTH: closure_0 };
  getMaxPanelWidth.__workletHash = 6813992446153;
  getMaxPanelWidth.__initData = closure_1;
  return getMaxPanelWidth;
})();
const tmp3 = (() => {
  export function getPanelX(width, maxPanelWidth) {
    return (width - maxPanelWidth) / 2;
  }
  getPanelX.__closure = {};
  getPanelX.__workletHash = 6050807520832;
  getPanelX.__initData = closure_2;
  return getPanelX;
})();
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/PanelSizeUtils.tsx");
