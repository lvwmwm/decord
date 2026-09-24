// Module ID: 11946
// Function ID: 11947
// Name: channel_permissions/ChannelPermissionsUtils
// Dependencies: [1074, 1241, 4796, 9922, 1980, 11947, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 11946 (channel_permissions/ChannelPermissionsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
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
  obj2.openLazy(asyncRequireImpl(9922, dependencyMap.paths), "channel-add-members-" + stateFromStores.id, { channel: stateFromStores, canSkip: flag });
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequireImpl(11947, dependencyMap.paths), "channel-members-" + id, { channelId: id, guildId: guild_id });
};
