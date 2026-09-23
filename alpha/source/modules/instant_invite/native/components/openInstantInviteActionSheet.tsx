// Module ID: 10169
// Function ID: 10170
// Name: openInstantInviteActionSheet
// Dependencies: [4794, 10170, 1980, 1249, 2]
// Exports: default

// Module 10169 (openInstantInviteActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const discord_common_AnalyticsUtils = tmp2(1249);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const obj = ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj2 = {};
  const merged = Object.assign(invite_channel_id);
  obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE;
  obj2.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(asyncRequireImpl(10170, dependencyMap.paths), combined, obj2, invite_channel_id.stackingBehavior);
};
