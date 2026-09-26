// Module ID: 14037
// Function ID: 14038
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [1979, 14032, 14035, 1094, 4755, 14038, 1980, 1249, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 14037 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import AppStateStore from "AppStateStore" /* 1979 */;

require = fn;
const SharedSpacesWarningStore = fn(14032);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(14035).VoiceChannelWarningSurfaces;
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  const state = AppStateStore.getState();
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    const obj2 = { channelId, blockedUserId: items1, impressionName: null, impressionProperties: null };
    const obj = ActionSheetActionCreatorsDefault;
    obj2.impressionName = tmp2(1249).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    const obj3 = { channel_id: channelId, blocked_user_ids: null, warning_surface: null };
    const items = [items1];
    obj3.blocked_user_ids = items;
    obj3.warning_surface = constants.POST_JOIN_SHEET;
    obj2.impressionProperties = obj3;
    obj.openLazy(tmp2(1980)(14038, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj2);
    const tmp11 = tmp2(1980)(14038, dependencyMap.paths);
  } else {
    React4();
  }
};
