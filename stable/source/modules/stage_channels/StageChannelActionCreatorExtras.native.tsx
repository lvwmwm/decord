// Module ID: 8512
// Function ID: 8513
// Name: StageChannelActionCreatorExtras
// Dependencies: [8513, 5495, 4603, 8515, 1896, 8713, 8741, 8744, 9210, 4845, 4843, 4839, 9596, 8296, 8743, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8512 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4845 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8296 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8513 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8743 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5495 */;
import size from "module_2" /* 2 */;

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8515, dependencyMap.paths), hasOwnProperty, { channel });
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8713, dependencyMap.paths), React4, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8741, dependencyMap.paths), timestampProducer, { channel, onAccept });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8744, dependencyMap.paths), React5, { channelId, onOpenRTCDebugOverlay });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9210, dependencyMap.paths), React6, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      tmp(4843).openGuildVoiceModal(isGuildStageVoice);
      const tmpResult = tmp(4843);
    } else {
      const obj3 = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      const tmp4 = tmp(1896)(9596, tmp2.paths);
      obj2.pushLazy(tmp4, obj3, tmp(4843).getVoiceChannelKey(isGuildStageVoice.id));
      const tmpResult2 = tmp(4843);
    }
    obj = StageVoicePanelExperiment;
    tmp2 = dependencyMap;
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
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      tmp3(4843).openGuildVoiceModal(id);
      const tmp3Result = tmp3(4843);
    } else {
      const obj3 = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      const tmp6 = tmp3(1896)(9596, tmp4.paths);
      obj2.pushLazy(tmp6, obj3, tmp3(4843).getVoiceChannelKey(id.id));
      const tmp3Result2 = tmp3(4843);
    }
    obj = StageVoicePanelExperiment;
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
