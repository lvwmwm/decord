// Module ID: 8043
// Function ID: 8044
// Name: StageChannelActionCreatorExtras
// Dependencies: [6963, 8044, 6796, 1072, 5406, 8046, 2118, 8275, 8278, 15493, 11359, 1108, 8041, 5346, 6831, 11894, 8854, 8277, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8043 (StageChannelActionCreatorExtras)
import Constants from "Constants" /* 1072 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8041 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8044 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8277 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8854 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11359 */;
import VoicePanelStore from "VoicePanelStore" /* 6963 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6796 */;
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
        obj5.pushLazy(asyncRequire(11894, tmp2.paths), obj3, voiceChannelKey);
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
  obj.openLazy(asyncRequire(8046, dependencyMap.paths), hasOwnProperty, obj2);
}
export function openEndGuildEventConfirmationModal() {

}
export function openStageBlockedUsersSheet(channel, onAccept) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, onAccept };
  obj.openLazy(asyncRequire(8275, dependencyMap.paths), metroRequire, obj2);
}
export function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId, onOpenRTCDebugOverlay };
  obj.openLazy(asyncRequire(8278, dependencyMap.paths), metroImportDefault, obj2);
}
export function openEndStageModal(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(15493, dependencyMap.paths), metroImportAll, obj2);
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
