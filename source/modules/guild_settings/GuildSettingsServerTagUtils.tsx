// Module ID: 8435
// Function ID: 67328
// Name: canUseMobileServerTagSettings
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 8435 (canUseMobileServerTagSettings)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { Permissions } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = store.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = closure_4.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    let obj = importDefault(dependencyMap[3]);
    obj = { location: "GuildSettingsServerTag" };
    enabled = obj.getConfig(obj).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = store.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    let obj = arg1(dependencyMap[4]);
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = arg1(dependencyMap[4]).guildHasTag(guild);
    const obj2 = arg1(dependencyMap[4]);
  }
  if (enabled) {
    obj = { location: "GuildSettingsServerTag" };
    enabled = importDefault(dependencyMap[3]).getConfig(obj).enabled;
    const obj3 = importDefault(dependencyMap[3]);
  }
  return enabled;
};
export const isServerTagDraftDirty = function isServerTagDraftDirty(closure_31, closure_30) {
  let tmp = null != closure_31 && null != closure_30;
  if (tmp) {
    tmp = closure_31.tag !== closure_30.tag || closure_31.badge !== closure_30.badge || closure_31.badgeColorPrimary !== closure_30.badgeColorPrimary || closure_31.badgeColorSecondary !== closure_30.badgeColorSecondary;
    const tmp2 = closure_31.tag !== closure_30.tag || closure_31.badge !== closure_30.badge || closure_31.badgeColorPrimary !== closure_30.badgeColorPrimary || closure_31.badgeColorSecondary !== closure_30.badgeColorSecondary;
  }
  return tmp;
};
