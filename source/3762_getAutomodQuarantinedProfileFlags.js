// Module ID: 3762
// Function ID: 28832
// Name: getAutomodQuarantinedProfileFlags
// Dependencies: []
// Exports: getAutomodQuarantinedGuildMemberFlags, getAutomodReason, useCurrentUserAutomodQuaratinedProfile

// Module 3762 (getAutomodQuarantinedProfileFlags)
function getAutomodQuarantinedProfileFlags(flags) {
  const arg1 = flags;
  if (null == flags) {
    const _Set2 = Set;
    let set = new Set();
  } else {
    const _Set = Set;
    set = new Set(items.reduce((arr) => {
      let num = 0;
      if (null != arr) {
        num = arr;
      }
      if (obj.hasFlag(num, arg1)) {
        arr.push(arg1);
      }
      return arr;
    }, []));
  }
  return set;
}
function hasAutomodQuarantinedProfile(member) {
  const arg1 = member;
  let tmp = null != member;
  if (tmp) {
    let someResult = null != member.flags;
    if (someResult) {
      someResult = items.some((arg0) => {
        const flags = arg0.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        return arg0(closure_1[2]).hasFlag(num, arg0);
      });
    }
    tmp = someResult;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
const GuildMemberFlags = arg1(dependencyMap[1]).GuildMemberFlags;
const items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export { getAutomodQuarantinedProfileFlags };
export const getAutomodQuarantinedGuildMemberFlags = function getAutomodQuarantinedGuildMemberFlags(member) {
  if (null == member) {
    const _Set = Set;
    let set = new Set();
  } else {
    set = getAutomodQuarantinedProfileFlags(member.flags);
  }
  return set;
};
export const getAutomodReason = function getAutomodReason(automodQuarantinedGuildMemberFlags) {
  if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
    let prop = GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
  } else if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
    prop = GuildMemberFlags.AUTOMOD_QUARANTINED_BIO;
  } else {
    prop = null;
    if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG)) {
      prop = GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG;
    }
  }
  return prop;
};
export { hasAutomodQuarantinedProfile };
export const useCurrentUserAutomodQuaratinedProfile = function useCurrentUserAutomodQuaratinedProfile(guild_id) {
  const arg1 = guild_id;
  const items = [closure_2];
  const items1 = [guild_id];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = callback(selfMember.getSelfMember(arg0));
    }
    return tmp;
  }, items1);
};
