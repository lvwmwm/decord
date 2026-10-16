// Module ID: 8866
// Function ID: 8867
// Name: GuildSettingsServerTagUtils
// Dependencies: [2090, 4809, 1087, 8867, 8516, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 8866 (GuildSettingsServerTagUtils)
import Constants from "Constants" /* 1087 */;
import GuildTagUtils from "GuildTagUtils" /* 8516 */;
import MobileServerTagExperimentDefault from "MobileServerTagExperiment" /* 8867 */;
import GuildStore from "GuildStore" /* 2090 */;
import PermissionStore from "PermissionStore" /* 4809 */;
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
