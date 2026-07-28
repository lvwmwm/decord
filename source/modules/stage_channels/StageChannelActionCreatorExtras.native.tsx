// Module ID: 6690
// Function ID: 58953
// Name: openStageChannel
// Dependencies: [6691, 4982, 4133, 6693, 1935, 7608, 7652, 7659, 12394, 4378, 4376, 4372, 10483, 8335, 7654, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 6690 (openStageChannel)
import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    let obj = require(4378) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      require(4376) /* getVoiceChannelKeyByChannelId */.openGuildVoiceModal(isGuildStageVoice);
      const obj5 = require(4376) /* getVoiceChannelKeyByChannelId */;
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = importDefault(4372);
      const tmp6 = require(1935) /* maybeLoadBundle */(10483, dependencyMap.paths);
      obj2.pushLazy(tmp6, obj, require(4376) /* getVoiceChannelKeyByChannelId */.getVoiceChannelKey(isGuildStageVoice.id));
      const obj4 = require(4376) /* getVoiceChannelKeyByChannelId */;
    }
  }
}
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: closure_5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = MAX_STAGE_TOPIC_LENGTH);
const result = require("showActionSheet").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(4133);
  obj = { channel: closure_0 };
  obj.openLazy(require(1935) /* maybeLoadBundle */(6693, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(4133);
  obj = { channelId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(7608, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(4133);
  obj = { channel, onAccept };
  obj.openLazy(require(1935) /* maybeLoadBundle */(7652, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(4133);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(1935) /* maybeLoadBundle */(7659, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  let obj = importDefault(4133);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(12394, dependencyMap.paths), closure_8, obj);
};
export { openStageChannel };
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["isVoiceContext"] = true;
  importDefault(8335)(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(7654) /* useStageBlockedUsersCount */.getStageBlockedUsersCount(id);
  const obj = require(7654) /* useStageBlockedUsersCount */;
  const obj2 = require(7654) /* useStageBlockedUsersCount */;
  return stageBlockedUsersCount > 0 || require(7654) /* useStageBlockedUsersCount */.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  openStageChannel(id);
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}
