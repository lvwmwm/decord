// Module ID: 8675
// Function ID: 8676
// Name: openInstantInviteActionSheet
// Dependencies: [5055, 8676, 2000, 1273, 2]
// Exports: default

// Module 8675 (openInstantInviteActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

let tmp3;
const discord_common_AnalyticsUtils = tmp3(1273);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  const tmp4 = asyncRequire(8676, dependencyMap.paths);
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE, impressionProperties: { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id } };
  const merged = Object.assign(invite_channel_id);
  openLazy(tmp4, combined, obj, invite_channel_id.stackingBehavior);
};
