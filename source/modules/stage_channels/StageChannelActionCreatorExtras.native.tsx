// Module ID: 7558
// Function ID: 60273
// Name: openStageChannel
// Dependencies: [7559, 4947, 4098, 7561, 1934, 7633, 7674, 7681, 12374, 4343, 4341, 4337, 10557, 8537, 7676, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 7558 (openStageChannel)
import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    let obj = require(4343) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      require(4341) /* getVoiceChannelKeyByChannelId */.openGuildVoiceModal(isGuildStageVoice);
      const obj5 = require(4341) /* getVoiceChannelKeyByChannelId */;
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = importDefault(4337);
      const tmp6 = require(1934) /* maybeLoadBundle */(10557, dependencyMap.paths);
      obj2.pushLazy(tmp6, obj, require(4341) /* getVoiceChannelKeyByChannelId */.getVoiceChannelKey(isGuildStageVoice.id));
      const obj4 = require(4341) /* getVoiceChannelKeyByChannelId */;
    }
  }
}
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: closure_5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = MAX_STAGE_TOPIC_LENGTH);
const result = require("showActionSheet").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(4098);
  obj = { channel: closure_0 };
  obj.openLazy(require(1934) /* maybeLoadBundle */(7561, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(4098);
  obj = { channelId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(7633, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(4098);
  obj = { channel, onAccept };
  obj.openLazy(require(1934) /* maybeLoadBundle */(7674, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(4098);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(1934) /* maybeLoadBundle */(7681, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  let obj = importDefault(4098);
  obj = { channel };
  obj.openLazy(require(1934) /* maybeLoadBundle */(12374, dependencyMap.paths), closure_8, obj);
};
export { openStageChannel };
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["isVoiceContext"] = true;
  importDefault(8537)(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(7676) /* useStageBlockedUsersCount */.getStageBlockedUsersCount(id);
  const obj = require(7676) /* useStageBlockedUsersCount */;
  const obj2 = require(7676) /* useStageBlockedUsersCount */;
  return stageBlockedUsersCount > 0 || require(7676) /* useStageBlockedUsersCount */.getStageIgnoredUsersCount(id) > 0;
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
