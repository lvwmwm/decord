// Module ID: 8483
// Function ID: 67747
// Name: openInstantInviteActionSheet
// Dependencies: []
// Exports: default

// Module 8483 (openInstantInviteActionSheet)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = importDefault(dependencyMap[0]);
  let id = invite_channel_id.vanityURLCode;
  if (null == id) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj["impressionName"] = require(dependencyMap[3]).ImpressionNames.GUILD_INVITE;
  obj = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj["impressionProperties"] = obj;
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};
