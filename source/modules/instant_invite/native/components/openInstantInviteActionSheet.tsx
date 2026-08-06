// Module ID: 8996
// Function ID: 8997
// Name: openInstantInviteActionSheet
// Dependencies: [4253, 8997, 1988, 503, 2]
// Exports: default

// Module 8996 (openInstantInviteActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = importDefault(4253);
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj.impressionName = require(503) /* encodeProperties */.ImpressionNames.GUILD_INVITE;
  obj.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(require(1988) /* asyncRequireImpl */(8997, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};
