// Module ID: 18865
// Function ID: 18866
// Name: guild_automod/PermissionUtils
// Dependencies: [4880, 4941, 13242, 1072, 504, 2]
// Exports: canCurrentUserManageAutomod, canCurrentUserManageMessageFilters, hasMentionRaidLimitAccess, useCanCurrentUserManageAutomod, useHasMentionRaidLimitAccess, useIsUndeletableMentionSpamRule, useIsUserProfileRuleEnabled

// Module 18865 (guild_automod/PermissionUtils)
import Constants2 from "Constants" /* 13242 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
const AutomodTriggerType = Constants2.AutomodTriggerType;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export function canCurrentUserManageMessageFilters(guild_id) {
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
}
export function canCurrentUserManageAutomod(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  const obj = PermissionStore;
  if (canResult) {
    canResult = obj.can(metroRequire.MANAGE_GUILD, guild);
  }
  return canResult;
}
export function useCanCurrentUserManageAutomod(arg0) {
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
}
export function hasMentionRaidLimitAccess(guildId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildStore;
  }
  const guild = obj.getGuild(guildId);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(hasOwnProperty.COMMUNITY);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function useHasMentionRaidLimitAccess(guildId) {
  _require = guildId;
  let obj = require("get initialized");
  const items = [GuildStore];
  const items1 = [guildId];
  return obj.useStateFromStores(items, () => {
    const obj = GuildStore;
    if (GuildStore !== undefined) {
      const guild = obj.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(hasOwnProperty.COMMUNITY);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
}
export function useIsUndeletableMentionSpamRule(guildId, triggerType) {
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
}
export function useIsUserProfileRuleEnabled(guildId) {
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
}
