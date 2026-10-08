// Module ID: 7478
// Function ID: 7479
// Name: StageChannelActionCreatorExtras
// Dependencies: [6079, 7479, 5888, 5054, 7481, 1999, 7691, 7694, 13413, 7476, 4936, 5940, 10669, 8279, 7693, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 7478 (StageChannelActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 1999 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 7479 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 7693 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8279 */;
import VoicePanelStore from "VoicePanelStore" /* 6079 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5888 */;
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
  obj.openLazy(asyncRequire(7481, dependencyMap.paths), hasOwnProperty, obj2);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(7691, dependencyMap.paths), metroRequire, obj2);
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(7694, dependencyMap.paths), metroImportDefault, obj2);
};
export const openEndStageModal = function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(13413, dependencyMap.paths), metroImportAll, obj2);
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
      obj4.pushLazy(tmp3(1999)(10669, tmp4.paths), obj, voiceChannelKey);
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
      obj4.pushLazy(tmp5(1999)(10669, tmp6.paths), obj, voiceChannelKey);
    }
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
