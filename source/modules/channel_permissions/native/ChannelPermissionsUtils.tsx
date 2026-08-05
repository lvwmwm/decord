// Module ID: 10958
// Function ID: 10959
// Name: openAddMembersActionSheet
// Dependencies: [676, 698, 4223, 8898, 1959, 10959, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10958 (openAddMembersActionSheet)
import { AnalyticEvents } from "ME";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(698);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4223);
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(require(1959) /* asyncRequireImpl */(8898, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(698);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(4223);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(1959) /* asyncRequireImpl */(10959, dependencyMap.paths), "channel-members-" + id, obj);
};
