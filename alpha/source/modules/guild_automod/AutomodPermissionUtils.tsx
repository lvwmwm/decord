// Module ID: 4947
// Function ID: 4948
// Name: AutomodPermissionUtils
// Dependencies: [4921, 4927, 1397, 504, 2]
// Exports: getAutomodQuarantinedGuildMemberFlags, getAutomodQuarantinedProfileFlags, getAutomodReason, hasAutomodQuarantinedProfile, useCurrentUserAutomodQuaratinedProfile

// Module 4947 (AutomodPermissionUtils)
import FlagUtils from "FlagUtils" /* 1397 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4927 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let items = [, , ];
({ AUTOMOD_QUARANTINED_BIO: arr[0], AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME: arr[1], AUTOMOD_QUARANTINED_SERVER_TAG: arr[2] } = GuildMemberFlags);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodPermissionUtils.tsx");

export const AUTOMOD_QUARANTINED_PROFILE_FLAGS = items;
export function getAutomodQuarantinedProfileFlags(flags) {
  let closure_0 = flags;
  if (null == flags) {
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set = new Set();
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(items.reduce((arr, item) => {
      let num = flags;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (flags == null) {
        num = 0;
      }
      if (hasFlag(num, item)) {
        arr.push(item);
      }
      return arr;
    }, []));
  }
  return set;
}
export function getAutomodQuarantinedGuildMemberFlags(member) {
  if (null == member) {
    const _Set3 = Set;
    const self5 = this;
    const self6 = this;
    set = new Set();
  } else {
    const flags = member.flags;
    if (null == flags) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      set = new Set();
    } else {
      const tmp = globalThis;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items.reduce((arr, item) => {
        let num = flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (flags == null) {
          num = 0;
        }
        if (hasFlag(num, item)) {
          arr.push(item);
        }
        return arr;
      }, []));
    }
  }
  return set;
}
export function getAutomodReason(automodQuarantinedGuildMemberFlags) {
  let prop;
  if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
    prop = tmp.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
  } else if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
    prop = tmp.AUTOMOD_QUARANTINED_BIO;
  } else {
    prop = null;
    if (automodQuarantinedGuildMemberFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG)) {
      prop = tmp.AUTOMOD_QUARANTINED_SERVER_TAG;
    }
  }
  return prop;
}
export function hasAutomodQuarantinedProfile(member) {
  let closure_0 = member;
  let tmp = null != member;
  if (tmp) {
    tmp = null != member.flags && items.some((item) => {
      let num = selfMember.flags;
      const hasFlag = guild_id(closure_2_1[2]).hasFlag;
      guild_id(closure_2_1[2]);
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, item);
    });
    const someResult = null != member.flags && items.some((item) => {
      let num = selfMember.flags;
      const hasFlag = guild_id(closure_2_1[2]).hasFlag;
      guild_id(closure_2_1[2]);
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, item);
    });
  }
  return tmp;
}
export function useCurrentUserAutomodQuaratinedProfile(guild_id) {
  _require = guild_id;
  items = [GuildMemberStore];
  const items1 = [guild_id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != guild_id;
    if (tmp2) {
      const selfMember = GuildMemberStore.getSelfMember(tmp);
      let tmp5 = null != selfMember;
      if (tmp5) {
        tmp5 = null != selfMember.flags && items.some((item) => {
          let num = selfMember.flags;
          const hasFlag = guild_id(closure_2_1[2]).hasFlag;
          guild_id(closure_2_1[2]);
          if (num == null) {
            num = 0;
          }
          return hasFlag(num, item);
        });
        const someResult = null != selfMember.flags && items.some((item) => {
          let num = selfMember.flags;
          const hasFlag = guild_id(closure_2_1[2]).hasFlag;
          guild_id(closure_2_1[2]);
          if (num == null) {
            num = 0;
          }
          return hasFlag(num, item);
        });
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1);
}
