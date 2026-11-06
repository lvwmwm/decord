// Module ID: 8032
// Function ID: 8033
// Name: StageChannelActionCreatorExtras
// Dependencies: [6955, 8033, 6789, 1072, 5404, 8035, 2118, 8263, 8266, 15416, 11345, 1108, 8030, 5344, 6824, 11871, 8842, 8265, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8032 (StageChannelActionCreatorExtras)
import Constants from "Constants" /* 1072 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8030 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8033 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8265 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8842 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11345 */;
import VoicePanelStore from "VoicePanelStore" /* 6955 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6789 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function openStageChannel(channel) {
  if (channel.isGuildStageVoice()) {
    const obj = StageChannelUnifiedCallExperiment;
    const isStageUnifiedCallResult = obj.isStageUnifiedCall(channel, "openStageChannel");
    const state = VoicePanelStore.getState();
    const tmp2 = dependencyMap;
    if (isStageUnifiedCallResult) {
      state.openChannel(channel.id);
      const ComponentDispatch = tmp(1108).ComponentDispatch;
      const obj2 = { channelId: channel.id };
      ComponentDispatch.dispatch(ComponentActions.VOICE_PANEL_OPEN, obj2);
    } else {
      state.closeChannel(channel.id);
      const tmpResult = PrivateChannelCallUtils;
      const voiceChannelKey = tmpResult.getVoiceChannelKey(channel.id);
      const tmpResult2 = NavigationRouteUtils;
      if (!tmpResult2.isModalOpen(voiceChannelKey)) {
        const obj3 = { channel };
        const obj5 = ModalActionCreatorsDefault;
        obj5.pushLazy(asyncRequire(11871, tmp2.paths), obj3, voiceChannelKey);
      }
    }
  }
}
const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: metroImportDefault, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = StageChannelsConstants);
const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export function openStageChannelSettings(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(8035, dependencyMap.paths), hasOwnProperty, obj2);
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(8263, dependencyMap.paths), metroRequire, obj2);
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(8266, dependencyMap.paths), metroImportDefault, obj2);
}
export function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(15416, dependencyMap.paths), metroImportAll, obj2);
}
export { openStageChannel };
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
  openStageChannel(id);
}
export function showChannelChangeConfirmationAlert() {
  return false;
}
