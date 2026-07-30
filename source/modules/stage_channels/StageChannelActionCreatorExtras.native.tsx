// Module ID: 6708
// Function ID: 6709
// Name: openStageChannelSettings
// Dependencies: [6709, 5004, 4157, 6711, 1959, 7628, 7672, 7679, 12410, 4401, 4399, 4395, 10503, 8356, 7674, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 6708 (openStageChannelSettings)
import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = MAX_STAGE_TOPIC_LENGTH);
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(4157);
  obj = { channel: closure_0 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(6711, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(4157);
  obj = { channelId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7628, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(4157);
  obj = { channel, onAccept };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7672, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(4157);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(7679, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(closure_0) {
  let obj = importDefault(4157);
  obj = { channel: closure_0 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(12410, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(outer1_0) {
  if (outer1_0.isGuildStageVoice()) {
    let obj = require(4401) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(4399);
      tmpResult.openGuildVoiceModal(outer1_0);
    } else {
      obj = { channel: null };
      obj[0] = outer1_0;
      const obj2 = importDefault(4395);
      tmpResult = tmp(4399);
      obj2.pushLazy(tmp(1959)(10503, tmp2.paths), obj, tmpResult.getVoiceChannelKey(outer1_0.id));
      const tmp4 = tmp(1959)(10503, tmp2.paths);
    }
    tmp2 = dependencyMap;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  importDefault(8356)(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(7674) /* useStageBlockedUsersCount */.getStageBlockedUsersCount(id);
  const obj = require(7674) /* useStageBlockedUsersCount */;
  const obj2 = require(7674) /* useStageBlockedUsersCount */;
  return stageBlockedUsersCount > 0 || require(7674) /* useStageBlockedUsersCount */.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = require(4401) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = tmp3(4399);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = importDefault(4395);
      tmp3Result = tmp3(4399);
      obj2.pushLazy(tmp3(1959)(10503, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(1959)(10503, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}
