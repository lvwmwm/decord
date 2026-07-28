// Module ID: 10894
// Function ID: 84499
// Name: openAddMembersActionSheet
// Dependencies: [653, 675, 4133, 8260, 1935, 10895, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10894 (openAddMembersActionSheet)
import { AnalyticEvents } from "ME";

const result = require("showActionSheet").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4133);
  obj = { channel, canSkip: flag };
  obj2.openLazy(require(1935) /* maybeLoadBundle */(8260, dependencyMap.paths), "channel-add-members-" + channel.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(4133);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(1935) /* maybeLoadBundle */(10895, dependencyMap.paths), "channel-members-" + id, obj);
};
