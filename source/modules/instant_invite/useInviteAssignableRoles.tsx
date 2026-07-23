// Module ID: 16492
// Function ID: 128530
// Name: useInviteAssignableRoles
// Dependencies: [31, 1911, 1910, 3758, 1849, 653, 566, 3763, 2]
// Exports: default

// Module 16492 (useInviteAssignableRoles)
import result from "result";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, closure_7, _isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStoresObject = _require(currentUser[6]).useStateFromStoresObject(items, () => {
    const obj = {};
    if (null != id) {
      let sortedRoles = outer1_5.getSortedRoles(id.id);
    } else {
      sortedRoles = [];
    }
    obj.sortedRoles = sortedRoles;
    obj.currentUser = outer1_7.getCurrentUser();
    let canResult = null != id;
    if (canResult) {
      canResult = outer1_6.can(outer1_8.MANAGE_ROLES, id);
    }
    obj.canManageRoles = canResult;
    return obj;
  }, items1);
  let sortedRoles = stateFromStoresObject.sortedRoles;
  currentUser = stateFromStoresObject.currentUser;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items2 = [arg0, currentUser, canManageRoles, sortedRoles];
  return canManageRoles.useMemo(() => {
    if (null != highestRole) {
      if (null != currentUser) {
        if (canManageRoles) {
          highestRole = sortedRoles(currentUser[7]).getHighestRole(highestRole, currentUser.id);
          return sortedRoles.filter((managed) => {
            let tmp = !outer2_4(managed);
            if (tmp) {
              let tmp2 = !managed.managed;
              if (tmp2) {
                const tags = managed.tags;
                let guild_connections;
                if (null != tags) {
                  guild_connections = tags.guild_connections;
                }
                let isRoleHigherResult = undefined === guild_connections;
                if (isRoleHigherResult) {
                  const obj = sortedRoles(currentUser[7]);
                  isRoleHigherResult = obj.isRoleHigher(closure_0, outer1_2.id, closure_0, managed);
                }
                tmp2 = isRoleHigherResult;
              }
              tmp = tmp2;
            }
            return tmp;
          });
        }
      }
    }
    return [];
  }, items2);
};
