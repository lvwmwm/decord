// Module ID: 10905
// Function ID: 84783
// Name: openAddMembersActionSheet
// Dependencies: [653, 675, 4098, 8464, 1934, 10906, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10905 (openAddMembersActionSheet)
import { AnalyticEvents } from "ME";

const result = require("showActionSheet").fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(4098);
  obj = { channel, canSkip: flag };
  obj2.openLazy(require(1934) /* maybeLoadBundle */(8464, dependencyMap.paths), "channel-add-members-" + channel.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(675);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(4098);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(1934) /* maybeLoadBundle */(10906, dependencyMap.paths), "channel-members-" + id, obj);
};
