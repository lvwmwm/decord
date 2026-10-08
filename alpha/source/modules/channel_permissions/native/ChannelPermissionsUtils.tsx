// Module ID: 11358
// Function ID: 11359
// Name: channel_permissions/ChannelPermissionsUtils
// Dependencies: [1085, 1264, 5054, 8595, 1999, 11359, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 11358 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channel: stateFromStores, canSkip: flag };
  const tmp3 = asyncRequire(8595, dependencyMap.paths);
  openLazy(tmp3, "channel-add-members-" + stateFromStores.id, obj2);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: id, guildId: guild_id };
  const tmp3 = asyncRequire(11359, dependencyMap.paths);
  openLazy(tmp3, "channel-members-" + id, obj2);
};
