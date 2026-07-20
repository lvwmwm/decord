// Module ID: 7834
// Function ID: 62468
// Name: getUserPrimaryGuild
// Dependencies: []
// Exports: getGuildTagBadgeUrl, guildHasTag, guildSupportsTags, shouldDisplayGuildTag, useShouldDisplayGuildTag, useUserPrimaryGuild

// Module 7834 (getUserPrimaryGuild)
let GuildTagBadgeMediaProxySizes;
function getUserPrimaryGuild(primaryGuild) {
  if (null != primaryGuild) {
    if (primaryGuild.identityEnabled) {
      const obj = {};
      ({ identityGuildId: obj.guildId, tag: obj.tag, badge: obj.badge } = primaryGuild);
    }
    return {};
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ GuildTagBadgeMediaProxySizes, GuildTagBadgeMediaProxySizesMobile: closure_5, GuildTagBadgeSize: closure_6 } = arg1(dependencyMap[3]));
const GuildFeatures = arg1(dependencyMap[4]).GuildFeatures;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_tag/GuildTagUtils.tsx");

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
      return "https://" + CDN_HOST + "/clan-badges/" + guildId + "/" + badge + ".png?size=" + closure_5[SIZE_12];
    }
  }
};
export { getUserPrimaryGuild };
export const useUserPrimaryGuild = function useUserPrimaryGuild(arg0) {
  let tmp = arg0;
  const arg1 = arg0;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0), items1);
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
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => user.getUser(arg0), items1);
  const obj = arg1(dependencyMap[5]);
  const items2 = [closure_2];
  const items3 = [arg1, arg0];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items2, () => {
    if (null != arg1) {
      if (null != arg0) {
        const member = member.getMember(arg1, arg0);
        return arg0(arg1[6]).hasAutomodQuarantinedProfile(member);
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
  const user = user.getUser(id);
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
      result = merged(dependencyMap[6]).hasAutomodQuarantinedProfile(member.getMember(merged, id));
      const obj = merged(dependencyMap[6]);
    }
    tmp7 = !result;
  }
  return tmp7;
};
