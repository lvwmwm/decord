// Module ID: 1965
// Function ID: 1966
// Name: GuildRoleRecordTypeTag
// Dependencies: [1412, 506, 12, 2]
// Exports: hasAnyPermission, hasPermission, isEveryoneRole, isRoleEqual

// Module 1965 (GuildRoleRecordTypeTag)
import { TypeTag } from "isValueEqual";

const result = require("apply").fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return require(506) /* fromString */.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions) {
  return require(506) /* fromString */.hasAny(permissions.permissions, arg1);
};
export const isRoleEqual = function isRoleEqual(pickResult, arg1) {
  return importDefault(12).isEqualWith(pickResult, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = callback(table[1]).equals(arg0, arg1);
      const obj = callback(table[1]);
    }
    return equalsResult;
  });
};
