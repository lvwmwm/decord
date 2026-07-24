// Module ID: 10515
// Function ID: 81355
// Name: _runPrimaryAppCommandOrJoinEmbeddedActivity
// Dependencies: [5, 8007, 4167, 4143, 4310, 4153, 1194, 1348, 1838, 3758, 1849, 4146, 1347, 4155, 10256, 653, 4156, 1345, 6978, 10511, 6995, 10516, 10542, 10543, 10848, 686, 10858, 10545, 4030, 4356, 7371, 8005, 10859, 1881, 10860, 10847, 8228, 675, 10845, 10865, 10550, 4470, 1212, 10467, 10854, 480, 4942, 3748, 10561, 4323, 507, 1327, 7540, 6691, 4140, 6923, 1336, 1334, 2]
// Exports: consumeRequestToReactToSeriousThermalState, dismissNewActivityIndicator, disregardSeriousThermalState, fetchDeveloperApplications, fetchShelf, maybeDisconnectFromCurrentActivity, openActivityPopoutWindow, refreshProxyTicket, requestRespondToSeriousThermalState, runPrimaryAppCommandOrJoinEmbeddedActivity, sendEmbeddedActivityInvite, sendEmbeddedActivityInviteUser, updateActivityPopoutWindowLayout, updateFocusedActivityLayout, uploadImageAttachment, validateTestMode

// Module 10515 (_runPrimaryAppCommandOrJoinEmbeddedActivity)
import _callSuper from "_callSuper";
import { getOrFetchApplicationCommandIndexForTarget as closure_4 } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_createForOfIteratorHelperLoose";
import { SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES as closure_16 } from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import ME from "ME";
import { INSTALL_LESS_APP_IDS } from "ApplicationTypes";
import { ContentDismissActionType } from "ContentDismissActionType";
import { InviteTargetTypes } from "InviteSendStates";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _maybeSendPrimaryAppCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _joinEmbeddedActivity() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function stopEmbeddedActivity(showFeedback) {
  let _location;
  let applicationId;
  ({ location: _location, applicationId } = showFeedback);
  let flag = showFeedback.showFeedback;
  if (flag === undefined) {
    flag = true;
  }
  const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(_location);
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_CLOSE", applicationId, location: _location };
  let launchId;
  if (null != selfEmbeddedActivityForLocation) {
    launchId = selfEmbeddedActivityForLocation.launchId;
  }
  obj.instanceId = launchId;
  obj.showFeedback = flag;
  obj.dispatch(obj);
  const embeddedActivityLocationChannelId = applicationId(3748).getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    selectedParticipantId = selectedParticipantId.getSelectedParticipantId(embeddedActivityLocationChannelId);
    currentUser = currentUser.getCurrentUser();
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
            const participant = importDefault(4323).selectParticipant(embeddedActivityLocationChannelId, null);
            const obj6 = importDefault(4323);
          }
          obj4 = applicationId(10561);
        }
      }
    }
  }
}
function _fetchDeveloperApplications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _uploadImageAttachment() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
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
  return obj(...arguments);
}
function _sendEmbeddedActivityInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _sendEmbeddedActivityInviteUser() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _validateTestMode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function updateActivityPanelMode(PANEL) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE", activityPanelMode: PANEL };
  obj.dispatch(obj);
}
function createProxyTicket(applicationId, channelId) {
  return _createProxyTicket(...arguments);
}
function _createProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _refreshProxyTicket() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_18, AnalyticsGameOpenTypes: closure_19, ApplicationFlags: closure_20, ChannelTypes: closure_21, Endpoints: closure_22, PopoutWindowKeys: closure_23 } = ME);
let closure_27 = { NO_PRIMARY_APP_COMMAND: 1, [1]: "NO_PRIMARY_APP_COMMAND", UNAUTHORIZED: 2, [2]: "UNAUTHORIZED", NO_CHANNEL: 3, [3]: "NO_CHANNEL", FAILED_ACTIVITY_LAUNCH_CHECKS: 4, [4]: "FAILED_ACTIVITY_LAUNCH_CHECKS" };
let closure_28 = { OTHER: 0, [0]: "OTHER", NO_APPLICATION_ID: 1, [1]: "NO_APPLICATION_ID", UNKNOWN_USER_OR_APPLICATION: 2, [2]: "UNKNOWN_USER_OR_APPLICATION", INVALID_CHANNEL: 3, [3]: "INVALID_CHANNEL", LAUNCHABILITY_CHECK_FAILED_OTHER: 4, [4]: "LAUNCHABILITY_CHECK_FAILED_OTHER", NO_USE_EMBEDDED_ACTIVITIES_PERMISSION: 5, [5]: "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS: 6, [6]: "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", FAILED_ACTIVITY_LAUNCH_CHECKS: 7, [7]: "FAILED_ACTIVITY_LAUNCH_CHECKS", NOT_CONNECTED_TO_VOICE_CHANNEL: 8, [8]: "NOT_CONNECTED_TO_VOICE_CHANNEL", AIT_NOT_ENABLED_FOR_USER: 9, [9]: "AIT_NOT_ENABLED_FOR_USER" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/EmbeddedActivitiesActionCreators.tsx");

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
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE" });
};
export const consumeRequestToReactToSeriousThermalState = function consumeRequestToReactToSeriousThermalState() {
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST" });
};
export const disregardSeriousThermalState = function disregardSeriousThermalState() {
  importDefault(686).dispatch({ type: "EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE" });
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
  let obj = require(1336) /* addVersionedDismissedContent */;
  obj = { dismissAction: INDIRECT_ACTION };
  const result = obj.markVersionedDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), obj);
};
export const validateTestMode = function validateTestMode() {
  return _validateTestMode(...arguments);
};
export { updateActivityPanelMode };
export const updateFocusedActivityLayout = function updateFocusedActivityLayout(focusedActivityLayout) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT", focusedActivityLayout };
  obj.dispatch(obj);
};
export const openActivityPopoutWindow = function openActivityPopoutWindow() {
  updateActivityPanelMode(ActivityPanelModes.ACTIVITY_POPOUT_WINDOW);
  importDefault(686).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
};
export const updateActivityPopoutWindowLayout = function updateActivityPopoutWindowLayout(layout) {
  let obj = importDefault(686);
  obj = { type: "EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT", layout };
  obj.dispatch(obj);
};
export { createProxyTicket };
export const refreshProxyTicket = function refreshProxyTicket() {
  return _refreshProxyTicket(...arguments);
};
