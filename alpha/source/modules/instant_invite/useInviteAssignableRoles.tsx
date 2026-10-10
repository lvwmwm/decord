// Module ID: 18562
// Function ID: 18563
// Name: useInviteAssignableRoles
// Dependencies: [19, 2120, 2119, 4750, 1390, 1085, 558, 576, 504, 4755, 2]

// Module 18562 (useInviteAssignableRoles)
import Constants from "Constants" /* 1085 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2120 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp4, tmp5;

const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInviteAssignableRoles(arg0) {
  let closure_0;
  let currentUser;
  let first;
  let sortedRoles;
  let tmp8;
  let tmp9;
  _require = arg0;
  let tmp2 = dependencyMap;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore, UserStore, ];
    items[2] = PermissionStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class R {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_5;
          sortedRoles = closure_5.getSortedRoles(tmp.id);
        } else {
          sortedRoles = [];
        }
        obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
        canResult = null != tmp;
        if (canResult) {
          tmp4 = closure_6;
          tmp5 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
        }
        obj.canManageRoles = canResult;
        return obj;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = R;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = R;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_5;
          sortedRoles = closure_5.getSortedRoles(tmp.id);
        } else {
          sortedRoles = [];
        }
        obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
        canResult = null != tmp;
        if (canResult) {
          tmp4 = closure_6;
          tmp5 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
        }
        obj.canManageRoles = canResult;
        return obj;
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
  ({ sortedRoles, currentUser } = stateFromStoresObject);
  if (null != arg0) {
    class R {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_5;
          sortedRoles = closure_5.getSortedRoles(tmp.id);
        } else {
          sortedRoles = [];
        }
        obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
        canResult = null != tmp;
        if (canResult) {
          tmp4 = closure_6;
          tmp5 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
        }
        obj.canManageRoles = canResult;
        return obj;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_5;
          sortedRoles = closure_5.getSortedRoles(tmp.id);
        } else {
          sortedRoles = [];
        }
        obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
        canResult = null != tmp;
        if (canResult) {
          tmp4 = closure_6;
          tmp5 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
        }
        obj.canManageRoles = canResult;
        return obj;
      }
    }
    cResult[4] = tmp12;
  } else {
    class R {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_5;
          sortedRoles = closure_5.getSortedRoles(tmp.id);
        } else {
          sortedRoles = [];
        }
        obj = { sortedRoles, currentUser: closure_7.getCurrentUser(), canManageRoles: null };
        canResult = null != tmp;
        if (canResult) {
          tmp4 = closure_6;
          tmp5 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_ROLES, tmp);
        }
        obj.canManageRoles = canResult;
        return obj;
      }
    }
  }
}) : (function useInviteAssignableRoles(arg0) {
  let closure_0;
  let currentUser;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildRoleStore, UserStore, PermissionStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let canResult;
    if (null != closure_0) {
      sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    const obj = { sortedRoles, currentUser: UserStore.getCurrentUser(), canManageRoles: canResult };
    canResult = null != tmp && PermissionStore.can(Permissions.MANAGE_ROLES, tmp);
    return obj;
  }, items1);
  let sortedRoles = stateFromStoresObject.sortedRoles;
  currentUser = stateFromStoresObject.currentUser;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items2 = [arg0, currentUser, canManageRoles, sortedRoles];
  return canManageRoles.useMemo(() => {
    let highestRole;
    let tmp2;
    if (null != highestRole) {
      if (null != currentUser) {
        let tmp3 = canManageRoles;
        if (tmp3) {
          let obj = sortedRoles(currentUser[9]);
          highestRole = obj.getHighestRole(tmp, tmp2.id);
          return sortedRoles.filter((managed) => {
            let tmp2 = !isEveryoneRole(managed);
            isEveryoneRole(managed);
            if (tmp2) {
              let tmp3 = !managed.managed;
              if (tmp3) {
                const tags = managed.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                let isRoleHigherResult = undefined === guild_connections;
                if (isRoleHigherResult) {
                  const obj = PermissionUtilsAll;
                  isRoleHigherResult = obj.isRoleHigher(closure_0, currentUser.id, closure_0, managed);
                }
                tmp3 = isRoleHigherResult;
              }
              tmp2 = tmp3;
            }
            return tmp2;
          });
        }
      }
    }
    return [];
  }, items2);
});
const result = size.fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default tmp2;
