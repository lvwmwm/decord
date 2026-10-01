// Module ID: 9224
// Function ID: 9225
// Name: useGuildProfileCTA
// Dependencies: [19, 502, 2108, 2067, 4817, 1372, 1074, 504, 1385, 7840, 9225, 7610, 5862, 2]
// Exports: default, getGuildProfileCTAType

// Module 9224 (useGuildProfileCTA)
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildTagUtils from "GuildTagUtils" /* 7610 */;
import usePendingFolderGuildIds from "usePendingFolderGuildIds" /* 9225 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import InviteStore from "InviteStore" /* 4817 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const usePendingFolderGuildIdsDefault = usePendingFolderGuildIds;
let _require, closure_12, dependencyMap, importDefault;

let c10;
let c9;
({ InviteStates: c9, GuildFeatures: c10 } = Constants);
const CTATypes = { IS_MEMBER: 0, [0]: "IS_MEMBER", ADOPT_TAG: 1, [1]: "ADOPT_TAG", HAS_APPLICATION: 2, [2]: "HAS_APPLICATION", APPLY_TO_JOIN: 3, [3]: "APPLY_TO_JOIN", LURK_DISCOVERABLE: 4, [4]: "LURK_DISCOVERABLE", JOIN_VIA_INVITE: 5, [5]: "JOIN_VIA_INVITE", ACCEPT_ROLES: 6, [6]: "ACCEPT_ROLES" };
let obj2 = { INVITE: "INVITE" };
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileCTA.tsx");

export default function useGuildProfileCTA(id, arg1, arg2) {
  let closure_1;
  let closure_2;
  let stateFromStores1;
  let stateFromStores3;
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  id = id.id;
  const features = id.features;
  let obj = require("get initialized");
  const items = [features];
  const stateFromStores = obj.useStateFromStores(items, () => features.getId());
  obj2 = require("get initialized");
  const items1 = [stateFromStores1];
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(id));
  const items2 = [stateFromStores3];
  const items3 = [stateFromStores];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => UserStore.getUser(stateFromStores), items3);
  const items4 = [stateFromStores];
  const items5 = [id, stateFromStores];
  const obj4 = require("get initialized");
  stateFromStores3 = obj4.useStateFromStores(items4, () => {
    let member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(tmp, stateFromStores);
    }
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items5);
  const items6 = [stateFromStores2];
  const items7 = [id, arg2];
  const obj5 = require("get initialized");
  const stateFromStoresObject = obj5.useStateFromStoresObject(items6, () => {
    let hasFlag;
    let num;
    let tmp6;
    let inviteKeyForGuildId = closure_2;
    if (closure_2 == null) {
      inviteKeyForGuildId = InviteStore.getInviteKeyForGuildId(id);
    }
    let invite = null;
    if (null != inviteKeyForGuildId) {
      invite = InviteStore.getInvite(inviteKeyForGuildId);
    }
    if (null != invite) {
      if (invite.state !== validInviteKey.BANNED) {
        let obj;
        if (invite.state !== tmp9.EXPIRED) {
          obj = { validInviteKey: inviteKeyForGuildId, isBypassInvite: hasFlag(num, tmp6(7840).GuildInviteFlags.IS_APPLICATION_BYPASS), inviteRoles: invite.roles };
          num = invite.flags;
          hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          tmp6 = require;
          if (num == null) {
            num = 0;
          }
        }
        return obj;
      }
    }
    obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
  }, items7);
  const validInviteKey = stateFromStoresObject.validInviteKey;
  const isBypassInvite = stateFromStoresObject.isBypassInvite;
  const inviteRoles = stateFromStoresObject.inviteRoles;
  let tmp6 = usePendingFolderGuildIdsDefault();
  closure_12 = tmp6;
  const items8 = [stateFromStores3, tmp6, id, features, validInviteKey, , , , , , , ];
  ({ visibility: arr9[5], tag: arr9[6] } = id);
  items8[7] = isBypassInvite;
  items8[8] = arg1;
  items8[9] = stateFromStores1;
  items8[10] = inviteRoles;
  items8[11] = stateFromStores2;
  const obj6 = {
    guildId: id,
    ctaType: id.useMemo(function() {
      const tmp = stateFromStores3;
      if (tmp) {
        const tmp22 = closure_1;
        const tmp23 = obj2;
        if (closure_1 === obj2.INVITE) {
          if (null != inviteRoles) {
            if (inviteRoles.length > 0) {
              if (null != stateFromStores2) {
                const member = GuildMemberStore.getMember(id, tmp24.id);
                let roles;
                const _Set = Set;
                if (member != null) {
                  roles = member.roles;
                }
                if (roles == null) {
                  roles = [];
                }
                const self = this;
                const self2 = this;
                const _Set1 = new _Set(roles);
                if (inviteRoles.some((id) => !_Set1.has(id.id))) {
                  return obj.ACCEPT_ROLES;
                }
              }
            }
          }
        }
        let primaryGuild;
        if (stateFromStores2 != null) {
          primaryGuild = stateFromStores2.primaryGuild;
        }
        let identityGuildId;
        if (primaryGuild != null) {
          identityGuildId = primaryGuild.identityGuildId;
        }
        let tmp36 = identityGuildId === id;
        if (tmp36) {
          let identityEnabled;
          if (primaryGuild != null) {
            identityEnabled = primaryGuild.identityEnabled;
          }
          tmp36 = true === identityEnabled;
        }
        if (tmp22 !== tmp23.INVITE) {
          if (null != id.tag) {
            if (!tmp36) {
              if (null != stateFromStores1) {
                let IS_MEMBER;
                obj2 = GuildTagUtils;
                if (obj2.guildSupportsTags(tmp39)) {
                  IS_MEMBER = obj.ADOPT_TAG;
                }
                return IS_MEMBER;
              }
            }
          }
        }
        IS_MEMBER = obj.IS_MEMBER;
      } else {
        let APPLY_TO_JOIN;
        if (closure_12.includes(id)) {
          APPLY_TO_JOIN = obj.HAS_APPLICATION;
        } else {
          let JOIN_VIA_INVITE;
          let hasItem;
          if (features != null) {
            hasItem = obj.includes(isBypassInvite.MEMBER_VERIFICATION_GATE_ENABLED);
          }
          if (hasItem) {
            let hasItem1;
            if (features != null) {
              hasItem1 = obj.includes(isBypassInvite.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (hasItem1) {
              if (null != validInviteKey) {
                const tmp13 = isBypassInvite;
                if (!tmp13) {
                  APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
                }
              }
            }
          }
          if (null != validInviteKey) {
            JOIN_VIA_INVITE = obj.JOIN_VIA_INVITE;
          } else {
            let hasItem2;
            if (features != null) {
              hasItem2 = obj.includes(isBypassInvite.DISCOVERABLE);
            }
            JOIN_VIA_INVITE = null;
            if (hasItem2) {
              JOIN_VIA_INVITE = obj.LURK_DISCOVERABLE;
            }
          }
          APPLY_TO_JOIN = JOIN_VIA_INVITE;
        }
        return APPLY_TO_JOIN;
      }
    }, items8),
    validInviteKey
  };
  return obj6;
};
export { CTATypes };
export const GuildProfileCTAContext = obj2;
export const getGuildProfileCTAType = function getGuildProfileCTAType(guildProfileFromInvite, code) {
  let features;
  let id;
  ({ id, features } = guildProfileFromInvite);
  const id1 = AuthenticationStore.getId();
  const user = UserStore.getUser(id1);
  let member = null;
  if (null != id) {
    member = GuildMemberStore.getMember(id, id1);
  }
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  let inviteKeyForGuildId = code;
  const tmp7 = null != joinedAt;
  if (code == null) {
    inviteKeyForGuildId = InviteStore.getInviteKeyForGuildId(id);
  }
  let invite = null;
  if (null != inviteKeyForGuildId) {
    invite = InviteStore.getInvite(inviteKeyForGuildId);
  }
  let flag = false;
  let tmp11 = null;
  if (null != invite) {
    flag = false;
    tmp11 = null;
    if (invite.state !== constants.BANNED) {
      flag = false;
      tmp11 = null;
      if (invite.state !== tmp12.EXPIRED) {
        let num = invite.flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        const tmp13 = require;
        if (num == null) {
          num = 0;
        }
        flag = hasFlag(num, tmp13(7840).GuildInviteFlags.IS_APPLICATION_BYPASS);
        tmp11 = inviteKeyForGuildId;
      }
    }
  }
  const obj = usePendingFolderGuildIds;
  const pendingFolderGuildIds = obj.getPendingFolderGuildIds();
  if (tmp7) {
    let roles1;
    if (invite != null) {
      roles1 = invite.roles;
    }
    if (null != roles1) {
      if (invite.roles.length > 0) {
        if (null != user) {
          const member1 = GuildMemberStore.getMember(id, user.id);
          let roles2;
          const _Set = Set;
          if (member1 != null) {
            roles2 = member1.roles;
          }
          if (roles2 == null) {
            roles2 = [];
          }
          const self = this;
          const self2 = this;
          const _Set1 = new _Set(roles2);
          const roles = invite.roles;
          if (roles.some((id) => !_Set1.has(id.id))) {
            return obj.ACCEPT_ROLES;
          }
        }
      }
    }
    return obj.IS_MEMBER;
  } else {
    let APPLY_TO_JOIN;
    if (pendingFolderGuildIds.includes(id)) {
      APPLY_TO_JOIN = obj.HAS_APPLICATION;
    } else {
      let JOIN_VIA_INVITE;
      let hasItem;
      if (features != null) {
        hasItem = features.includes(constants2.MEMBER_VERIFICATION_GATE_ENABLED);
      }
      if (hasItem) {
        let hasItem1;
        if (features != null) {
          hasItem1 = features.includes(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (hasItem1) {
          if (null != tmp11) {
            if (!flag) {
              APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
            }
          }
        }
      }
      if (null != tmp11) {
        JOIN_VIA_INVITE = obj.JOIN_VIA_INVITE;
      } else {
        let hasItem2;
        if (features != null) {
          hasItem2 = features.includes(constants2.DISCOVERABLE);
        }
        JOIN_VIA_INVITE = null;
        if (hasItem2) {
          JOIN_VIA_INVITE = obj.LURK_DISCOVERABLE;
        }
      }
      APPLY_TO_JOIN = JOIN_VIA_INVITE;
    }
    return APPLY_TO_JOIN;
  }
};
