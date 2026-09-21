// Module ID: 17304
// Function ID: 17305
// Name: guild_automod/PermissionUtils
// Dependencies: [2067, 4399, 11993, 1078, 558, 568, 504, 2]
// Exports: canCurrentUserManageAutomod, canCurrentUserManageMessageFilters

// Module 17304 (guild_automod/PermissionUtils)
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;

const require = globalThis.__r;

const require = fn;
const AutomodTriggerType = fn(11993).AutomodTriggerType;
const Constants = fn(1078);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (GuildStore !== undefined) {
        if (obj2 !== undefined) {
          guild = GuildStore.getGuild(tmp);
          let canResult = null != guild;
          if (canResult) {
            canResult = obj2.can(constants2.MANAGE_GUILD, guild);
          }
          return canResult;
        }
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (GuildStore !== undefined) {
      if (obj2 !== undefined) {
        guild = GuildStore.getGuild(tmp);
        let canResult = null != guild;
        if (canResult) {
          canResult = obj2.can(constants2.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return require("initialize").useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
    if (closure_1 !== AutomodTriggerType.MENTION_SPAM) {
      return false;
    } else {
      guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.COMMUNITY);
      }
      return hasItem;
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_1 !== AutomodTriggerType.MENTION_SPAM) {
      return false;
    } else {
      guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants.COMMUNITY);
      }
      return hasItem;
    }
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    guild = GuildStore.getGuild(guild_id);
    let canResult = null != guild;
    if (canResult) {
      canResult = obj.can(constants2.MANAGE_GUILD, guild);
    }
    tmp = canResult;
    obj = PermissionStore;
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(arg0) {
  guild = GuildStore.getGuild(arg0);
  let canResult = null != guild;
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  }
  return canResult;
};
export const useCanCurrentUserManageAutomod = tmp3;
export const useIsUndeletableMentionSpamRule = tmp4;
export const useIsUserProfileRuleEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      guild = GuildStore.getGuild(closure_0);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(constants.COMMUNITY);
      }
      if (!flag) {
        flag = false;
      }
      return flag;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
});
