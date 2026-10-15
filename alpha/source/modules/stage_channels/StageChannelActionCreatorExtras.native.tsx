// Module ID: 7700
// Function ID: 7701
// Name: StageChannelActionCreatorExtras
// Dependencies: [6296, 7701, 6108, 5115, 7703, 2000, 7934, 7937, 14253, 7698, 5032, 6150, 11129, 8522, 7936, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 7700 (StageChannelActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 2000 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5032 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7698 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 7701 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 7936 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8522 */;
import VoicePanelStore from "VoicePanelStore" /* 6296 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6108 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(7703, dependencyMap.paths), hasOwnProperty, obj2);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(7934, dependencyMap.paths), metroRequire, obj2);
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(7937, dependencyMap.paths), metroImportDefault, obj2);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(14253, dependencyMap.paths), metroImportAll, obj2);
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const obj2 = PrivateChannelCallUtils;
    const voiceChannelKey = obj2.getVoiceChannelKey(isGuildStageVoice.id);
    const obj3 = NavigationRouteUtils;
    const tmp3 = require;
    const tmp4 = dependencyMap;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      const obj4 = ModalActionCreatorsDefault;
      obj4.pushLazy(tmp3(2000)(11129, tmp4.paths), obj, voiceChannelKey);
    }
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = { isVoiceContext: true };
  const tmp = showUserProfileActionSheetDefault;
  const merged = Object.assign(arg0);
  tmp(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.getStageBlockedUsersCount(id);
  const obj2 = useStageBlockedUsersCount;
  const tmp2 = stageBlockedUsersCount > 0 || obj2.getStageIgnoredUsersCount(id) > 0;
  return tmp2;
};
export const navigateToStage = function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(id.id);
    const obj2 = PrivateChannelCallUtils;
    const voiceChannelKey = obj2.getVoiceChannelKey(id.id);
    const obj3 = NavigationRouteUtils;
    const tmp5 = require;
    const tmp6 = dependencyMap;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: id };
      const obj4 = ModalActionCreatorsDefault;
      obj4.pushLazy(tmp5(2000)(11129, tmp6.paths), obj, voiceChannelKey);
    }
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
