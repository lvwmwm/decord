// Module ID: 10861
// Function ID: 84498
// Name: openAddMembersActionSheet
// Dependencies: []
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 10861 (openAddMembersActionSheet)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[1]);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = importDefault(dependencyMap[2]);
  obj = { channel, canSkip: flag };
  obj2.openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "channel-add-members-" + channel.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = importDefault(dependencyMap[1]);
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = importDefault(dependencyMap[2]);
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(require(dependencyMap[4])(dependencyMap[5], dependencyMap.paths), "channel-members-" + id, obj);
};
