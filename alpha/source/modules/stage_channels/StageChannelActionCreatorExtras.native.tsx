// Module ID: 8669
// Function ID: 8670
// Name: StageChannelActionCreatorExtras
// Dependencies: [4965, 8670, 5633, 4724, 8672, 1980, 8873, 8901, 8904, 13222, 4964, 4614, 4960, 9652, 8452, 8903, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8669 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4614 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4964 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8452 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8903 */;
import VoicePanelStore from "VoicePanelStore" /* 4965 */;

require = fn;
const setIsOnStartStageScreen = fn(8670).setIsOnStartStageScreen;
const StageChannelsConstants = fn(5633);
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: hasOwnProperty, START_STAGE_CHANNEL_EVENT_SHEET_KEY: metroRequire, STAGE_BLOCKED_USERS_SHEET_KEY: closure_7, STAGE_SETTINGS_SHEET_KEY: closure_8, EXPLICIT_END_STAGE_SHEET_KEY: closure_9 } = StageChannelsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8672, dependencyMap.paths), timestampProducer, { channel });
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8873, dependencyMap.paths), hasOwnProperty, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8901, dependencyMap.paths), React5, { channel, onAccept });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8904, dependencyMap.paths), React6, { channelId, onOpenRTCDebugOverlay });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13222, dependencyMap.paths), React7, { channel });
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
      ModalActionCreatorsDefault.pushLazy(tmp3(1980)(9652, tmp4.paths), obj, voiceChannelKey);
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
      ModalActionCreatorsDefault.pushLazy(tmp5(1980)(9652, tmp6.paths), obj, voiceChannelKey);
    }
    obj3 = NavigationRouteUtils;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
