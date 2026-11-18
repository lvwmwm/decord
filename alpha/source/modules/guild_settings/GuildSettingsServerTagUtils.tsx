// Module ID: 7909
// Function ID: 7910
// Name: GuildSettingsServerTagUtils
// Dependencies: [4694, 4755, 1072, 7910, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 7909 (GuildSettingsServerTagUtils)
import Constants from "Constants" /* 1072 */;
import GuildTagUtils from "GuildTagUtils" /* 7910 */;
import GuildStore from "GuildStore" /* 4694 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export function canUseMobileServerTagSettings(guildId) {
  const guild = GuildStore.getGuild(guildId);
  const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  return canResult;
}
export function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let guildSupportsTagsResult = null != guild;
  if (guildSupportsTagsResult) {
    const obj = GuildTagUtils;
    guildSupportsTagsResult = obj.guildSupportsTags(guild);
  }
  if (guildSupportsTagsResult) {
    const obj2 = GuildTagUtils;
    guildSupportsTagsResult = obj2.guildHasTag(guild);
  }
  return guildSupportsTagsResult;
}
export function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
}
