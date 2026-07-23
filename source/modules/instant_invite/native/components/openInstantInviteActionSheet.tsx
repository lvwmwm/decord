// Module ID: 8489
// Function ID: 67784
// Name: openInstantInviteActionSheet
// Dependencies: [4098, 8490, 1934, 480, 2]
// Exports: default

// Module 8489 (openInstantInviteActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = importDefault(4098);
  let id = invite_channel_id.vanityURLCode;
  if (null == id) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj["impressionName"] = require(480) /* isThrottled */.ImpressionNames.GUILD_INVITE;
  obj = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj["impressionProperties"] = obj;
  obj.openLazy(require(1934) /* maybeLoadBundle */(8490, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};
