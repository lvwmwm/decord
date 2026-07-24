// Module ID: 10514
// Function ID: 81343
// Name: _launchFrame
// Dependencies: [5, 10508, 686, 10515, 10866, 10516, 10553, 10544, 2]
// Exports: launchFrame, refreshProxyTicket, stopFrame, updateFrameLayoutMode, updateFramePanelMode

// Module 10514 (_launchFrame)
import leaveCurrentFrame from "leaveCurrentFrame";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _launchFrame() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _refreshProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame(arg0) {
  return _launchFrame(...arguments);
};
export const stopFrame = function stopFrame(applicationId) {
  importDefault(686).dispatch({ type: "FRAME_STOP", applicationId: applicationId.applicationId });
};
export const updateFrameLayoutMode = function updateFrameLayoutMode(arg0) {
  let applicationId;
  let layoutMode;
  ({ applicationId, layoutMode } = arg0);
  importDefault(686).dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId, layoutMode });
};
export const updateFramePanelMode = function updateFramePanelMode(PIP) {
  let obj = importDefault(686);
  obj = { type: "FRAME_SET_PANEL_MODE", activityPanelMode: PIP };
  obj.dispatch(obj);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  return _refreshProxyTicket(...arguments);
};
