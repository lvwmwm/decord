// Module ID: 15014
// Function ID: 15015
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [2118, 15013, 15015, 1091, 5127, 15016, 2119, 1263, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 15014 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1263 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import SharedSpaceWarningConstants from "SharedSpaceWarningConstants" /* 15015 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 15013 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = SharedSpaceWarningConstants.VoiceChannelWarningSurfaces;
const result = size.fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export function showVoiceChannelBlockedUserWarning(channelId, items1) {
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
    const tmp12 = asyncRequire(15016, tmp3.paths);
    openLazy(tmp12, "gdm_blocked_user_action_sheet", obj);
  } else {
    React3();
  }
}
