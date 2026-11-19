// Module ID: 12015
// Function ID: 12016
// Name: channel_permissions/ChannelPermissionsUtils
// Dependencies: [1072, 1256, 5006, 7655, 2121, 12016, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 12015 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
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
  const tmp3 = asyncRequire(7655, dependencyMap.paths);
  openLazy(tmp3, "channel-add-members-" + stateFromStores.id, obj2);
}
export function openChannelMembersActionSheet(id, guild_id) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: id, guildId: guild_id };
  const tmp3 = asyncRequire(12016, dependencyMap.paths);
  openLazy(tmp3, "channel-members-" + id, obj2);
}
