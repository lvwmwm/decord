// Module ID: 10468
// Function ID: 81054
// Name: _launchFrame
// Dependencies: []
// Exports: launchFrame, refreshProxyTicket, stopFrame, updateFrameLayoutMode, updateFramePanelMode

// Module 10468 (_launchFrame)
function _launchFrame() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _launchFrame = obj;
  return obj(...arguments);
}
function _refreshProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _refreshProxyTicket = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

export const launchFrame = function launchFrame(arg0) {
  return _launchFrame(...arguments);
};
export const stopFrame = function stopFrame(applicationId) {
  importDefault(dependencyMap[1]).dispatch({ type: "FRAME_STOP", applicationId: applicationId.applicationId });
};
export const updateFrameLayoutMode = function updateFrameLayoutMode(arg0) {
  let applicationId;
  let layoutMode;
  ({ applicationId, layoutMode } = arg0);
  importDefault(dependencyMap[1]).dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId, layoutMode });
};
export const updateFramePanelMode = function updateFramePanelMode(PIP) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "FRAME_SET_PANEL_MODE", activityPanelMode: PIP };
  obj.dispatch(obj);
};
export const refreshProxyTicket = function refreshProxyTicket() {
  return _refreshProxyTicket(...arguments);
};
