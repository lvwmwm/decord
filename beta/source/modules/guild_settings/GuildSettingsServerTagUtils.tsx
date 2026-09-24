// Module ID: 9868
// Function ID: 9869
// Name: GuildSettingsServerTagUtils
// Dependencies: [2067, 4431, 1078, 9869, 8471, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 9868 (GuildSettingsServerTagUtils)
import GuildTagUtils from "GuildTagUtils" /* 8471 */;
import MobileServerTagExperimentDefault from "MobileServerTagExperiment" /* 9869 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4431 */;

require = fn;
const Permissions = fn(1078).Permissions;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  guild = GuildStore.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    const obj2 = { location: GuildSettingsServerTag };
    enabled = MobileServerTagExperimentDefault.getConfig(obj2).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  guild = GuildStore.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    enabled = GuildTagUtils.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = GuildTagUtils.guildHasTag(guild);
  }
  if (enabled) {
    const obj4 = { location: GuildSettingsServerTag };
    enabled = MobileServerTagExperimentDefault.getConfig(obj4).enabled;
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
    const tmp2 = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
};
