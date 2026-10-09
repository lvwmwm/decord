// Module ID: 8624
// Function ID: 8625
// Name: GuildSettingsServerTagUtils
// Dependencies: [2086, 4709, 1085, 8625, 8273, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 8624 (GuildSettingsServerTagUtils)
import Constants from "Constants" /* 1085 */;
import GuildTagUtils from "GuildTagUtils" /* 8273 */;
import MobileServerTagExperimentDefault from "MobileServerTagExperiment" /* 8625 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const GuildSettingsServerTag = "GuildSettingsServerTag";
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let enabled = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  if (enabled) {
    const obj2 = { location: GuildSettingsServerTag };
    const obj = MobileServerTagExperimentDefault;
    enabled = obj.getConfig(obj2).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = GuildStore.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    const obj = GuildTagUtils;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    const obj2 = GuildTagUtils;
    enabled = obj2.guildHasTag(guild);
  }
  if (enabled) {
    const obj4 = { location: GuildSettingsServerTag };
    const obj3 = MobileServerTagExperimentDefault;
    enabled = obj3.getConfig(obj4).enabled;
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(profile, profile2) {
  let tmp = null != profile && null != profile2;
  if (tmp) {
    tmp = profile.tag !== profile2.tag || profile.badge !== profile2.badge || profile.badgeColorPrimary !== profile2.badgeColorPrimary || profile.badgeColorSecondary !== profile2.badgeColorSecondary;
  }
  return tmp;
};
