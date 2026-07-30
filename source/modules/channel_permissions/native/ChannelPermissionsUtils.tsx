// Module ID: 10914
// Function ID: 10915
// Name: openAddMembersActionSheet
// Dependencies: [676, 698, 4157, 8281, 1959, 10915, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10914 (openAddMembersActionSheet)
import { AnalyticEvents } from "ME";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(698);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4157);
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(require(1959) /* asyncRequireImpl */(8281, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(698);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(4157);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(1959) /* asyncRequireImpl */(10915, dependencyMap.paths), "channel-members-" + id, obj);
};
