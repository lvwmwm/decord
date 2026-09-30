// Module ID: 8037
// Function ID: 8038
// Name: StageChannelActionCreatorExtras
// Dependencies: [5074, 8038, 5923, 4830, 8040, 1981, 8246, 8274, 8277, 12681, 5073, 4722, 5069, 9034, 7819, 8276, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8037 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4722 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5073 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7819 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8276 */;
import VoicePanelStore from "VoicePanelStore" /* 5074 */;

require = fn;
const setIsOnStartStageScreen = fn(8038).setIsOnStartStageScreen;
const StageChannelsConstants = fn(5923);
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: hasOwnProperty, START_STAGE_CHANNEL_EVENT_SHEET_KEY: metroRequire, STAGE_BLOCKED_USERS_SHEET_KEY: closure_7, STAGE_SETTINGS_SHEET_KEY: closure_8, EXPLICIT_END_STAGE_SHEET_KEY: closure_9 } = StageChannelsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8040, dependencyMap.paths), timestampProducer, { channel });
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8246, dependencyMap.paths), hasOwnProperty, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8274, dependencyMap.paths), React5, { channel, onAccept });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8277, dependencyMap.paths), React6, { channelId, onOpenRTCDebugOverlay });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12681, dependencyMap.paths), React7, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(isGuildStageVoice.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(isGuildStageVoice.id);
    const tmp3 = require;
    const tmp4 = dependencyMap;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: isGuildStageVoice };
      ModalActionCreatorsDefault.pushLazy(tmp3(1981)(9034, tmp4.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  showUserProfileActionSheetDefault(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.getStageBlockedUsersCount(id);
  return stageBlockedUsersCount > 0 || useStageBlockedUsersCount.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    const state = VoicePanelStore.getState();
    state.closeChannel(id.id);
    const voiceChannelKey = PrivateChannelCallUtils.getVoiceChannelKey(id.id);
    const tmp5 = require;
    const tmp6 = dependencyMap;
    if (!obj3.isModalOpen(voiceChannelKey)) {
      const obj = { channel: id };
      ModalActionCreatorsDefault.pushLazy(tmp5(1981)(9034, tmp6.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
