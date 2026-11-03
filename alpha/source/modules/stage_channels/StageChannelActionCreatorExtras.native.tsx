// Module ID: 8065
// Function ID: 8066
// Name: StageChannelActionCreatorExtras
// Dependencies: [6995, 8066, 6829, 5381, 8068, 2123, 8297, 8300, 15320, 8063, 5321, 6864, 11836, 8874, 8299, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8065 (StageChannelActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 2123 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8063 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8066 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8299 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8874 */;
import VoicePanelStore from "VoicePanelStore" /* 6995 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6829 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(8068, dependencyMap.paths), hasOwnProperty, obj2);
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(8297, dependencyMap.paths), metroRequire, obj2);
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(8300, dependencyMap.paths), metroImportDefault, obj2);
}
export function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(15320, dependencyMap.paths), metroImportAll, obj2);
}
export function openStageChannel(isGuildStageVoice) {
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
      obj4.pushLazy(tmp3(2123)(11836, tmp4.paths), obj, voiceChannelKey);
    }
  }
}
export function showPlatformUserProfile(arg0) {
  const obj = { isVoiceContext: true };
  const tmp = showUserProfileActionSheetDefault;
  const merged = Object.assign(arg0);
  tmp(obj);
}
export function shouldShowBlockedUsers(id) {
  const obj = useStageBlockedUsersCount;
  const stageBlockedUsersCount = obj.getStageBlockedUsersCount(id);
  const obj2 = useStageBlockedUsersCount;
  const tmp2 = stageBlockedUsersCount > 0 || obj2.getStageIgnoredUsersCount(id) > 0;
  return tmp2;
}
export function navigateToStage(id, arg1) {
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
      obj4.pushLazy(tmp5(2123)(11836, tmp6.paths), obj, voiceChannelKey);
    }
  }
}
export function showChannelChangeConfirmationAlert() {
  return false;
}
