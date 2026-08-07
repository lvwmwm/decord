// Module ID: 7714
// Function ID: 7715
// Name: openStageChannelSettings
// Dependencies: [7715, 5131, 4270, 7717, 1988, 7904, 7945, 7952, 12591, 4513, 4511, 4507, 10585, 8723, 7947, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 7714 (openStageChannelSettings)
import { setIsOnStartStageScreen } from "setIsOnStartStageScreen";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: c4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c5, STAGE_BLOCKED_USERS_SHEET_KEY: closure_6, STAGE_SETTINGS_SHEET_KEY: error, EXPLICIT_END_STAGE_SHEET_KEY: metroImportAll } = MAX_STAGE_TOPIC_LENGTH);
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(closure_0) {
  let obj = importDefault(4270);
  obj = { channel: closure_0 };
  obj.openLazy(require(1988) /* asyncRequireImpl */(7717, dependencyMap.paths), closure_5, obj);
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  let obj = importDefault(4270);
  obj = { channelId };
  obj.openLazy(require(1988) /* asyncRequireImpl */(7904, dependencyMap.paths), closure_4, obj);
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  let obj = importDefault(4270);
  obj = { channel, onAccept };
  obj.openLazy(require(1988) /* asyncRequireImpl */(7945, dependencyMap.paths), closure_6, obj);
};
export const openStageSettingsSheet = function openStageSettingsSheet(closure_0, closure_1) {
  let obj = importDefault(4270);
  obj = { channelId: closure_0, onOpenRTCDebugOverlay: closure_1 };
  obj.openLazy(require(1988) /* asyncRequireImpl */(7952, dependencyMap.paths), closure_7, obj);
};
export const openEndStageModal = function openEndStageModal(closure_0) {
  let obj = importDefault(4270);
  obj = { channel: closure_0 };
  obj.openLazy(require(1988) /* asyncRequireImpl */(12591, dependencyMap.paths), closure_8, obj);
};
export const openStageChannel = function openStageChannel(outer1_0) {
  if (outer1_0.isGuildStageVoice()) {
    let obj = require(4513) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmpResult = tmp(4511);
      tmpResult.openGuildVoiceModal(outer1_0);
    } else {
      obj = { channel: null };
      obj[0] = outer1_0;
      const obj2 = importDefault(4507);
      tmpResult = tmp(4511);
      obj2.pushLazy(tmp(1988)(10585, tmp2.paths), obj, tmpResult.getVoiceChannelKey(outer1_0.id));
      const tmp4 = tmp(1988)(10585, tmp2.paths);
    }
    tmp2 = dependencyMap;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  importDefault(8723)(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = require(7947) /* useStageBlockedUsersCount */.getStageBlockedUsersCount(id);
  const obj = require(7947) /* useStageBlockedUsersCount */;
  const obj2 = require(7947) /* useStageBlockedUsersCount */;
  return stageBlockedUsersCount > 0 || require(7947) /* useStageBlockedUsersCount */.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    let obj = require(4513) /* useIsStageVoicePanelEnabled */;
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      let tmp3Result = tmp3(4511);
      tmp3Result.openGuildVoiceModal(id);
    } else {
      obj = { channel: null };
      obj[0] = id;
      const obj2 = importDefault(4507);
      tmp3Result = tmp3(4511);
      obj2.pushLazy(tmp3(1988)(10585, tmp4.paths), obj, tmp3Result.getVoiceChannelKey(id.id));
      const tmp6 = tmp3(1988)(10585, tmp4.paths);
    }
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert(channel, arg1) {
  return false;
}
