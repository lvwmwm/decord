// Module ID: 16375
// Function ID: 126356
// Name: useInviteAssignableRoles
// Dependencies: []
// Exports: default

// Module 16375 (useInviteAssignableRoles)
let closure_3 = importAll(dependencyMap[0]);
const isEveryoneRole = arg1(dependencyMap[1]).isEveryoneRole;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/instant_invite/useInviteAssignableRoles.tsx");

export default function useInviteAssignableRoles(arg0) {
  const arg1 = arg0;
  const items = [closure_5, closure_7, closure_6];
  const items1 = [arg0];
  const stateFromStoresObject = arg1(dependencyMap[6]).useStateFromStoresObject(items, () => {
    const obj = {};
    if (null != arg0) {
      let sortedRoles = sortedRoles.getSortedRoles(arg0.id);
    } else {
      sortedRoles = [];
    }
    obj.sortedRoles = sortedRoles;
    obj.currentUser = currentUser.getCurrentUser();
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_6.can(constants.MANAGE_ROLES, arg0);
    }
    obj.canManageRoles = canResult;
    return obj;
  }, items1);
  const sortedRoles = stateFromStoresObject.sortedRoles;
  const importAll = sortedRoles;
  const currentUser = stateFromStoresObject.currentUser;
  const dependencyMap = currentUser;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const React = canManageRoles;
  const items2 = [arg0, currentUser, canManageRoles, sortedRoles];
  return React.useMemo(() => {
    if (null != highestRole) {
      if (null != currentUser) {
        if (canManageRoles) {
          const highestRole = sortedRoles(currentUser[7]).getHighestRole(highestRole, currentUser.id);
          return sortedRoles.filter((managed) => {
            let tmp = !callback2(managed);
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
                  const obj = callback(id[7]);
                  isRoleHigherResult = obj.isRoleHigher(closure_0, id.id, closure_0, managed);
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
