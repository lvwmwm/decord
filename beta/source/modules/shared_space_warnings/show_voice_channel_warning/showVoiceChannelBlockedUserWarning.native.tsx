// Module ID: 13283
// Function ID: 13284
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [1980, 13278, 13281, 1094, 4800, 13284, 1981, 1249, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 13283 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppStateStore from "AppStateStore" /* 1980 */;

require = fn;
const SharedSpacesWarningStore = fn(13278);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(13281).VoiceChannelWarningSurfaces;
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
    obj.openLazy(tmp2(1981)(13284, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj2);
    const tmp11 = tmp2(1981)(13284, dependencyMap.paths);
  } else {
    React4();
  }
};
