// Module ID: 1911
// Function ID: 21564
// Name: GuildRoleRecordTypeTag
// Dependencies: [1388, 483, 22, 2]
// Exports: hasAnyPermission, hasPermission, isEveryoneRole, isRoleEqual

// Module 1911 (GuildRoleRecordTypeTag)
import { TypeTag } from "constructInPlace";

const result = require("apply").fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(guildRole) {
  return guildRole.id === guildRole.guildId;
};
export const hasPermission = function hasPermission(permissions) {
  return require(483) /* fromHexReverseArray */.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions, closure_10) {
  return require(483) /* fromHexReverseArray */.hasAny(permissions.permissions, closure_10);
};
export const isRoleEqual = function isRoleEqual(role, arg1) {
  return importDefault(22).isEqualWith(role, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      equalsResult = outer1_0(outer1_2[1]).equals(arg0, arg1);
      const obj = outer1_0(outer1_2[1]);
    }
    return equalsResult;
  });
};
