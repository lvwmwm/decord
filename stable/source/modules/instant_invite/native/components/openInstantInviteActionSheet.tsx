// Module ID: 8963
// Function ID: 8964
// Name: openInstantInviteActionSheet
// Dependencies: [5155, 8964, 2002, 1275, 2]
// Exports: default

// Module 8963 (openInstantInviteActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

let tmp3;
const discord_common_AnalyticsUtils = tmp3(1275);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  const tmp4 = asyncRequire(8964, dependencyMap.paths);
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE, impressionProperties: { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id } };
  const merged = Object.assign(invite_channel_id);
  openLazy(tmp4, combined, obj, invite_channel_id.stackingBehavior);
};
