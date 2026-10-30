// Module ID: 9058
// Function ID: 9059
// Name: GuildSettingsServerTagUtils
// Dependencies: [4880, 4941, 1072, 8728, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 9058 (GuildSettingsServerTagUtils)
import Constants from "Constants" /* 1072 */;
import GuildTagUtils from "GuildTagUtils" /* 8728 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
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
