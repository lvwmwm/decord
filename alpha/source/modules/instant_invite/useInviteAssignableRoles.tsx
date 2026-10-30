// Module ID: 19949
// Function ID: 19950
// Name: useInviteAssignableRoles
// Dependencies: [19, 4916, 4915, 4941, 1384, 1072, 504, 4946, 2]
// Exports: default

// Module 19949 (useInviteAssignableRoles)
import Constants from "Constants" /* 1072 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4916 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
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
          let obj = sortedRoles(currentUser[7]);
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
};
