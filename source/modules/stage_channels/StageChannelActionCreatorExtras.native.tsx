// Module ID: 7472
// Function ID: 59970
// Name: openStageChannel
// Dependencies: []
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 7472 (openStageChannel)
function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    let obj = require(dependencyMap[9]);
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      require(dependencyMap[10]).openGuildVoiceModal(isGuildStageVoice);
      const obj5 = require(dependencyMap[10]);
    } else {
      obj = { channel: isGuildStageVoice };
      const obj2 = importDefault(dependencyMap[11]);
      const tmp6 = require(dependencyMap[4])(dependencyMap[12], dependencyMap.paths);
      obj2.pushLazy(tmp6, obj, require(dependencyMap[10]).getVoiceChannelKey(isGuildStageVoice.id));
      const obj4 = require(dependencyMap[10]);
    }
  }
}
const setIsOnStartStageScreen = require(dependencyMap[0]).setIsOnStartStageScreen;
const _module = require(dependencyMap[1]);
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: closure_5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = _module);
const _module1 = require(dependencyMap[15]);
const result = _module1.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channel: closure_0 };
  obj.openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channelId };
  obj.openLazy(require(dependencyMap[4])(dependencyMap[5], dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channel, onAccept };
  obj.openLazy(require(dependencyMap[4])(dependencyMap[6], dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(dependencyMap[4])(dependencyMap[7], dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(channel) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channel };
  obj.openLazy(require(dependencyMap[4])(dependencyMap[8], dependencyMap.paths), closure_8, obj);
};
export { openStageChannel };
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["isVoiceContext"] = true;
  importDefault(dependencyMap[13])(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(dependencyMap[14]).getStageBlockedUsersCount(id);
  const obj = require(dependencyMap[14]);
  const obj2 = require(dependencyMap[14]);
  return stageBlockedUsersCount > 0 || require(dependencyMap[14]).getStageIgnoredUsersCount(id) > 0;
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
