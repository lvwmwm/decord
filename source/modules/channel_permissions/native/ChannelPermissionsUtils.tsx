// Module ID: 10855
// Function ID: 84373
// Name: openAddMembersActionSheet
// Dependencies: [653, 675, 4099, 8222, 1935, 10856, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10855 (openAddMembersActionSheet)
import { AnalyticEvents } from "ME";

const result = require("showActionSheet").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4099);
  obj = { channel, canSkip: flag };
  obj2.openLazy(require(1935) /* maybeLoadBundle */(8222, dependencyMap.paths), "channel-add-members-" + channel.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(4099);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(1935) /* maybeLoadBundle */(10856, dependencyMap.paths), "channel-members-" + id, obj);
};
