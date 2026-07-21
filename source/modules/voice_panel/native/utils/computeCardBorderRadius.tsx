// Module ID: 15688
// Function ID: 119926
// Name: VoicePanelModes
// Dependencies: []
// Exports: default

// Module 15688 (VoicePanelModes)
const _module = require(dependencyMap[0]);
const VoicePanelModes = _module.VoicePanelModes;
const DEFAULT_BORDER_RADIUS_PIP = _module.DEFAULT_BORDER_RADIUS_PIP;
const fn = function o(arg0) {
  let defaultBorderRadius;
  let focused;
  let mode;
  ({ mode, focused, defaultBorderRadius } = arg0);
  if (mode === VoicePanelModes.PANEL) {
    if (null != focused) {
      if (focused === tmp) {
        return 0;
      } else if (tmp2) {
        return DEFAULT_BORDER_RADIUS_PIP;
      }
    }
    return defaultBorderRadius;
  } else {
    let tmp4 = defaultBorderRadius;
    if (mode === VoicePanelModes.PIP) {
      tmp4 = DEFAULT_BORDER_RADIUS_PIP;
    }
    return tmp4;
  }
};
fn.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP };
fn.__workletHash = 10593808953118;
fn.__initData = { code: "function computeCardBorderRadius_computeCardBorderRadiusTsx1({id:id,mode:mode,focused:focused,isSelf:isSelf,defaultBorderRadius:defaultBorderRadius}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP}=this.__closure;if(mode===VoicePanelModes.PANEL){if(focused!=null){if(focused===id){return 0;}else if(isSelf){return DEFAULT_BORDER_RADIUS_PIP;}}return defaultBorderRadius;}if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return defaultBorderRadius;}" };
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_panel/native/utils/computeCardBorderRadius.tsx");

export default fn;
