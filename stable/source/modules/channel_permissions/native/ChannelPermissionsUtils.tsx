// Module ID: 11741
// Function ID: 11742
// Name: channel_permissions/ChannelPermissionsUtils
// Dependencies: [1074, 1240, 4603, 9880, 1896, 11742, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 11741 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(9880, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, { channel: stateFromStores, canSkip: flag });
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(11742, dependencyMap.paths), "channel-members-" + id, { channelId: id, guildId: guild_id });
};
