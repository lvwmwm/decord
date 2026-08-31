// Module ID: 9877
// Function ID: 9878
// Name: openInstantInviteActionSheet
// Dependencies: [4415, 9878, 2009, 503, 2]
// Exports: default

// Module 9877 (openInstantInviteActionSheet)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj.impressionName = encodeProperties.ImpressionNames.GUILD_INVITE;
  obj.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(asyncRequireImpl(9878, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};
