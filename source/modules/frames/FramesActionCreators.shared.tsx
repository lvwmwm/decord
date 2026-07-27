// Module ID: 5667
// Function ID: 48484
// Name: _launchFrame
// Dependencies: [5, 5658, 686, 5668, 12547, 10571, 10546, 10577, 2]
// Exports: launchFrame, refreshProxyTicket, stopFrame, updateFrameLayoutMode, updateFramePanelMode

// Module 5667 (_launchFrame)
import leaveCurrentFrame from "leaveCurrentFrame";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
async function _launchFrame(arg0, arg1) {
  let iter = (function*(arg0) {
    let applicationId;
    let channelId;
    ({ applicationId, channelId } = arg0);
    yield undefined;
    outer2_1(outer2_2[2]).dispatch({ type: "FRAME_LAUNCH_START", applicationId });
    const obj = outer2_1(outer2_2[2]);
    const obj2 = outer2_0(outer2_2[3]);
    const tmp3 = yield outer2_0(outer2_2[3]).createProxyTicket(applicationId, channelId);
    const result = outer2_0(outer2_2[4]).leaveCurrentEmbeddedActivity();
    const obj3 = outer2_0(outer2_2[4]);
    outer2_0(outer2_2[5]).leaveCurrentFrame();
    const obj4 = outer2_0(outer2_2[5]);
    outer2_1(outer2_2[2]).dispatch({ type: "FRAME_LAUNCH", applicationId, proxyTicket: tmp3, channelId });
  })();
  iter.next();
  return iter;
}
async function _refreshProxyTicket(arg0, arg1) {
  let iter = (function*(applicationId) {
    applicationId = applicationId.applicationId;
    yield undefined;
    let obj = outer2_1(outer2_2[2]);
    obj = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: true };
    obj.dispatch(obj);
    const connectedFrame = outer2_4.getConnectedFrame();
    applicationId = undefined;
    if (null != connectedFrame) {
      applicationId = tmp4.applicationId;
    }
    if (applicationId === applicationId) {
      const channelId = connectedFrame.channelId;
    }
    const obj3 = outer2_0(outer2_2[3]);
    const tmp7 = yield outer2_0(outer2_2[3]).createProxyTicket(applicationId, channelId);
    outer2_1(outer2_2[2]).dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId, proxyTicket: tmp7 });
    const obj4 = outer2_1(outer2_2[2]);
    obj = { type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId, refreshing: false };
    outer2_1(outer2_2[2]).dispatch(obj);
    return true;
  })();
  iter.next();
  return iter;
}
let result = require("dispatcher").fileFinishedImporting("modules/frames/FramesActionCreators.shared.tsx");

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
