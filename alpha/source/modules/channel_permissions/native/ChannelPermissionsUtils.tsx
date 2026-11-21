// Module ID: 12077
// Function ID: 12078
// Name: channel_permissions/ChannelPermissionsUtils
// Dependencies: [1071, 1255, 5127, 7774, 2119, 12078, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 12077 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channel: stateFromStores, canSkip: flag };
  const tmp3 = asyncRequire(7774, dependencyMap.paths);
  openLazy(tmp3, "channel-add-members-" + stateFromStores.id, obj2);
}
export function openChannelMembersActionSheet(id, guild_id) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: id, guildId: guild_id };
  const tmp3 = asyncRequire(12078, dependencyMap.paths);
  openLazy(tmp3, "channel-members-" + id, obj2);
}
