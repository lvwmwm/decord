// Module ID: 8485
// Function ID: 67593
// Name: canUseMobileServerTagSettings
// Dependencies: [1838, 3758, 653, 8486, 7934, 2]
// Exports: canUseMobileServerTagSettings, canViewMobileServerTag, isServerTagDraftDirty

// Module 8485 (canUseMobileServerTagSettings)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_settings/GuildSettingsServerTagUtils.tsx");

export const canUseMobileServerTagSettings = function canUseMobileServerTagSettings(guildId) {
  const guild = store.getGuild(guildId);
  let enabled = null != guild;
  if (enabled) {
    enabled = _isNativeReflectConstruct.can(Permissions.MANAGE_GUILD, guild);
  }
  if (enabled) {
    let obj = importDefault(8486);
    obj = { location: "GuildSettingsServerTag" };
    enabled = obj.getConfig(obj).enabled;
  }
  return enabled;
};
export const canViewMobileServerTag = function canViewMobileServerTag(id) {
  const guild = store.getGuild(id);
  let enabled = null != guild;
  if (enabled) {
    let obj = require(7934) /* getUserPrimaryGuild */;
    enabled = obj.guildSupportsTags(guild);
  }
  if (enabled) {
    enabled = require(7934) /* getUserPrimaryGuild */.guildHasTag(guild);
    const obj2 = require(7934) /* getUserPrimaryGuild */;
  }
  if (enabled) {
    obj = { location: "GuildSettingsServerTag" };
    enabled = importDefault(8486).getConfig(obj).enabled;
    const obj3 = importDefault(8486);
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
