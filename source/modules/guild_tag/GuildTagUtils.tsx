// Module ID: 7934
// Function ID: 62859
// Name: getUserPrimaryGuild
// Dependencies: [1917, 1838, 1849, 7721, 653, 566, 3764, 2]
// Exports: getGuildTagBadgeUrl, guildHasTag, guildSupportsTags, shouldDisplayGuildTag, useShouldDisplayGuildTag, useUserPrimaryGuild

// Module 7934 (getUserPrimaryGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import items from "items";
import { GuildFeatures } from "ME";

let GuildTagBadgeMediaProxySizes;
let closure_5;
let closure_6;
const require = arg1;
function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = {};
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
}
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: closure_5, GuildTagBadgeSize: closure_6 } = items);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_tag/GuildTagUtils.tsx");

export const guildHasTag = function guildHasTag(guild) {
  let tag;
  if (null != guild) {
    const profile = guild.profile;
    if (null != profile) {
      tag = profile.tag;
    }
  }
  return null != tag;
};
export const guildSupportsTags = function guildSupportsTags(guild) {
  const features = guild.features;
  return features.has(GuildFeatures.GUILD_TAGS);
};
export const getGuildTagBadgeUrl = function getGuildTagBadgeUrl(guildId, badge, SIZE_12) {
  if (SIZE_12 === undefined) {
    SIZE_12 = SIZE_12.SIZE_12;
  }
  if (null != badge) {
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + table[SIZE_12];
    }
  }
};
export { getUserPrimaryGuild };
export const useUserPrimaryGuild = function useUserPrimaryGuild(arg0) {
  let tmp = arg0;
  const _require = arg0;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      obj = { identityGuildId: stateFromStores.id, identityEnabled: true };
      const profile = stateFromStores.profile;
      let tag;
      if (null != profile) {
        tag = profile.tag;
      }
      let tmp5;
      if (null != tag) {
        tmp5 = tag;
      }
      obj.tag = tmp5;
      const profile2 = stateFromStores.profile;
      let badge;
      if (null != profile2) {
        badge = profile2.badge;
      }
      let tmp7;
      if (null != badge) {
        tmp7 = badge;
      }
      obj.badge = tmp7;
      tmp3 = obj;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldDisplayGuildTag = function useShouldDisplayGuildTag(arg0, arg1, arg2) {
  let tmp = arg2;
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getUser(closure_0), items1);
  const obj = _require(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [arg1, arg0];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => {
    if (null != table) {
      if (null != callback) {
        const member = outer1_2.getMember(table, callback);
        return callback(table[6]).hasAutomodQuarantinedProfile(member);
      }
    }
    return null;
  }, items3);
  if (undefined === arg2) {
    let primaryGuild;
    if (null != stateFromStores) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tmp = primaryGuild;
  }
  const tmp4Result = getUserPrimaryGuild(tmp);
  return null != tmp4Result.guildId && null != tmp4Result.tag && !stateFromStores1;
};
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id, merged) {
  let tmp = arg2;
  user = user.getUser(id);
  if (undefined === arg2) {
    let primaryGuild;
    if (null != user) {
      primaryGuild = user.primaryGuild;
    }
    tmp = primaryGuild;
  }
  const tmp3Result = getUserPrimaryGuild(tmp);
  let tmp7 = null != tmp3Result.guildId && null != tmp3Result.tag;
  if (tmp7) {
    let result = null != merged && null != id;
    if (result) {
      result = require(3764) /* getAutomodQuarantinedProfileFlags */.hasAutomodQuarantinedProfile(member.getMember(merged, id));
      const obj = require(3764) /* getAutomodQuarantinedProfileFlags */;
    }
    tmp7 = !result;
  }
  return tmp7;
};
