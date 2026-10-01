// Module ID: 7610
// Function ID: 7611
// Name: GuildTagUtils
// Dependencies: [2108, 2067, 1372, 7386, 1074, 504, 4475, 2]
// Exports: getGuildTagBadgeUrl, getUserPrimaryGuild, guildHasTag, guildSupportsTags, shouldDisplayGuildTag, useShouldDisplayGuildTag, useUserPrimaryGuild

// Module 7610 (GuildTagUtils)
import Constants from "Constants" /* 1074 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4475 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let GuildTagBadgeMediaProxySizes;
let hasOwnProperty;
let metroRequire;
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: hasOwnProperty, GuildTagBadgeSize: metroRequire } = GuildTagConstants);
const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_tag/GuildTagUtils.tsx");

export const guildHasTag = function guildHasTag(guild) {
  let tag;
  if (guild != null) {
    const profile = guild.profile;
    if (profile != null) {
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
  metroRequire = SIZE_12;
  if (SIZE_12 === undefined) {
    metroRequire = metroRequire.SIZE_12;
  }
  if (null != badge) {
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + hasOwnProperty[metroRequire];
    }
  }
};
export const getUserPrimaryGuild = function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
};
export const useUserPrimaryGuild = function useUserPrimaryGuild(arg0) {
  let badge;
  let closure_0;
  let profile;
  let tag;
  let tmp = arg0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  if (null != arg0) {
    let tmp3 = stateFromStores;
    if (null != stateFromStores) {
      const obj3 = { identityGuildId: null, identityEnabled: true, tag, badge };
      ({ id: obj2.identityGuildId, profile } = stateFromStores);
      tag = undefined;
      if (profile != null) {
        tag = profile.tag;
      }
      const profile2 = stateFromStores.profile;
      badge = undefined;
      if (profile2 != null) {
        badge = profile2.badge;
      }
      tmp3 = obj3;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldDisplayGuildTag = function useShouldDisplayGuildTag(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = arg2;
  let obj = require("get initialized");
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const items2 = [GuildMemberStore];
  const items3 = [arg1, arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    if (null != closure_1) {
      if (null != closure_0) {
        const member = GuildMemberStore.getMember(tmp, tmp2);
        const obj = AutomodPermissionUtils;
        return obj.hasAutomodQuarantinedProfile(member);
      }
    }
    return null;
  }, items3);
  if (undefined === arg2) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    let obj6;
    if (tmp.identityEnabled) {
      const obj3 = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj4.guildId, tag: obj4.tag, badge: obj4.badge } = tmp);
      obj6 = obj3;
    }
    return null != obj6.guildId && null != obj6.tag && !stateFromStores1;
  }
  obj6 = {};
};
export const shouldDisplayGuildTag = function shouldDisplayGuildTag(id2, guildId1, arg2) {
  let tmp = arg2;
  const user = UserStore.getUser(id2);
  if (undefined === arg2) {
    let primaryGuild;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    tmp = primaryGuild;
  }
  if (null != tmp) {
    let obj;
    if (tmp.identityEnabled) {
      const obj4 = { guildId: null, tag: null, badge: null };
      ({ identityGuildId: obj2.guildId, tag: obj2.tag, badge: obj2.badge } = tmp);
      obj = obj4;
    }
    let tmp5 = null != obj.guildId && null != obj.tag;
    if (tmp5) {
      let result = null != guildId1 && null != id2;
      if (result) {
        const obj3 = AutomodPermissionUtils;
        result = obj3.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(guildId1, id2));
      }
      tmp5 = !result;
    }
    return tmp5;
  }
  obj = {};
};
