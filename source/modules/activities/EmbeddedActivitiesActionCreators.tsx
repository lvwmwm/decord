// Module ID: 10476
// Function ID: 81113
// Name: _runPrimaryAppCommandOrJoinEmbeddedActivity
// Dependencies: []
// Exports: consumeRequestToReactToSeriousThermalState, dismissNewActivityIndicator, disregardSeriousThermalState, fetchDeveloperApplications, fetchShelf, maybeDisconnectFromCurrentActivity, openActivityPopoutWindow, refreshProxyTicket, requestRespondToSeriousThermalState, runPrimaryAppCommandOrJoinEmbeddedActivity, sendEmbeddedActivityInvite, sendEmbeddedActivityInviteUser, updateActivityPopoutWindowLayout, updateFocusedActivityLayout, uploadImageAttachment, validateTestMode

// Module 10476 (_runPrimaryAppCommandOrJoinEmbeddedActivity)
function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _runPrimaryAppCommandOrJoinEmbeddedActivity = obj;
  return obj(...arguments);
}
function _maybeSendPrimaryAppCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeSendPrimaryAppCommand = obj;
  return obj(...arguments);
}
function _joinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _joinEmbeddedActivity = obj;
  return obj(...arguments);
}
function stopEmbeddedActivity(showFeedback) {
  let _location;
  let applicationId;
  ({ location: _location, applicationId } = showFeedback);
  const arg1 = applicationId;
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(_location);
  let obj = importDefault(dependencyMap[25]);
  obj = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location };
  let launchId;
  if (null != selfEmbeddedActivityForLocation) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  obj.instanceId = launchId;
  obj.showFeedback = flag;
  obj.dispatch(obj);
  const embeddedActivityLocationChannelId = arg1(dependencyMap[47]).getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const selectedParticipantId = selectedParticipantId.getSelectedParticipantId(embeddedActivityLocationChannelId);
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const id = currentUser.id;
    }
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === applicationId);
    if (null != found) {
      if (null != id) {
        if ("" !== id) {
          obj = { applicationId };
          let compositeInstanceId;
          if (null != found) {
            compositeInstanceId = found.compositeInstanceId;
          }
          obj.instanceId = compositeInstanceId;
          if (selectedParticipantId === obj4.getEmbeddedActivityParticipantId(obj)) {
            const participant = importDefault(dependencyMap[49]).selectParticipant(embeddedActivityLocationChannelId, null);
            const obj6 = importDefault(dependencyMap[49]);
          }
          const obj4 = arg1(dependencyMap[48]);
        }
      }
    }
  }
}
function _fetchDeveloperApplications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchDeveloperApplications = obj;
  return obj(...arguments);
}
function _uploadImageAttachment() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _uploadImageAttachment = obj;
  return obj(...arguments);
}
function handleFetchDone(arg0, arg1, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
    const tmp3 = null == guildId && null == arg0;
  }
  if (tmp) {
    arg1();
  }
}
function _fetchShelf() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchShelf = obj;
  return obj(...arguments);
}
function _sendEmbeddedActivityInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendEmbeddedActivityInvite = obj;
  return obj(...arguments);
}
function _sendEmbeddedActivityInviteUser() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendEmbeddedActivityInviteUser = obj;
  return obj(...arguments);
}
function _validateTestMode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _validateTestMode = obj;
  return obj(...arguments);
}
function updateActivityPanelMode(PANEL) {
  let obj = importDefault(dependencyMap[25]);
  obj = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj);
}
function createProxyTicket(applicationId, id) {
  return _createProxyTicket(...arguments);
}
function _createProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createProxyTicket = obj;
  return obj(...arguments);
}
function _refreshProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _refreshProxyTicket = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).getOrFetchApplicationCommandIndexForTarget;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = arg1(dependencyMap[13]).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const ActivityPanelModes = arg1(dependencyMap[14]).ActivityPanelModes;
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ApplicationFlags: closure_20, ChannelTypes: closure_21, Endpoints: closure_22, PopoutWindowKeys: closure_23 } = arg1(dependencyMap[15]));
const INSTALL_LESS_APP_IDS = arg1(dependencyMap[16]).INSTALL_LESS_APP_IDS;
const ContentDismissActionType = arg1(dependencyMap[17]).ContentDismissActionType;
const InviteTargetTypes = arg1(dependencyMap[18]).InviteTargetTypes;
let closure_27 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_28 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER" };
const tmp2 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[58]).fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

export const maybeDisconnectFromCurrentActivity = function maybeDisconnectFromCurrentActivity(location) {
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(location);
  if (null != selfEmbeddedActivityForLocation) {
    const obj = {};
    ({ location: obj.location, applicationId: obj.applicationId } = selfEmbeddedActivityForLocation);
    obj.showFeedback = false;
    stopEmbeddedActivity(obj);
  }
};
export const runPrimaryAppCommandOrJoinEmbeddedActivity = function runPrimaryAppCommandOrJoinEmbeddedActivity(arg0) {
  return _runPrimaryAppCommandOrJoinEmbeddedActivity(...arguments);
};
export { stopEmbeddedActivity };
export const requestRespondToSeriousThermalState = function requestRespondToSeriousThermalState() {
  importDefault(dependencyMap[25]).dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  importDefault(dependencyMap[25]).dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  importDefault(dependencyMap[25]).dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
};
export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  return _fetchDeveloperApplications(...arguments);
};
export const uploadImageAttachment = function uploadImageAttachment(id, id2, arg2) {
  return _uploadImageAttachment(...arguments);
};
export const fetchShelf = function fetchShelf(arg0) {
  return _fetchShelf(...arguments);
};
export const sendEmbeddedActivityInvite = function sendEmbeddedActivityInvite() {
  return _sendEmbeddedActivityInvite(...arguments);
};
export const sendEmbeddedActivityInviteUser = function sendEmbeddedActivityInviteUser(arg0) {
  return _sendEmbeddedActivityInviteUser(...arguments);
};
export const dismissNewActivityIndicator = function dismissNewActivityIndicator() {
  let INDIRECT_ACTION = arg0;
  if (arg0 === undefined) {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  let obj = arg1(dependencyMap[56]);
  obj = { dismissAction: INDIRECT_ACTION };
  const result = obj.markVersionedDismissibleContentAsDismissed(arg1(dependencyMap[57]).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), obj);
};
export const validateTestMode = function validateTestMode() {
  return _validateTestMode(...arguments);
};
export { updateActivityPanelMode };
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  let obj = importDefault(dependencyMap[25]);
  obj = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  updateActivityPanelMode(ActivityPanelModes.ACTIVITY_POPOUT_WINDOW);
  importDefault(dependencyMap[25]).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  let obj = importDefault(dependencyMap[25]);
  obj = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj);
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  return _refreshProxyTicket(...arguments);
};
