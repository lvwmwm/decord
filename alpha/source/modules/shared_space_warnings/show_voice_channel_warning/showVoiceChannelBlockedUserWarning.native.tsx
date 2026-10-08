// Module ID: 13858
// Function ID: 13859
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [1998, 13857, 13859, 1105, 5054, 13860, 1999, 1272, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 13858 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import SharedSpaceWarningConstants from "SharedSpaceWarningConstants" /* 13859 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 13857 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = SharedSpaceWarningConstants.VoiceChannelWarningSurfaces;
const result = size.fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  let items;
  let obj2;
  const state = AppStateStore.getState();
  const tmp3 = dependencyMap;
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { channelId, blockedUserId: items1, impressionName: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING, impressionProperties: obj2 };
    ActionSheetActionCreatorsDefault;
    obj2 = { channel_id: channelId, blocked_user_ids: items, warning_surface: constants.POST_JOIN_SHEET };
    items = [items1];
    const tmp12 = asyncRequire(13860, tmp3.paths);
    openLazy(tmp12, "gdm_blocked_user_action_sheet", obj);
  } else {
    React3();
  }
};
