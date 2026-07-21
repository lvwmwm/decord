// Module ID: 1911
// Function ID: 21563
// Name: GuildRoleRecordTypeTag
// Dependencies: []
// Exports: hasAnyPermission, hasPermission, isEveryoneRole, isRoleEqual

// Module 1911 (GuildRoleRecordTypeTag)
const TypeTag = require(dependencyMap[0]).TypeTag;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return require(dependencyMap[1]).has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions, closure_10) {
  return require(dependencyMap[1]).hasAny(permissions.permissions, closure_10);
};
export const isRoleEqual = function isRoleEqual(role, arg1) {
  return importDefault(dependencyMap[2]).isEqualWith(role, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = callback(closure_2[1]).equals(arg0, arg1);
      const obj = callback(closure_2[1]);
    }
    return equalsResult;
  });
};
