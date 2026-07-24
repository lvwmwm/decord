// Module ID: 3764
// Function ID: 28843
// Name: getAutomodQuarantinedProfileFlags
// Dependencies: [1917, 3746, 1360, 566, 2]
// Exports: getAutomodQuarantinedGuildMemberFlags, getAutomodReason, useCurrentUserAutomodQuaratinedProfile

// Module 3764 (getAutomodQuarantinedProfileFlags)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
function getAutomodQuarantinedProfileFlags(flags) {
  let closure_0 = flags;
  if (null == flags) {
    const _Set2 = Set;
    let set = new Set();
  } else {
    const _Set = Set;
    set = new Set(items.reduce((arr) => {
      let num = 0;
      if (null != callback) {
        num = callback;
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
  let closure_0 = member;
  let tmp = null != member;
  if (tmp) {
    let someResult = null != member.flags;
    if (someResult) {
      someResult = items.some((arg0) => {
        const flags = member.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        return member(outer1_1[2]).hasFlag(num, arg0);
      });
    }
    tmp = someResult;
  }
  return tmp;
}
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const result = require("hasFlag").fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

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
  const _require = guild_id;
  const items = [_isNativeReflectConstruct];
  const items1 = [guild_id];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = outer1_6(outer1_2.getSelfMember(closure_0));
    }
    return tmp;
  }, items1);
};
