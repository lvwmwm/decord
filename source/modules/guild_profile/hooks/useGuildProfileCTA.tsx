// Module ID: 10942
// Function ID: 85081
// Name: useGuildProfileCTA
// Dependencies: [31, 1194, 1917, 1838, 4115, 1849, 653, 566, 1360, 7476, 10943, 7845, 5131, 2]
// Exports: default, getGuildProfileCTAType

// Module 10942 (useGuildProfileCTA)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_9;
const require = arg1;
({ InviteStates: closure_9, GuildFeatures: closure_10 } = ME);
let obj = { IS_MEMBER: 0, [0]: "IS_MEMBER", ADOPT_TAG: 1, [1]: "ADOPT_TAG", HAS_APPLICATION: 2, [2]: "HAS_APPLICATION", APPLY_TO_JOIN: 3, [3]: "APPLY_TO_JOIN", LURK_DISCOVERABLE: 4, [4]: "LURK_DISCOVERABLE", JOIN_VIA_INVITE: 5, [5]: "JOIN_VIA_INVITE", ACCEPT_ROLES: 6, [6]: "ACCEPT_ROLES" };
obj = { INVITE: "INVITE" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileCTA.tsx");

export default function useGuildProfileCTA(id) {
  const _require = id;
  const importDefault = arg1;
  const dependencyMap = arg2;
  id = id.id;
  const features = id.features;
  let obj = _require(566);
  const items = [features];
  const stateFromStores = obj.useStateFromStores(items, () => features.getId());
  const items1 = [stateFromStores1];
  stateFromStores1 = _require(566).useStateFromStores(items1, () => stateFromStores1.getGuild(id));
  let obj2 = _require(566);
  const items2 = [stateFromStores3];
  const items3 = [stateFromStores];
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => stateFromStores3.getUser(stateFromStores), items3);
  const obj3 = _require(566);
  const items4 = [stateFromStores];
  const items5 = [id, stateFromStores];
  stateFromStores3 = _require(566).useStateFromStores(items4, () => {
    let member = null;
    if (null != id) {
      member = stateFromStores.getMember(id, stateFromStores);
    }
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items5);
  const obj4 = _require(566);
  const items6 = [stateFromStores2];
  const items7 = [id, arg2];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items6, () => {
    if (null != dependencyMap) {
      let inviteKeyForGuildId = dependencyMap;
    } else {
      inviteKeyForGuildId = stateFromStores2.getInviteKeyForGuildId(id);
    }
    let invite = null;
    if (null != inviteKeyForGuildId) {
      invite = stateFromStores2.getInvite(inviteKeyForGuildId);
    }
    if (null != invite) {
      if (invite.state !== validInviteKey.BANNED) {
        if (invite.state !== validInviteKey.EXPIRED) {
          let obj = { validInviteKey: inviteKeyForGuildId };
          const flags = invite.flags;
          let num2 = 0;
          if (null != flags) {
            num2 = flags;
          }
          obj.isBypassInvite = id(1360).hasFlag(num2, id(7476).GuildInviteFlags.IS_APPLICATION_BYPASS);
          obj.inviteRoles = invite.roles;
          const obj2 = id(1360);
        }
        return obj;
      }
    }
    obj = { validInviteKey: null, isBypassInvite: false, inviteRoles: null };
  }, items7);
  const validInviteKey = stateFromStoresObject.validInviteKey;
  const isBypassInvite = stateFromStoresObject.isBypassInvite;
  const inviteRoles = stateFromStoresObject.inviteRoles;
  const tmp6 = importDefault(10943)();
  obj = tmp6;
  const items8 = [stateFromStores3, tmp6, id, features, validInviteKey, , , , , , , ];
  ({ visibility: arr9[5], tag: arr9[6] } = id);
  items8[7] = isBypassInvite;
  items8[8] = arg1;
  items8[9] = stateFromStores1;
  items8[10] = inviteRoles;
  items8[11] = stateFromStores2;
  obj = {
    guildId: id,
    ctaType: id.useMemo(() => {
      if (stateFromStores3) {
        if (closure_1 === tmp6.INVITE) {
          if (null != inviteRoles) {
            if (inviteRoles.length > 0) {
              if (null != stateFromStores2) {
                const member = stateFromStores.getMember(id, stateFromStores2.id);
                let _Set = Set;
                let roles;
                if (null != member) {
                  roles = member.roles;
                }
                if (null == roles) {
                  roles = [];
                }
                const prototype = _Set.prototype;
                _Set = new _Set(roles);
                if (inviteRoles.some((id) => !_Set.has(id.id))) {
                  return inviteRoles.ACCEPT_ROLES;
                }
              }
            }
          }
        }
        let primaryGuild;
        if (null != stateFromStores2) {
          primaryGuild = stateFromStores2.primaryGuild;
        }
        let identityGuildId;
        if (null != primaryGuild) {
          identityGuildId = primaryGuild.identityGuildId;
        }
        let tmp42 = identityGuildId === id;
        if (tmp42) {
          let identityEnabled;
          if (null != primaryGuild) {
            identityEnabled = primaryGuild.identityEnabled;
          }
          tmp42 = true === identityEnabled;
        }
        if (closure_1 !== tmp6.INVITE) {
          if (null != _Set.tag) {
            if (!tmp42) {
              if (null != stateFromStores1) {
                if (obj.guildSupportsTags(stateFromStores1)) {
                  let IS_MEMBER = inviteRoles.ADOPT_TAG;
                }
                return IS_MEMBER;
              }
            }
          }
        }
        IS_MEMBER = inviteRoles.IS_MEMBER;
      } else {
        if (tmp6.includes(id)) {
          let APPLY_TO_JOIN = inviteRoles.HAS_APPLICATION;
        } else {
          if (null != features) {
            if (features.includes(isBypassInvite.MEMBER_VERIFICATION_GATE_ENABLED)) {
              if (null != features) {
                if (features.includes(isBypassInvite.MEMBER_VERIFICATION_MANUAL_APPROVAL)) {
                  if (null != validInviteKey) {
                    if (!isBypassInvite) {
                      APPLY_TO_JOIN = inviteRoles.APPLY_TO_JOIN;
                    }
                  }
                }
              }
            }
          }
          if (null != validInviteKey) {
            let JOIN_VIA_INVITE = inviteRoles.JOIN_VIA_INVITE;
          } else {
            JOIN_VIA_INVITE = null;
            if (null != features) {
              JOIN_VIA_INVITE = null;
              if (features.includes(isBypassInvite.DISCOVERABLE)) {
                JOIN_VIA_INVITE = inviteRoles.LURK_DISCOVERABLE;
              }
            }
          }
        }
        return APPLY_TO_JOIN;
      }
    }, items8),
    validInviteKey
  };
  return obj;
};
export const CTATypes = obj;
export const GuildProfileCTAContext = obj;
export const getGuildProfileCTAType = function getGuildProfileCTAType(guildProfileFromInvite, code) {
  let features;
  let id;
  let inviteKeyForGuildId = code;
  ({ id, features } = guildProfileFromInvite);
  id = id.getId();
  user = user.getUser(id);
  let member = null;
  if (null != id) {
    member = store.getMember(id, id);
  }
  let joinedAt;
  if (null != member) {
    joinedAt = member.joinedAt;
  }
  if (null == inviteKeyForGuildId) {
    inviteKeyForGuildId = store2.getInviteKeyForGuildId(id);
  }
  let invite = null;
  if (null != inviteKeyForGuildId) {
    invite = store2.getInvite(inviteKeyForGuildId);
  }
  let tmp11 = null;
  let flag = false;
  if (null != invite) {
    tmp11 = null;
    flag = false;
    if (invite.state !== constants.BANNED) {
      tmp11 = null;
      flag = false;
      if (invite.state !== constants.EXPIRED) {
        const obj = _Set(1360);
        const flags = invite.flags;
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        flag = obj.hasFlag(num2, _Set(7476).GuildInviteFlags.IS_APPLICATION_BYPASS);
        tmp11 = inviteKeyForGuildId;
      }
    }
  }
  const pendingFolderGuildIds = _Set(10943).getPendingFolderGuildIds();
  if (tmp7) {
    let roles;
    if (null != invite) {
      roles = invite.roles;
    }
    if (null != roles) {
      if (invite.roles.length > 0) {
        if (null != user) {
          const member1 = store.getMember(id, user.id);
          _Set = Set;
          let roles1;
          if (null != member1) {
            roles1 = member1.roles;
          }
          if (null == roles1) {
            roles1 = [];
          }
          const prototype = _Set.prototype;
          _Set = new _Set(roles1);
          roles = invite.roles;
          if (roles.some((id) => !_Set.has(id.id))) {
            return obj.ACCEPT_ROLES;
          }
        }
      }
    }
    return obj.IS_MEMBER;
  } else {
    if (pendingFolderGuildIds.includes(id)) {
      let APPLY_TO_JOIN = obj.HAS_APPLICATION;
    } else {
      if (null != features) {
        if (features.includes(constants2.MEMBER_VERIFICATION_GATE_ENABLED)) {
          if (null != features) {
            if (features.includes(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL)) {
              if (null != tmp11) {
                if (!flag) {
                  APPLY_TO_JOIN = obj.APPLY_TO_JOIN;
                }
              }
            }
          }
        }
      }
      if (null != tmp11) {
        let JOIN_VIA_INVITE = obj.JOIN_VIA_INVITE;
      } else {
        JOIN_VIA_INVITE = null;
        if (null != features) {
          JOIN_VIA_INVITE = null;
          if (features.includes(constants2.DISCOVERABLE)) {
            JOIN_VIA_INVITE = obj.LURK_DISCOVERABLE;
          }
        }
      }
    }
    return APPLY_TO_JOIN;
  }
  const obj2 = _Set(10943);
  tmp7 = null != joinedAt;
};
