// Module ID: 16655
// Function ID: 16656
// Name: guild_automod/PermissionUtils
// Dependencies: [2067, 4469, 11341, 1074, 504, 2]
// Exports: canCurrentUserManageAutomod, canCurrentUserManageMessageFilters, useCanCurrentUserManageAutomod, useIsUndeletableMentionSpamRule, useIsUserProfileRuleEnabled

// Module 16655 (guild_automod/PermissionUtils)
import Constants2 from "Constants" /* 11341 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
const AutomodTriggerType = Constants2.AutomodTriggerType;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const guild = GuildStore.getGuild(guild_id);
    let canResult = null != guild;
    const obj = PermissionStore;
    if (canResult) {
      canResult = obj.can(metroRequire.MANAGE_GUILD, guild);
    }
    tmp = canResult;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  const obj = PermissionStore;
  if (canResult) {
    canResult = obj.can(metroRequire.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const obj = GuildStore;
    if (GuildStore !== undefined) {
      if (PermissionStore !== undefined) {
        const guild = obj.getGuild(tmp);
        const canResult = null != guild && obj2.can(metroRequire.MANAGE_GUILD, guild);
        return canResult;
      }
    }
  }, items1);
};
export const useIsUndeletableMentionSpamRule = function useIsUndeletableMentionSpamRule(guildId, triggerType) {
  _require = guildId;
  dependencyMap = triggerType;
  const items = [GuildStore];
  const items1 = [guildId, triggerType];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (triggerType !== AutomodTriggerType.MENTION_SPAM) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(hasOwnProperty.COMMUNITY);
      }
      return hasItem;
    }
  }, items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(hasOwnProperty.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};
