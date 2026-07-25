// Module ID: 8294
// Function ID: 66668
// Name: openInstantInviteActionSheet
// Dependencies: [4099, 8295, 1935, 480, 2]
// Exports: default

// Module 8294 (openInstantInviteActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = importDefault(4099);
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
  obj.openLazy(require(1935) /* maybeLoadBundle */(8295, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};
